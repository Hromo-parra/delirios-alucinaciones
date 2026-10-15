/* Caso ficticio independiente del motor. No contiene datos de pacientes reales. */
'use strict';
const INTERVIEW = {
  title: 'Una voz y una explicación',
  person: 'Alex, 26 años',
  intro: 'Alex acude a consulta acompañada de su hermana. Dice: «Desde hace unos días escucho una voz. Creo que alguien me está vigilando y ya casi no puedo dormir». Es el primer encuentro y todavía no se ha realizado una evaluación médica.',
  observation: 'En la observación inicial, Alex está despierta y orientada, mantiene un discurso comprensible y mira hacia la puerta con frecuencia. Se muestra preocupada, pero acepta conversar. Estos datos no sustituyen una exploración completa.',
  stages: [
    {title: 'Abrir la conversación', goal: 'Explora lo que preocupa a Alex y cómo ha cambiado su vida.', questions: ['concern', 'timeline', 'impact', 'support']},
    {title: 'Describir la experiencia', goal: 'Distingue la experiencia perceptiva de la explicación sobre su origen.', questions: ['voice', 'belief', 'flexibility', 'organization']},
    {title: 'Ampliar el contexto', goal: 'Busca información que permita comparar explicaciones y reconocer límites.', questions: ['sleep', 'mood', 'substances', 'medical']}
  ],
  // La seguridad está accesible en los tres bloques, sin esperar una etapa final.
  safety: {
    id: 'safety', label: '¿Te sientes en peligro? ¿Has pensado en hacerte daño o dañar a alguien? ¿La voz te pide hacer algo?',
    response: '«La voz me dice que tenga cuidado, pero no me ordena hacerme daño ni dañar a nadie. No quiero lastimarme ni lastimar a otra persona. Tengo miedo de salir. Mi hermana se queda conmigo y hoy sí he podido comer».',
    finding: 'En esta entrevista niega intención o planes de daño y órdenes de ese tipo. Hay temor y evitación, con apoyo disponible. La evaluación de seguridad sigue siendo contextual y debe revisarse si hay cambios.',
    feedback: 'La pregunta explora seguridad de forma directa y respetuosa. Una negación aislada no demuestra ausencia de riesgo. Las voces no implican por sí mismas peligrosidad.'
  },
  questions: [
    {id: 'concern', label: '¿Qué es lo que más te preocupa y qué te gustaría que pudiéramos hacer hoy?',
      response: '«Lo peor es sentir que no puedo estar tranquila en mi casa. Quiero dormir y saber por qué me está pasando esto. Me da miedo que se rían de mí si lo cuento».',
      finding: 'Malestar, temor al estigma y objetivos propios: descansar y comprender la experiencia.',
      feedback: 'Una apertura centrada en la persona permite conocer su demanda antes de imponer una interpretación.'},
    {id: 'timeline', label: '¿Cuándo comenzó y qué ocurrió primero?',
      response: '«Hace unas seis semanas empecé a faltar a mis actividades. La voz apareció hace diez días. Después pensé que los anuncios de la radio me avisaban de que alguien me seguía. Nunca me había pasado así».',
      finding: 'Cambio funcional de seis semanas; voz de diez días y posterior interpretación de mensajes personales. Es el primer episodio conocido, aún por corroborar.',
      feedback: 'La secuencia aporta información, pero no prueba que una experiencia haya causado la otra. La duración disponible no permite cerrar un diagnóstico específico.'},
    {id: 'impact', label: '¿Cómo han cambiado tus actividades, tu alimentación y tu cuidado personal?',
      response: '«He dejado de ir a dos clases y ya no salgo sola. Me baño y preparo comida, aunque a veces necesito que mi hermana me acompañe. No he podido terminar mis tareas».',
      finding: 'Interferencia académica y evitación. Conserva parte del autocuidado y utiliza apoyo familiar.',
      feedback: 'La repercusión ayuda a comprender la necesidad de apoyo. Conviene describir también las capacidades conservadas.'},
    {id: 'support', label: '¿Con quién te sientes segura? ¿Te parece bien que tu hermana aporte información?',
      response: '«Con mi hermana. Puedes hablar con ella si yo estoy presente. Dice que estoy más apartada y que me ve preocupada desde hace semanas».',
      finding: 'Alex autoriza información complementaria en su presencia. La hermana describe un cambio respecto al funcionamiento habitual.',
      feedback: 'Se incorpora otra perspectiva respetando la preferencia expresada por Alex. El relato familiar complementa su experiencia, sin reemplazarla.'},
    {id: 'voice', label: '¿Cómo es la voz, cuándo aparece y hay alguna fuente sonora que pueda explicarla?',
      response: '«Es una voz que comenta lo que hago, como si estuviera junto a la ventana. La escucho también a mediodía, estando completamente despierta. Apago la radio y sigue. Mi hermana dice que ella no la oye».',
      finding: 'Experiencia auditiva verbal durante vigilia plena, sin fuente correspondiente identificada en el relato. Es compatible con una alucinación auditiva, pendiente de evaluación.',
      feedback: 'Se describe la vivencia y su contexto. La localización cerca de la ventana no basta para clasificarla; importa el conjunto de características.'},
    {id: 'belief', label: '¿Qué significado tiene para ti? ¿Cómo relacionas la voz con la vigilancia?',
      response: '«Creo que la voz y algunos anuncios son de un grupo que me sigue. Cuando dicen “atención”, sé que hablan de mí. No he visto a ese grupo, pero para mí los mensajes son claros».',
      finding: 'Interpretación personal de mensajes generales y creencia persecutoria. La voz y la explicación sobre su origen son fenómenos distintos.',
      feedback: 'Preguntar por el significado permite separar percepción y creencia. Escuchar el relato no obliga a aceptar la explicación como un hecho.'},
    {id: 'flexibility', label: '¿Podría haber otra explicación? ¿Tu familia o comunidad comparten esta interpretación?',
      response: '«Mi hermana cree que puede ser por algo que me pasa, pero yo estoy casi segura de la vigilancia. Nadie más en mi familia interpreta esos anuncios así. Aceptaría que me revisaran porque quiero estar mejor».',
      finding: 'Convicción elevada, escasa flexibilidad y disposición a recibir ayuda. La interpretación no es compartida en su entorno según lo que relata.',
      feedback: 'El contexto cultural y la flexibilidad matizan la descripción. Una creencia minoritaria por sí sola no demuestra carácter delirante.'},
    {id: 'organization', label: '¿Has notado dificultades para ordenar tus ideas, orientarte o mantener la atención?',
      response: '«Sé dónde estoy y qué día es. A veces pierdo el hilo porque estoy pendiente de la voz». Durante la conversación organiza el relato y comprende las preguntas; no se observan fluctuaciones claras del nivel de conciencia.',
      finding: 'Discurso organizado y orientación conservada en este encuentro. Distracción asociada a la experiencia. No se ha aplicado una evaluación cognitiva formal.',
      feedback: 'La observación del encuentro y el autorreporte se documentan por separado. No observar confusión no descarta toda causa médica.'},
    {id: 'sleep', label: '¿Cómo estás durmiendo? ¿La voz aparece solo al dormirte o despertar?',
      response: '«Duermo unas cuatro horas porque tengo miedo. Estoy cansada y quisiera dormir más. La voz aparece a distintas horas, no solo al dormirme o al despertar».',
      finding: 'Sueño reducido con cansancio. La voz no se limita a transiciones del sueño.',
      feedback: 'La entrevista distingue dormir poco por malestar de sentir poca necesidad de dormir. El dato aislado no define un episodio afectivo.'},
    {id: 'mood', label: '¿Has tenido tristeza persistente o periodos de energía inusual, impulsividad o ánimo muy elevado?',
      response: '«Estoy angustiada por la voz. No he tenido semanas de alegría excesiva ni energía fuera de lo habitual. Tampoco un periodo de tristeza continua antes de todo esto». Falta reconstruir su historia afectiva con más detalle.',
      finding: 'No refiere un episodio afectivo sostenido que explique temporalmente el cuadro en esta entrevista. La historia sigue incompleta.',
      feedback: 'Una respuesta negativa reduce información a favor de una hipótesis, pero no la excluye definitivamente.'},
    {id: 'substances', label: '¿Has usado alcohol, cannabis, estimulantes, medicamentos o suplementos? ¿Cuándo fue la última vez?',
      response: '«Tomé cannabis algunas veces hace meses, pero no desde entonces. No uso estimulantes ni medicamentos nuevos. Últimamente tomo bastante café para ir a clase». No hay verificación independiente de este relato.',
      finding: 'No se establece una asociación temporal de las experiencias con una sustancia a partir de lo referido. La historia de consumo requiere ampliación.',
      feedback: 'Se pregunta sin juicio y se registra la cronología. El autorreporte no descarta por sí solo una contribución de sustancias o medicamentos.'},
    {id: 'medical', label: '¿Has tenido enfermedades, fiebre, convulsiones, cambios de visión o audición? ¿Qué antecedentes conoces?',
      response: '«No recuerdo fiebre, golpes o convulsiones. No he notado cambios de visión o audición. No tengo enfermedades conocidas». Aún no hay exploración física, constantes ni revisión de expedientes. No conoce bien los antecedentes familiares.',
      finding: 'No comunica señales médicas concretas en el relato. La evaluación física y neurológica está pendiente y los antecedentes son incompletos.',
      feedback: 'La entrevista no sustituye la exploración médica. Los estudios adicionales se deciden según los hallazgos y el contexto clínico.'}
  ],
  decisions: [
    {id: 'phenomena', title: '¿Cómo describirías lo relatado?', needs: ['voice', 'belief'],
      options: [
        {text: 'Una experiencia auditiva verbal y una interpretación de referencia/persecución que deben describirse por separado.', correct: true, feedback: 'Esta descripción diferencia la vivencia de la explicación. Es una formulación fenomenológica provisional.'},
        {text: 'Solo una creencia de vigilancia; la voz no requiere descripción propia.', correct: false, feedback: 'La creencia no recoge toda la experiencia. También hay que caracterizar lo auditivo y su contexto.'},
        {text: 'Una confusión visual con un objeto presente.', correct: false, feedback: 'Esa descripción correspondería a otra experiencia. En el relato de Alex no aparece un objeto visual confundido con otro.'}
      ]},
    {id: 'formulation', title: '¿Qué conclusión permite la información?', needs: ['timeline', 'mood', 'substances', 'medical'],
      options: [
        {text: 'La entrevista confirma esquizofrenia y permite dar por terminada la evaluación.', correct: false, feedback: 'La entrevista es insuficiente para ese cierre. Faltan evaluación médica, historia ampliada y seguimiento.'},
        {text: 'El consumo de cannabis meses antes demuestra la causa actual.', correct: false, feedback: 'La historia disponible no demuestra esa relación causal. Hay que evaluar cronología y explicaciones alternativas.'},
        {text: 'Hay una presentación compatible con un primer episodio psicótico conocido, con causas y diagnóstico específico por evaluar.', correct: true, feedback: 'La formulación conserva incertidumbre y abre el diferencial a cuadros afectivos, sustancias y causas médicas.'}
      ]},
    {id: 'plan', title: '¿Qué siguiente paso está mejor fundamentado?', needs: ['safety', 'impact', 'support'],
      options: [
        {text: 'Acordar una evaluación clínica pronta, revisar seguridad y autocuidado, e incorporar los apoyos autorizados por Alex.', correct: true, feedback: 'El siguiente paso combina evaluación y apoyo. La urgencia y el tratamiento se ajustan a los hallazgos; un peligro inmediato o un deterioro agudo exige atención urgente.'},
        {text: 'Confirmarle que el grupo la vigila para que se sienta comprendida.', correct: false, feedback: 'Reconocer el miedo no requiere afirmar como hecho la vigilancia. Se puede validar el malestar y explorar lo ocurrido con respeto.'},
        {text: 'Esperar varios meses sin evaluación porque todavía conserva parte de su autocuidado.', correct: false, feedback: 'Las capacidades conservadas son relevantes, pero no eliminan el malestar ni la interferencia. Este caso requiere evaluación pronta.'}
      ]}
  ],
  rubric: [
    {title: 'Perspectiva y colaboración', ids: ['concern', 'support'], why: 'Demanda personal y apoyos autorizados.'},
    {title: 'Cronología y repercusión', ids: ['timeline', 'impact'], why: 'Inicio, secuencia y cambios en la vida cotidiana.'},
    {title: 'Descripción de los fenómenos', ids: ['voice', 'belief', 'flexibility', 'organization'], why: 'Percepción, significado, convicción y estado mental.'},
    {title: 'Contexto y alternativas', ids: ['sleep', 'mood', 'substances', 'medical'], why: 'Sueño, historia afectiva, sustancias y evaluación médica pendiente.'},
    {title: 'Seguridad', ids: ['safety'], why: 'Contenido de las voces, intención de daño, autocuidado y apoyos.'}
  ],
  teacher: {
    objectives: ['Distinguir experiencia perceptiva e interpretación.', 'Explorar contexto y seguridad con preguntas respetuosas.', 'Formular hipótesis provisionales e identificar datos que faltan.'],
    differential: 'Comparar trastornos psicóticos primarios, episodios afectivos con síntomas psicóticos y efectos de sustancias o medicamentos. Considerar causas médicas según la historia y la exploración. La organización actual del discurso no excluye una causa médica.',
    missing: 'Faltan evaluación física y neurológica, constantes, historia médica y afectiva ampliada, antecedentes familiares y seguimiento. Las pruebas se orientan por hallazgos. La información de la hermana requiere el consentimiento ya expresado por Alex.',
    followup: 'Desenlace ficticio: Alex acepta una valoración clínica y pide que su hermana la acompañe. Se acuerda revisar sueño, alimentación y seguridad. La formulación sigue provisional hasta completar la evaluación y observar el curso. No se atribuye un diagnóstico definitivo ni se inventa una respuesta terapéutica.'
  }
};
