/* Motor de entrevista: todo el estado vive en memoria y se pierde al recargar.
 * Las preguntas no cambian el caso; permiten descubrir sus datos en otro orden.
 * El modo docente revela la guía sin modificar los intentos del estudiante.
 */
(() => {
  'use strict';
  const root = document.querySelector('#interview-app');
  if (!root) return;
  const h = value => String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const allQuestions = [INTERVIEW.safety, ...INTERVIEW.questions];
  const questionById = new Map(allQuestions.map(q => [q.id, q]));
  const freshState = () => ({phase: 0, asked: [], choices: {}, first: {}, note: '', confirmReset: false});
  let state = freshState();
  let teacherMode = document.querySelector('#teacher').checked;
  const modeLabel = () => teacherMode ? 'Modo docente' : 'Modo estudiante';
  const currentStage = () => INTERVIEW.stages[state.phase - 1];
  const askedInStage = stage => stage.questions.filter(id => state.asked.includes(id)).length;
  const missingFor = decision => decision.needs.filter(id => !state.asked.includes(id));

  function questionButton(id) {
    const q = questionById.get(id);
    const asked = state.asked.includes(id);
    return `<button type="button" class="interview-question" data-ask="${id}"
      ${asked ? 'disabled' : ''} aria-controls="interview-transcript">
      <span>${h(q.label)}</span><small>${asked ? 'Explorada' : 'Elegir pregunta'}</small></button>`;
  }

  function transcript() {
    const entries = state.asked.map(id => {
      const q = questionById.get(id);
      return `<article class="interview-exchange"><h4>Tu pregunta</h4><p>${h(q.label)}</p>
        <blockquote><span>Alex / datos del encuentro</span>${h(q.response)}</blockquote>
        <details><summary>Qué aporta esta pregunta</summary><p>${h(q.feedback)}</p></details></article>`;
    }).join('');
    return `<details class="interview-transcript" id="interview-transcript"><summary>Registro de la entrevista (${state.asked.length} preguntas)</summary>
      ${entries || '<p class="subtle">Aquí aparecerán las preguntas que elijas y las respuestas de Alex.</p>'}</details>`;
  }

  function evidence() {
    return `<details class="interview-evidence"><summary>Cuaderno de hallazgos (${state.asked.length})</summary>
      <ul>${state.asked.map(id => `<li>${h(questionById.get(id).finding)}</li>`).join('') || '<li>Aún no has recogido datos mediante preguntas.</li>'}</ul></details>`;
  }

  function teacherGuide() {
    return `<aside class="interview-teacher" ${teacherMode ? '' : 'hidden'}>
      <p class="eyebrow">GUÍA DOCENTE</p><h3>Objetivos y caso completo</h3>
      <p>Sesión sugerida de 10 a 15 minutos. Antes de mostrar las claves, pide al grupo que justifique sus decisiones con los datos que realmente exploró.</p>
      <ul>${INTERVIEW.teacher.objectives.map(o => `<li>${h(o)}</li>`).join('')}</ul>
      <details><summary>Consultar todas las preguntas y respuestas</summary>
        ${allQuestions.map(q => `<div class="interview-teacher-entry"><h4>${h(q.label)}</h4><p>${h(q.response)}</p><p><strong>Lectura docente:</strong> ${h(q.feedback)}</p></div>`).join('')}
      </details>
      <details><summary>Claves de las decisiones y diagnóstico diferencial</summary>
        ${INTERVIEW.decisions.map(d => `<h4>${h(d.title)}</h4><p>${h(d.options.find(o => o.correct).text)}</p>`).join('')}
        <h4>Alternativas</h4><p>${h(INTERVIEW.teacher.differential)}</p>
        <h4>Información pendiente</h4><p>${h(INTERVIEW.teacher.missing)}</p>
        <h4>Seguimiento ilustrativo</h4><p>${h(INTERVIEW.teacher.followup)}</p>
      </details>
      <p class="subtle">La rúbrica es formativa, sin validación como instrumento de evaluación de competencia. Las claves son accesibles al activar este modo.</p>
    </aside>`;
  }

  function intro() {
    return `<div class="interview-intro"><div><span class="tag">CASO FICTICIO · 10–15 MIN</span>
      <h3 id="interview-stage-title" tabindex="-1">${h(INTERVIEW.title)}</h3><p>${h(INTERVIEW.person)}</p><p>${h(INTERVIEW.intro)}</p>
      <p class="subtle">${h(INTERVIEW.observation)}</p></div>
      <div class="interview-instructions"><h4>Tu tarea</h4><ol>
      <li>Elige preguntas y escucha las respuestas.</li><li>Recoge datos antes de formular una hipótesis.</li>
      <li>Compara alternativas y explica qué falta.</li></ol>
      <p>En cada bloque puedes elegir el orden de las preguntas. Explora al menos dos para avanzar. Puedes volver y completar información.</p>
      <button type="button" class="primary" data-action="start">Comenzar entrevista</button></div></div>`;
  }

  function interviewStage() {
    const stage = currentStage();
    const count = askedInStage(stage);
    const latest = questionById.get(state.asked[state.asked.length - 1]);
    return `<div class="interview-layout"><div><p class="eyebrow">BLOQUE ${state.phase} DE 3</p>
      <h3 id="interview-stage-title" tabindex="-1">${h(stage.title)}</h3><p>${h(stage.goal)}</p>
      ${latest ? `<div class="interview-latest"><h4>Última respuesta de Alex</h4>
        <blockquote>${h(latest.response)}</blockquote><p><strong>Qué aporta:</strong> ${h(latest.feedback)}</p></div>` : ''}
      <div class="interview-questions">${stage.questions.map(questionButton).join('')}</div>
      <p class="subtle">${count} de ${stage.questions.length} preguntas exploradas en este bloque. Para avanzar, elige al menos dos.</p>
      <div class="interview-controls"><button type="button" class="quiet" data-action="back">Volver</button>
      <button type="button" class="primary" data-action="next" ${count < 2 ? 'disabled' : ''}>
        ${state.phase === 3 ? 'Construir mi interpretación' : 'Continuar al siguiente bloque'}</button></div></div>
      <aside class="interview-safety"><h4>Seguridad desde el inicio</h4>
      <p>No necesitas esperar al final para explorar cómo se encuentra Alex.</p>${questionButton('safety')}
      <p class="subtle">Si hubiera peligro inmediato o deterioro médico agudo, la prioridad sería atención urgente. Este recurso no calcula un nivel de riesgo.</p></aside></div>
      ${evidence()}${transcript()}`;
  }

  function decisionFeedback(d) {
    if (state.choices[d.id] === undefined) return '';
    const choice = d.options[state.choices[d.id]];
    const missing = missingFor(d);
    return `<div class="interview-feedback ${choice.correct ? 'is-supported' : 'needs-review'}" role="status">
      <strong>${choice.correct ? 'La opción es adecuada para discutir el caso.' : 'Conviene revisar esta opción.'}</strong>
      <p>${h(choice.feedback)}</p>
      ${missing.length ? `<p><strong>Tu entrevista todavía no exploró:</strong> ${missing.map(id => h(questionById.get(id).label)).join(' ')}</p>` : '<p>Exploraste las preguntas asociadas a esta decisión. Aun así, quedan datos clínicos por completar.</p>'}
      <p class="subtle">Puedes revisar la selección. La devolución final conserva tu primera respuesta.</p></div>`;
  }

  function decisions() {
    const ready = INTERVIEW.decisions.every(d => state.choices[d.id] !== undefined);
    return `<h3 id="interview-stage-title" tabindex="-1">Construye una interpretación provisional</h3>
      <p>Relaciona cada decisión con los datos del cuaderno. Las alternativas no sustituyen una evaluación clínica.</p>
      ${evidence()}
      ${INTERVIEW.decisions.map(d => `<fieldset class="interview-decision"><legend>${h(d.title)}</legend>
        ${d.options.map((o, i) => `<label class="interview-option"><input type="radio" name="interview-${d.id}"
          value="${i}" data-decision="${d.id}" ${state.choices[d.id] === i ? 'checked' : ''}><span>${h(o.text)}</span></label>`).join('')}
        ${decisionFeedback(d)}</fieldset>`).join('')}
      <label class="interview-note-label" for="interview-note">Tu razonamiento (opcional)</label>
      <textarea id="interview-note" rows="4" maxlength="2000" placeholder="¿Qué datos apoyan tu interpretación? ¿Qué falta conocer? No escribas información de pacientes reales.">${h(state.note)}</textarea>
      <p class="subtle">El texto permanece solo en esta pestaña y se pierde al recargar. No se corrige automáticamente.</p>
      <div class="interview-controls"><button type="button" class="quiet" data-action="back">Volver a preguntar</button>
        <button type="button" class="primary" data-action="finish" ${ready ? '' : 'disabled'}>Ver devolución de mi recorrido</button></div>`;
  }

  function report() {
    const firstCorrect = INTERVIEW.decisions.filter(d => d.options[state.first[d.id]].correct).length;
    return `<div class="interview-report"><p class="eyebrow">DEVOLUCIÓN FORMATIVA</p>
      <h3 id="interview-stage-title" tabindex="-1">Lo que exploraste y lo que falta</h3>
      <p>En la primera selección, ${firstCorrect} de 3 decisiones coincidieron con las claves de este caso. Es una referencia para la discusión, no una medida de competencia clínica.</p>
      <div class="interview-rubric">${INTERVIEW.rubric.map(r => {
        const count = r.ids.filter(id => state.asked.includes(id)).length;
        const status = count === r.ids.length ? 'Explorado' : count ? 'Parcial' : 'Por explorar';
        return `<article><span class="tag">${status}</span><h4>${h(r.title)}</h4><p>${h(r.why)}</p>
          <p>${count} de ${r.ids.length} preguntas asociadas.</p>
          ${count < r.ids.length ? `<ul>${r.ids.filter(id => !state.asked.includes(id)).map(id => `<li>${h(questionById.get(id).label)}</li>`).join('')}</ul>` : ''}</article>`;
      }).join('')}</div>
      <h4>Tus decisiones</h4>${INTERVIEW.decisions.map(d => `<div class="interview-report-decision"><h4>${h(d.title)}</h4>
        <p><strong>Primera selección:</strong> ${h(d.options[state.first[d.id]].text)}</p>
        ${state.first[d.id] !== state.choices[d.id] ? `<p><strong>Selección revisada:</strong> ${h(d.options[state.choices[d.id]].text)}</p>` : ''}
        ${decisionFeedback(d)}</div>`).join('')}
      ${state.note ? `<h4>Tu razonamiento escrito</h4><p class="interview-written">${h(state.note)}</p>` : '<p class="subtle">No añadiste un razonamiento escrito. Puedes volver y explicar tus decisiones.</p>'}
      <details class="interview-full-case"><summary>Revisar el caso completo y el cierre docente</summary>
        <p>${h(INTERVIEW.intro)}</p><p>${h(INTERVIEW.observation)}</p>
        ${allQuestions.map(q => `<h4>${h(q.label)}</h4><p>${h(q.response)}</p>`).join('')}
        <h4>Formulación orientadora</h4><p>${h(INTERVIEW.decisions[1].options.find(o => o.correct).text)}</p>
        <h4>Diagnóstico diferencial</h4><p>${h(INTERVIEW.teacher.differential)}</p>
        <h4>Información pendiente</h4><p>${h(INTERVIEW.teacher.missing)}</p>
        <h4>Seguimiento ficticio</h4><p>${h(INTERVIEW.teacher.followup)}</p></details>
      <p class="subtle">El cierre del caso no se cuenta como preguntas realizadas. La rúbrica refleja únicamente lo que elegiste explorar.</p>
      <div class="interview-controls"><button type="button" class="quiet" data-action="review">Revisar mis decisiones</button>
        <button type="button" class="primary" data-action="revisit">Completar la entrevista</button></div></div>`;
  }

  function render(focusTarget) {
    const phaseLabels = ['Inicio', ...INTERVIEW.stages.map(s => s.title), 'Interpretar', 'Devolución'];
    root.innerHTML = `<div class="interview-topline"><p class="interview-mode">${modeLabel()}</p>
      <div class="interview-top-actions"><button type="button" class="quiet" data-action="toggle-mode" aria-pressed="${teacherMode}">${teacherMode ? 'Volver a estudiante' : 'Activar modo docente'}</button>
      <button type="button" class="quiet" data-action="reset">Reiniciar entrevista</button></div></div>
      ${state.confirmReset ? '<div class="interview-reset" role="group" aria-label="Confirmar reinicio"><p>Se borrarán las preguntas, decisiones y notas de esta entrevista.</p><button type="button" class="quiet" data-action="cancel-reset">Conservar mi avance</button> <button type="button" class="quiet" data-action="confirm-reset">Borrar y comenzar de nuevo</button></div>' : ''}
      <ol class="interview-progress" aria-label="Etapas de la simulación">${phaseLabels.map((label,i) => `<li ${i === state.phase ? 'aria-current="step"' : ''}>${i+1}. ${h(label)}</li>`).join('')}</ol>
      ${state.phase === 0 ? intro() : state.phase <= 3 ? interviewStage() : state.phase === 4 ? decisions() : report()}
      <div class="interview-announcement" role="status" aria-live="polite" aria-atomic="true"></div>
      ${teacherGuide()}`;
    if (focusTarget) root.querySelector(focusTarget)?.focus();
  }

  // Delegación de eventos: cambiar de vista no acumula manejadores.
  root.addEventListener('click', event => {
    const ask = event.target.closest('[data-ask]');
    if (ask && !ask.disabled && state.phase >= 1 && state.phase <= 3) {
      const id = ask.dataset.ask;
      if (state.asked.includes(id)) return;
      state.asked.push(id);
      render();
      const stage = currentStage();
      const nextQuestion = stage.questions.find(q => !state.asked.includes(q));
      const focus = id === 'safety' ? root.querySelector('[data-action="next"]') :
        nextQuestion ? root.querySelector(`[data-ask="${nextQuestion}"]`) : root.querySelector('[data-action="next"]');
      (focus?.disabled ? root.querySelector('.interview-question:not(:disabled)') : focus)?.focus({preventScroll: true});
      const q = questionById.get(id);
      root.querySelector('.interview-announcement').textContent = `Respuesta: ${q.response} Puedes consultar el registro y el cuaderno de hallazgos.`;
      return;
    }
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (!action) return;
    if (action === 'toggle-mode') {
      document.querySelector('#teacher').click();
      root.querySelector('[data-action="toggle-mode"]').focus({preventScroll: true});
      return;
    }
    if (action === 'start') state.phase = 1;
    if (action === 'back') state.phase = Math.max(0, state.phase - 1);
    if (action === 'next' && currentStage() && askedInStage(currentStage()) >= 2) state.phase++;
    if (action === 'finish' && INTERVIEW.decisions.every(d => state.choices[d.id] !== undefined)) state.phase = 5;
    if (action === 'review') state.phase = 4;
    if (action === 'revisit') state.phase = 1;
    if (action === 'reset') state.confirmReset = true;
    if (action === 'cancel-reset') state.confirmReset = false;
    if (action === 'confirm-reset') state = freshState();
    render(state.confirmReset ? '[data-action="cancel-reset"]' : '#interview-stage-title');
  });

  root.addEventListener('change', event => {
    const id = event.target.dataset.decision;
    if (!id || state.phase !== 4) return;
    const index = Number(event.target.value);
    state.choices[id] = index;
    if (state.first[id] === undefined) state.first[id] = index;
    render(`[data-decision="${id}"][value="${index}"]`);
  });
  root.addEventListener('input', event => {
    if (event.target.id === 'interview-note') state.note = event.target.value;
  });
  document.querySelector('#teacher').addEventListener('change', event => {
    teacherMode = event.target.checked;
    render();
  });
  render();
})();
