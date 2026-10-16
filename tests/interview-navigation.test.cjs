const test=require('node:test'), assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
function setup(){
 const handlers={}, teacher={checked:false,addEventListener(k,f){this[k]=f},click(){this.checked=!this.checked;this.change({target:this})}};
 const node={focus(){},disabled:false,textContent:''};
 const root={innerHTML:'',addEventListener(k,f){handlers[k]=f},querySelector(){return node}};
 const ctx=vm.createContext({document:{querySelector:s=>s==='#teacher'?teacher:root}});
 vm.runInContext(fs.readFileSync('js/interview-content.js','utf8'),ctx);vm.runInContext(fs.readFileSync('js/interview.js','utf8'),ctx);
 return {root,ctx,teacher,select(id){handlers.change({target:{id:'interview-select',value:id}})},action(a){handlers.click({target:{closest:s=>s==='[data-action]'?{dataset:{action:a}}:null}})},ask(id){handlers.click({target:{closest:s=>s==='[data-ask]'?{dataset:{ask:id}}:null}})},choose(id,i){handlers.change({target:{dataset:{decision:id},value:String(i)}})},note(v){handlers.input({target:{id:'interview-note',value:v}})}};
}
test('Cuatro recorridos completos, feedback alternativo, revisión y cierre',()=>{

 const ui=setup(),bank=vm.runInContext('INTERVIEWS',ui.ctx);assert.equal(bank.length,4);
 for(const c of bank){
 ui.select(c.id);assert.match(ui.root.innerHTML,/Tu tarea/);ui.action('start');ui.action('next');assert.match(ui.root.innerHTML,/BLOQUE 1 DE 3/);
 ui.ask('safety');for(const stage of c.stages){for(const id of stage.questions)ui.ask(id);ui.action('next')}
 assert.match(ui.root.innerHTML,/Construye una interpretación/);
 for(const d of c.decisions){const bad=d.options.findIndex(o=>!o.correct);ui.choose(d.id,bad);assert.match(ui.root.innerHTML,/Conviene revisar esta opción/);ui.choose(d.id,d.options.findIndex(o=>o.correct));assert.match(ui.root.innerHTML,/La opción es adecuada/)}
 ui.note('<script>prueba</script>');ui.action('finish');assert.match(ui.root.innerHTML,/DEVOLUCIÓN FORMATIVA/);assert.match(ui.root.innerHTML,/0 de 3 decisiones/);assert.match(ui.root.innerHTML,/&lt;script&gt;/);ui.action('review');ui.action('back');assert.match(ui.root.innerHTML,/BLOQUE 3 DE 3/);
 }
});
test('Cambio de caso, notas y reinicio no afectan al otro caso; modo docente compartido',()=>{
 const ui=setup();ui.action('start');ui.ask('concern');ui.select('visual');ui.action('start');ui.ask('qa');ui.select('alex');assert.match(ui.root.innerHTML,/1 de 4 preguntas/);ui.action('reset');ui.action('cancel-reset');assert.match(ui.root.innerHTML,/1 de 4 preguntas/);ui.action('reset');ui.action('confirm-reset');assert.match(ui.root.innerHTML,/Tu tarea/);ui.select('visual');assert.match(ui.root.innerHTML,/1 de 2 preguntas/);ui.teacher.click();assert.match(ui.root.innerHTML,/Modo docente/);
});
test('Integridad de los tres bancos nuevos y preservación exacta del caso original',()=>{
 const ui=setup(),bank=vm.runInContext('INTERVIEWS',ui.ctx);
 const prefix=fs.readFileSync('js/interview-content.js').subarray(0,14274);assert.equal(require('node:crypto').createHash('sha256').update(prefix).digest('hex'),'fdb1beefa0136ab7ccb14fa7ff8802486717fd3213957669570d4def8451b61b');
 for(const c of bank){const qs=[c.safety,...c.questions],ids=new Set(qs.map(q=>q.id));assert.equal(ids.size,qs.length);assert.equal(c.stages.length,3);assert.equal(c.decisions.length,3);for(const q of qs)for(const k of ['label','response','feedback','finding'])assert.ok(q[k].length>10);const assigned=c.stages.flatMap(s=>Array.from(s.questions));assert.equal(new Set(assigned).size,c.questions.length);for(const id of assigned)assert.ok(ids.has(id));for(const d of c.decisions){assert.equal(d.options.filter(o=>o.correct).length,1);d.needs.forEach(id=>assert.ok(ids.has(id)))}assert.equal(new Set(c.rubric.flatMap(r=>Array.from(r.ids))).size,ids.size)}
});
test('Rama urgente permite priorizar atención y señala evidencia no explorada',()=>{const ui=setup();ui.select('acute');ui.action('start');ui.action('urgent');assert.match(ui.root.innerHTML,/Construye una interpretación/);ui.choose('plan',0);assert.match(ui.root.innerHTML,/Tu entrevista todavía no exploró/);});
