/* Funciones de presentación: los datos docentes viven en content.js. */
'use strict';
const $ = (s) => document.querySelector(s);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let teacher = false;
let currentCase = 0;
const answers = new Map();
const normalize = s => s.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
function renderDelusions() {
 const query = normalize($('#search').value);
 const list = CONTENT.delusions.filter(item => normalize(item.join(' ')).includes(query));
 $('#count').textContent = `${list.length} de ${CONTENT.delusions.length} temas`;
 $('#empty').hidden = list.length > 0;
 $('#delusion-cards').innerHTML = list.map(([name,description,example,note]) => `<article class="card"><span class="tag">CONTENIDO</span><h3>${escapeHTML(name)}</h3><p>${escapeHTML(description)}</p><details><summary>Ejemplo y matiz clínico</summary><p>${escapeHTML(example)}</p><p>${escapeHTML(note)}</p></details></article>`).join('');
}
function renderSense(index) {
 const [name, description] = CONTENT.senses[index];
 $('#sensory-detail').innerHTML = `<h3>${escapeHTML(name)}</h3><p>${escapeHTML(description)}</p><small>Descripción fenomenológica (no identifica una causa). <a href="#ref-visual">[3]</a></small>`;
 document.querySelectorAll('#sensory-buttons button').forEach((b,i) => b.setAttribute('aria-pressed',String(i === index)));
}
function caseHTML(c, index, print = false) {
 return `<article class="case-panel"><span class="tag">CASO ${index+1} · FICTICIO</span><h3>${escapeHTML(c.title)}</h3><p class="case-meta">${escapeHTML(c.age)} · Material de discusión</p><h4>Motivo de consulta</h4><p>${escapeHTML(c.reason)}</p><div class="grid two"><div><h4>Antecedentes y contexto</h4><p>${escapeHTML(c.history)}</p></div><div><h4>Historia y evolución</h4><p>${escapeHTML(c.course)}</p></div></div><h4>Exploración del estado mental</h4><dl>${Object.entries(c.exam).map(([k,v])=>`<dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd>`).join('')}</dl><h4>Seguridad y repercusión</h4><p>${escapeHTML(c.risk)}</p><h4>Preguntas para el grupo</h4><ol>${c.questions.map(q=>`<li>${escapeHTML(q)}</li>`).join('')}</ol><details class="case-discussion" ${teacher || print ? 'open' : ''}><summary>Ver razonamiento y discusión clínica</summary><h4>Formulación provisional</h4><p>${escapeHTML(c.discussion)}</p><h4>Diagnóstico diferencial</h4><p>${escapeHTML(c.differential)}</p><h4>Evaluación propuesta</h4><p>${escapeHTML(c.assessment)}</p><h4>Abordaje inicial</h4><p>${escapeHTML(c.plan)}</p><h4>Seguimiento ilustrativo</h4><p>${escapeHTML(c.follow)}</p><p class="subtle">Todas las historias, exploraciones y evoluciones son ficticias. El plan es orientador y requiere juicio clínico. Fuentes: ${c.refs.map(n=>`<a href="#ref-${({1:'who',3:'visual',4:'bonnet',5:'nice',8:'assessment',9:'bipolar',10:'depression',11:'substance',12:'sleep'})[n]}">[${n}]</a>`).join(' ')}.</p></details></article>`;
}
function renderCases() {
 $('#case-area').innerHTML = `<div class="pills case-tabs" role="group" aria-label="Elegir caso clínico">${CONTENT.cases.map((c,i)=>`<button type="button" data-case="${i}" aria-pressed="${i===currentCase}" aria-controls="selected-case">${i+1}. ${escapeHTML(c.title)}</button>`).join('')}</div><div id="selected-case">${caseHTML(CONTENT.cases[currentCase],currentCase)}</div>`;
 $('#case-area').querySelectorAll('[data-case]').forEach(b => b.addEventListener('click',() => {
 currentCase = Number(b.dataset.case);
 $('#selected-case').innerHTML = caseHTML(CONTENT.cases[currentCase],currentCase);
 $('#case-area').querySelectorAll('[data-case]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.case)===currentCase)));
 }));
}
function renderQuiz() {
 $('#quiz').innerHTML = CONTENT.quiz.map((q,i)=>`<article class="quiz-question"><h4>${i+1}. ${escapeHTML(q.q)}</h4><div class="options" role="group" aria-label="Pregunta ${i+1}">${q.options.map((o,j)=>`<button type="button" data-q="${i}" data-option="${j}">${escapeHTML(o)}</button>`).join('')}</div><p class="feedback" id="feedback-${i}" hidden role="status"></p><p class="teacher-note" ${teacher?'':'hidden'}><strong>Clave docente:</strong> ${escapeHTML(q.options[q.answer])}. ${escapeHTML(q.why)}</p></article>`).join('');
 $('#quiz').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>answerQuestion(Number(b.dataset.q),Number(b.dataset.option))));
 answers.forEach((option,index)=>paintAnswer(index,option));
 updateScore();
}
function answerQuestion(index,option) {
 if(answers.has(index)) return;
 answers.set(index,option); paintAnswer(index,option); updateScore();
}
function paintAnswer(index,option) {
 const q=CONTENT.quiz[index];
 document.querySelectorAll(`[data-q="${index}"]`).forEach(b=>{
 const j=Number(b.dataset.option); b.disabled=true;
 if(j===q.answer) b.classList.add('correct');
 if(j===option && j!==q.answer) b.classList.add('wrong');
 });
 const feedback=$(`#feedback-${index}`); feedback.hidden=false;
 feedback.textContent=`${option===q.answer?'Correcto.':'Revisa la distinción.'} ${q.why}`;
}
function updateScore() {
 const correct=[...answers.entries()].filter(([i,option])=>CONTENT.quiz[i].answer===option).length;
 $('#score').textContent=answers.size?`${correct} ${correct===1?"respuesta correcta":"respuestas correctas"} de ${answers.size} contestadas (${CONTENT.quiz.length} en total). La puntuación evalúa el contenido de esta guía.`:'Responde las preguntas para ver tu avance.';
}
function updateModel() {
 const weight=Number($('#weight').value); const result=20+weight*.6;
 $('#weight-value').textContent=`${weight} %`;
 $('#mix-value').textContent=Number(result.toFixed(1)).toLocaleString('es');
 $('#mix-bar').style.width=`${result}%`;
 $('#mix-caption').textContent=weight===50?'Ambas señales tienen el mismo peso.':weight>50?'La expectativa tiene mayor peso en esta mezcla.':'La información sensorial tiene mayor peso en esta mezcla.';
}
$('#teacher').addEventListener('change',e=>{
 teacher=e.target.checked;
 document.querySelectorAll('.teacher-note').forEach(n=>n.hidden=!teacher);
 document.querySelectorAll('.case-discussion').forEach(d=>d.open=teacher);
 renderQuiz();
});
$('#search').addEventListener('input',renderDelusions);
$('#weight').addEventListener('input',updateModel);
$('#reset-quiz').addEventListener('click',()=>{answers.clear();renderQuiz();});
$('#sensory-buttons').innerHTML=CONTENT.senses.map(([name],i)=>`<button type="button" data-sense="${i}" aria-pressed="${i===0}" aria-controls="sensory-detail">${escapeHTML(name)}</button>`).join('');
$('#sensory-buttons').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>renderSense(Number(b.dataset.sense))));
// La impresión incluye todos los casos. El modo docente añade sus discusiones.
let caseBeforePrint='';
window.addEventListener('beforeprint',()=>{
 caseBeforePrint=$('#case-area').innerHTML;
 $('#case-area').innerHTML=CONTENT.cases.map((c,i)=>caseHTML(c,i,teacher)).join('<br>');
 if(!teacher) document.querySelectorAll('.case-discussion').forEach(d=>d.hidden=true);
});
window.addEventListener('afterprint',()=>{if(caseBeforePrint) renderCases();});
$('#print').addEventListener('click',()=>window.print());
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.section-nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`));}});
},{rootMargin:'-15% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
renderDelusions(); renderSense(0); renderCases(); renderQuiz(); updateModel();
