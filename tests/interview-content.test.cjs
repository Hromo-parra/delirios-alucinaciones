/* Validación de integridad para que ampliar el banco no rompa el recorrido.
 * Ejecutar con node --test tests/interview-content.test.cjs (sin dependencias).
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/interview-content.js'), 'utf8'), context);
const data = vm.runInContext('INTERVIEW', context);
const questions = [data.safety, ...data.questions];
const ids = new Set(questions.map(q => q.id));

test('Cada pregunta tiene identidad única, respuesta, hallazgo y devolución', () => {
  assert.equal(ids.size, questions.length);
  for (const q of questions) {
    assert.match(q.id, /^[a-z]+$/);
    for (const field of ['label', 'response', 'finding', 'feedback']) {
      assert.equal(typeof q[field], 'string');
      assert.ok(q[field].trim().length > 10, `${q.id}: falta ${field}`);
    }
  }
});

test('Los bloques son transitables y usan preguntas distintas existentes', () => {
  const assigned = [];
  for (const stage of data.stages) {
    assert.ok(stage.questions.length >= 2, 'No permite completar el mínimo de preguntas');
    stage.questions.forEach(id => { assert.ok(ids.has(id), id); assigned.push(id); });
  }
  assert.equal(new Set(assigned).size, assigned.length);
  assert.equal(assigned.length, data.questions.length);
  assert.ok(!assigned.includes(data.safety.id), 'Seguridad debe seguir accesible en todos los bloques');
});

test('Las decisiones tienen una clave única y criterios de evidencia válidos', () => {
  assert.equal(new Set(data.decisions.map(d => d.id)).size, data.decisions.length);
  for (const decision of data.decisions) {
    assert.equal(decision.options.filter(o => o.correct).length, 1);
    assert.ok(decision.needs.length > 0);
    decision.needs.forEach(id => assert.ok(ids.has(id), id));
    decision.options.forEach(o => assert.ok(o.text && o.feedback));
  }
});

test('La devolución cubre todas las preguntas, incluida seguridad', () => {
  const coverage = new Set(data.rubric.flatMap(r => Array.from(r.ids)));
  assert.equal(coverage.size, ids.size);
  for (const id of ids) assert.ok(coverage.has(id), id);
  for (const id of coverage) assert.ok(ids.has(id), id);
});
