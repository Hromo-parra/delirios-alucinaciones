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

const INTERVIEWS = [Object.assign({id: "alex"}, INTERVIEW),
{
  "id": "visual",
  "title": "Figuras en una habitación tranquila",
  "person": "M. R., 74 años · pérdida visual y temor a contarlo",
  "intro": "M. R. consulta porque ve pequeñas figuras en casa. Teme que contar lo que ve signifique perder su autonomía.",
  "observation": "Escena educativa simplificada. Las respuestas se prepararon para practicar la entrevista; no representan una evaluación completa ni datos de pacientes reales.",
  "stages": [
    {
      "title": "Escuchar y situar",
      "goal": "Conoce la demanda y la evolución antes de clasificar.",
      "questions": [
        "qa",
        "qb"
      ]
    },
    {
      "title": "Precisar y contrastar",
      "goal": "Describe la experiencia y busca información que cambie tu hipótesis.",
      "questions": [
        "qc",
        "qd"
      ]
    },
    {
      "title": "Acordar los siguientes pasos",
      "goal": "Explora contexto y apoyos sin cerrar el diagnóstico.",
      "questions": [
        "qe",
        "qf"
      ]
    }
  ],
  "safety": {
    "id": "safety",
    "label": "¿Qué necesitas para estar a salvo ahora? ¿Hay ideas de daño o dificultades para cuidarte?",
    "response": "«No quiero hacerme daño. Me da miedo tropezar al evitar las figuras; puedo pedir ayuda a mi hija».",
    "finding": "Niega ideas de daño; describe riesgo de caídas y apoyo disponible.",
    "feedback": "Explorar seguridad y necesidades concretas orienta el apoyo. Una respuesta aislada no establece un nivel de riesgo ni sustituye la evaluación clínica."
  },
  "questions": [
    {
      "id": "qa",
      "label": "¿Qué te preocupa de estas figuras?",
      "response": "«Me asustan, pero sobre todo temo que no me crean. Quiero seguir viviendo en casa».",
      "finding": "Temor y deseo de conservar autonomía.",
      "feedback": "Preguntar por la demanda permite acordar objetivos sin reducir a la persona a un síntoma."
    },
    {
      "id": "qb",
      "label": "¿Cuándo comenzaron y cómo está tu visión?",
      "response": "«Desde hace tres semanas. Llevo años perdiendo visión por una enfermedad de la retina».",
      "finding": "Experiencias recientes en contexto de pérdida visual previa.",
      "feedback": "La cronología orienta una hipótesis; la asociación no demuestra la causa."
    },
    {
      "id": "qc",
      "label": "¿Qué ves? ¿Hay objetos, sonidos u otras sensaciones correspondientes?",
      "response": "«Veo personas pequeñas sobre la pared vacía. No hablan ni las siento tocarme. Mi hija no las ve».",
      "finding": "Experiencias visuales sin estímulo correspondiente identificado; no refiere otras modalidades.",
      "feedback": "Precisar modalidad y estímulo ayuda a distinguir una alucinación de una ilusión."
    },
    {
      "id": "qd",
      "label": "¿Qué piensas que son? ¿Puedes considerar otras explicaciones?",
      "response": "«Al principio me parecían reales. Ahora sé que esas personas no están ahí, aunque las siga viendo».",
      "finding": "Reconocimiento de la discrepancia entre la experiencia visual y la realidad compartida.",
      "feedback": "El insight puede coexistir con alucinaciones; no implica que sean voluntarias."
    },
    {
      "id": "qe",
      "label": "¿Hay confusión reciente, fiebre o cambios de medicación?",
      "response": "«No he notado confusión ni fiebre. Traje mis medicamentos para revisarlos». No hay aún exploración física.",
      "finding": "No refiere cambios agudos generales; revisión médica pendiente.",
      "feedback": "No dar por descartadas otras causas solo por una respuesta negativa."
    },
    {
      "id": "qf",
      "label": "¿Cómo afecta tu vida y qué apoyo aceptarías?",
      "response": "«Evito el salón. Quisiera que mi hija viniera a la consulta de ojos, si puedo decidir yo».",
      "finding": "Evitación con disposición a recibir apoyo autorizado.",
      "feedback": "La colaboración respeta autonomía y atiende el impacto funcional."
    }
  ],
  "decisions": [
    {
      "id": "phenomena",
      "title": "¿Qué descripción recoge mejor el relato?",
      "needs": [
        "qc",
        "qd"
      ],
      "options": [
        {
          "text": "Experiencias visuales sin estímulo correspondiente identificado; no refiere otras modalidades.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        },
        {
          "text": "El relato basta para asignar un trastorno definitivo.",
          "correct": false,
          "feedback": "Revisa esta conclusión: La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        }
      ]
    },
    {
      "id": "formulation",
      "title": "¿Qué hipótesis permite explorar?",
      "needs": [
        "qa",
        "qb",
        "qe"
      ],
      "options": [
        {
          "text": "La pérdida visual y el reconocimiento de las figuras permiten considerar Charles Bonnet, pendiente de evaluación.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        },
        {
          "text": "No hace falta ampliar la evaluación.",
          "correct": false,
          "feedback": "Revisa esta conclusión: La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        }
      ]
    },
    {
      "id": "plan",
      "title": "¿Cómo responderías ahora?",
      "needs": [
        "safety",
        "qf"
      ],
      "options": [
        {
          "text": "Validar el malestar, acordar valoración médica y oftalmológica pronta y revisar apoyos para desplazarse con seguridad.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        },
        {
          "text": "Confirmaría como hecho la explicación de la persona y cerraría el encuentro.",
          "correct": false,
          "feedback": "Revisa esta conclusión: La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion."
        }
      ]
    }
  ],
  "rubric": [
    {
      "title": "Escucha y cronología",
      "ids": [
        "qa",
        "qb"
      ],
      "why": "Permite conocer prioridades y curso."
    },
    {
      "title": "Descripción y contraste",
      "ids": [
        "qc",
        "qd"
      ],
      "why": "Separa hechos, vivencia e interpretación."
    },
    {
      "title": "Contexto y colaboración",
      "ids": [
        "qe",
        "qf"
      ],
      "why": "Identifica información pendiente y apoyos."
    },
    {
      "title": "Seguridad",
      "ids": [
        "safety"
      ],
      "why": "Explora necesidades inmediatas sin inferir peligrosidad."
    }
  ],
  "teacher": {
    "objectives": [
      "Escuchar sin ridiculizar ni confirmar explicaciones no verificadas.",
      "La pérdida visual y el reconocimiento de las figuras permiten considerar Charles Bonnet, pendiente de evaluación."
    ],
    "differential": "La pérdida visual puede asociarse a alucinaciones visuales; deben valorarse otras causas médicas, medicamentos y cambios cognitivos. No se confirma Charles Bonnet con este guion.",
    "missing": "Exploración clínica, antecedentes completos, medicación y seguimiento. Los datos del guion no excluyen otras causas.",
    "followup": "Validar el malestar, acordar valoración médica y oftalmológica pronta y revisar apoyos para desplazarse con seguridad."
  }
},
{
  "id": "acute",
  "title": "Un cambio desde ayer",
  "person": "J. L., 79 años · atención fluctuante",
  "intro": "J. L. llega con su hijo. A ratos conversa y a ratos pierde el hilo; dice ver animales en el suelo. El objetivo es reconocer cuándo una entrevista debe dar paso a atención médica urgente.",
  "observation": "Escena educativa simplificada. Las respuestas se prepararon para practicar la entrevista; no representan una evaluación completa ni datos de pacientes reales.",
  "stages": [
    {
      "title": "Escuchar y situar",
      "goal": "Conoce la demanda y la evolución antes de clasificar.",
      "questions": [
        "qa",
        "qb"
      ]
    },
    {
      "title": "Precisar y contrastar",
      "goal": "Describe la experiencia y busca información que cambie tu hipótesis.",
      "questions": [
        "qc",
        "qd"
      ]
    },
    {
      "title": "Acordar los siguientes pasos",
      "goal": "Explora contexto y apoyos sin cerrar el diagnóstico.",
      "questions": [
        "qe",
        "qf"
      ]
    }
  ],
  "safety": {
    "id": "safety",
    "label": "¿Qué necesitas para estar a salvo ahora? ¿Hay ideas de daño o dificultades para cuidarte?",
    "response": "Intenta levantarse sin estabilidad y no identifica bien el lugar. Su hijo permanece cerca; no hay evaluación suficiente de seguridad.",
    "finding": "Desorientación, inestabilidad y causas médicas por evaluar.",
    "feedback": "Explorar seguridad y necesidades concretas orienta el apoyo. Una respuesta aislada no establece un nivel de riesgo ni sustituye la evaluación clínica."
  },
  "questions": [
    {
      "id": "qa",
      "label": "¿Cómo te encuentras ahora?",
      "response": "«Estoy cansado… ¿dónde está la estación?». Se ofrece una explicación breve del lugar y se habla con calma.",
      "finding": "Dificultad actual para situarse en el encuentro.",
      "feedback": "Frases breves y orientación respetuosa facilitan la comunicación; no es necesario confrontar."
    },
    {
      "id": "qb",
      "label": "Con su permiso, ¿qué ha cambiado respecto a ayer?",
      "response": "El hijo cuenta: «Ayer estaba como siempre; por la noche empezó a confundirse. Esta mañana mejoró y ahora vuelve a distraerse».",
      "finding": "Cambio de horas con fluctuación respecto al funcionamiento habitual.",
      "feedback": "La información complementaria ayuda a establecer el cambio agudo; no reemplaza escuchar a J. L."
    },
    {
      "id": "qc",
      "label": "¿Qué está viendo y cómo mantiene la atención?",
      "response": "«Hay gatos…». Mira el suelo vacío y pierde varias preguntas. No se realiza una prueba formal en esta escena.",
      "finding": "Experiencias visuales junto con alteración de la atención observada.",
      "feedback": "La alteración aguda de atención cambia la prioridad clínica; una alucinación no demuestra un trastorno psicótico primario."
    },
    {
      "id": "qd",
      "label": "¿Hay dolor, fiebre, dificultad respiratoria o menor ingesta?",
      "response": "El hijo refiere fiebre y muy poca bebida desde ayer. No se han tomado constantes.",
      "finding": "Síntomas físicos recientes que requieren evaluación inmediata.",
      "feedback": "Estos datos justifican atención urgente sin esperar a determinar la causa."
    },
    {
      "id": "qe",
      "label": "¿Qué medicamentos y enfermedades debemos comunicar al equipo?",
      "response": "El hijo trae una lista y comenta un fármaco nuevo para dormir; la dosis no está confirmada.",
      "finding": "Cambio farmacológico referido, aún por verificar.",
      "feedback": "Revisar medicamentos ayuda a investigar causas; no autoriza suspender o ajustar tratamientos desde el simulador."
    },
    {
      "id": "qf",
      "label": "¿Quién puede acompañarlo mientras organizamos la atención?",
      "response": "J. L. acepta que su hijo permanezca y aporte la lista de medicamentos. Se le explica cada paso con frases sencillas.",
      "finding": "Apoyo disponible durante la derivación.",
      "feedback": "La entrevista educativa se puede completar, pero en una situación real no se retrasaría la atención para terminar preguntas."
    }
  ],
  "decisions": [
    {
      "id": "phenomena",
      "title": "¿Qué descripción recoge mejor el relato?",
      "needs": [
        "qc",
        "qd"
      ],
      "options": [
        {
          "text": "Experiencias visuales junto con alteración de la atención observada.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        },
        {
          "text": "El relato basta para asignar un trastorno definitivo.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        }
      ]
    },
    {
      "id": "formulation",
      "title": "¿Qué hipótesis permite explorar?",
      "needs": [
        "qa",
        "qb",
        "qe"
      ],
      "options": [
        {
          "text": "Los cambios agudos y fluctuantes de atención plantean posible delirium y exigen evaluación médica urgente.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        },
        {
          "text": "No hace falta ampliar la evaluación.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        }
      ]
    },
    {
      "id": "plan",
      "title": "¿Cómo responderías ahora?",
      "needs": [
        "safety",
        "qf"
      ],
      "options": [
        {
          "text": "Organizar atención médica urgente, acompañamiento y comunicación del cambio basal, síntomas y medicación; no esperar a completar el cuestionario.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        },
        {
          "text": "Confirmaría como hecho la explicación de la persona y cerraría el encuentro.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica."
        }
      ]
    }
  ],
  "rubric": [
    {
      "title": "Escucha y cronología",
      "ids": [
        "qa",
        "qb"
      ],
      "why": "Permite conocer prioridades y curso."
    },
    {
      "title": "Descripción y contraste",
      "ids": [
        "qc",
        "qd"
      ],
      "why": "Separa hechos, vivencia e interpretación."
    },
    {
      "title": "Contexto y colaboración",
      "ids": [
        "qe",
        "qf"
      ],
      "why": "Identifica información pendiente y apoyos."
    },
    {
      "title": "Seguridad",
      "ids": [
        "safety"
      ],
      "why": "Explora necesidades inmediatas sin inferir peligrosidad."
    }
  ],
  "teacher": {
    "objectives": [
      "Escuchar sin ridiculizar ni confirmar explicaciones no verificadas.",
      "Los cambios agudos y fluctuantes de atención plantean posible delirium y exigen evaluación médica urgente."
    ],
    "differential": "Delirium es una hipótesis sindrómica, no una causa establecida. Infección, deshidratación, medicamentos y otras causas requieren valoración; esta escena no aplica ni sustituye una herramienta diagnóstica.",
    "missing": "Exploración clínica, antecedentes completos, medicación y seguimiento. Los datos del guion no excluyen otras causas.",
    "followup": "Organizar atención médica urgente, acompañamiento y comunicación del cambio basal, síntomas y medicación; no esperar a completar el cuestionario."
  }
},
{
  "id": "meaning",
  "title": "Una mirada que parece un mensaje",
  "person": "S. V., 31 años · significado personal y flexibilidad",
  "intro": "S. V. teme que sus compañeros envíen mensajes sobre su desempeño. El objetivo es explorar convicción, contexto y alternativas sin etiquetar una preocupación por su contenido.",
  "observation": "Escena educativa simplificada. Las respuestas se prepararon para practicar la entrevista; no representan una evaluación completa ni datos de pacientes reales.",
  "stages": [
    {
      "title": "Escuchar y situar",
      "goal": "Conoce la demanda y la evolución antes de clasificar.",
      "questions": [
        "qa",
        "qb"
      ]
    },
    {
      "title": "Precisar y contrastar",
      "goal": "Describe la experiencia y busca información que cambie tu hipótesis.",
      "questions": [
        "qc",
        "qd"
      ]
    },
    {
      "title": "Acordar los siguientes pasos",
      "goal": "Explora contexto y apoyos sin cerrar el diagnóstico.",
      "questions": [
        "qe",
        "qf"
      ]
    }
  ],
  "safety": {
    "id": "safety",
    "label": "¿Qué necesitas para estar a salvo ahora? ¿Hay ideas de daño o dificultades para cuidarte?",
    "response": "«No he pensado en hacerme daño ni en enfrentarme a nadie. Mi pareja sabe que estoy preocupada». Falta explorar la seguridad de forma continuada.",
    "finding": "No refiere intención de daño; cuenta con apoyo.",
    "feedback": "Explorar seguridad y necesidades concretas orienta el apoyo. Una respuesta aislada no establece un nivel de riesgo ni sustituye la evaluación clínica."
  },
  "questions": [
    {
      "id": "qa",
      "label": "¿Qué te gustaría resolver hoy?",
      "response": "«Me angustia ir al trabajo. Quiero contar lo que pasa sin que me llamen exagerada».",
      "finding": "Malestar ligado al entorno laboral.",
      "feedback": "La apertura valida la preocupación sin afirmar que existe una conspiración."
    },
    {
      "id": "qb",
      "label": "¿Cuándo empezó y qué ocurrió en el trabajo?",
      "response": "«Desde una evaluación negativa hace dos semanas. Me dijeron de verdad que debía mejorar dos tareas».",
      "finding": "Existe un conflicto laboral verificable referido antes de las interpretaciones.",
      "feedback": "Explorar contexto evita patologizar una preocupación comprensible."
    },
    {
      "id": "qc",
      "label": "¿Qué observas y qué significado le das?",
      "response": "«Cuando dos compañeros se miran, pienso que me critican. No escucho voces ni veo nada fuera de lo habitual».",
      "finding": "Interpretación personal de gestos reales, sin experiencia perceptiva anómala referida.",
      "feedback": "Distinguir percepción e interpretación evita llamar alucinación a un significado atribuido."
    },
    {
      "id": "qd",
      "label": "¿Qué tan segura estás? ¿Qué podría hacerte cambiar de opinión?",
      "response": "«Tal vez un cincuenta por ciento. A veces hablan de otros temas; podría preguntar a una compañera de confianza».",
      "finding": "Convicción parcial y capacidad de considerar alternativas.",
      "feedback": "La flexibilidad importa; el tema de referencia por sí solo no establece una idea delirante."
    },
    {
      "id": "qe",
      "label": "¿Cómo duermes y cómo está tu ánimo? ¿Hay sustancias o cambios de salud?",
      "response": "«Duermo mal por darle vueltas y estoy cansada. No he tenido energía inusual ni cambios de medicación». Falta ampliar la historia.",
      "finding": "Rumiación e insomnio referidos; contexto clínico aún incompleto.",
      "feedback": "La evaluación debe explorar ánimo, sueño y salud sin convertir un síntoma aislado en diagnóstico."
    },
    {
      "id": "qf",
      "label": "¿Cómo te afecta y qué ayuda aceptarías?",
      "response": "«Sigo trabajando, pero evito comer con el grupo. Aceptaría hablar sobre la ansiedad y revisar lo que estoy interpretando».",
      "finding": "Evitación y disposición a explorar alternativas en colaboración.",
      "feedback": "Atender el malestar es útil aunque no se haya establecido un trastorno."
    }
  ],
  "decisions": [
    {
      "id": "phenomena",
      "title": "¿Qué descripción recoge mejor el relato?",
      "needs": [
        "qc",
        "qd"
      ],
      "options": [
        {
          "text": "Interpretación personal de gestos reales, sin experiencia perceptiva anómala referida.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        },
        {
          "text": "El relato basta para asignar un trastorno definitivo.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        }
      ]
    },
    {
      "id": "formulation",
      "title": "¿Qué hipótesis permite explorar?",
      "needs": [
        "qa",
        "qb",
        "qe"
      ],
      "options": [
        {
          "text": "Hay preocupación e interpretaciones de referencia con flexibilidad; no hay datos suficientes para afirmar delirio ni un diagnóstico.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        },
        {
          "text": "No hace falta ampliar la evaluación.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        }
      ]
    },
    {
      "id": "plan",
      "title": "¿Cómo responderías ahora?",
      "needs": [
        "safety",
        "qf"
      ],
      "options": [
        {
          "text": "Validar el malestar, acordar seguimiento y ampliar evaluación del contexto, ansiedad, ánimo y repercusión; revisar seguridad si cambia la situación.",
          "correct": true,
          "feedback": "Esta opción utiliza los datos disponibles y conserva la incertidumbre. Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        },
        {
          "text": "Confirmaría como hecho la explicación de la persona y cerraría el encuentro.",
          "correct": false,
          "feedback": "Revisa esta conclusión: Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno."
        }
      ]
    }
  ],
  "rubric": [
    {
      "title": "Escucha y cronología",
      "ids": [
        "qa",
        "qb"
      ],
      "why": "Permite conocer prioridades y curso."
    },
    {
      "title": "Descripción y contraste",
      "ids": [
        "qc",
        "qd"
      ],
      "why": "Separa hechos, vivencia e interpretación."
    },
    {
      "title": "Contexto y colaboración",
      "ids": [
        "qe",
        "qf"
      ],
      "why": "Identifica información pendiente y apoyos."
    },
    {
      "title": "Seguridad",
      "ids": [
        "safety"
      ],
      "why": "Explora necesidades inmediatas sin inferir peligrosidad."
    }
  ],
  "teacher": {
    "objectives": [
      "Escuchar sin ridiculizar ni confirmar explicaciones no verificadas.",
      "Hay preocupación e interpretaciones de referencia con flexibilidad; no hay datos suficientes para afirmar delirio ni un diagnóstico."
    ],
    "differential": "Comparar preocupación contextual, ansiedad e ideas de referencia. Una convicción parcial en este relato no permite excluir toda psicopatología ni confirmar un trastorno.",
    "missing": "Exploración clínica, antecedentes completos, medicación y seguimiento. Los datos del guion no excluyen otras causas.",
    "followup": "Validar el malestar, acordar seguimiento y ampliar evaluación del contexto, ansiedad, ánimo y repercusión; revisar seguridad si cambia la situación."
  }
}];
