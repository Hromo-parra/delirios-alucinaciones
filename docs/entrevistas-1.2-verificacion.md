# Verificación de entrevistas 1.2

Ampliación del 16 de octubre de 2026: Alex se conserva y se añaden M. R., J. L. y S. V. Son guiones educativos inventados, sin datos reales ni función diagnóstica. No se modificaron los ocho casos de lectura ni los otros módulos.

## Fuentes oficiales y simplificaciones
- [NHS: Charles Bonnet](https://www.nhs.uk/conditions/charles-bonnet-syndrome/): contexto de pérdida visual, modalidad visual y reconocimiento habitual. El guion no confirma ese síndrome ni descarta otras causas.
- [NHS: confusión súbita](https://www.nhs.uk/symptoms/confusion/): prioridad médica, alteración de atención y orientación, acompañamiento y comunicación sencilla. J. L. no aplica una herramienta diagnóstica ni establece una causa.
- [NIMH: Understanding Psychosis](https://www.nimh.nih.gov/health/publications/understanding-psychosis): varias causas posibles, evaluación integral y participación de la persona. El tema de una creencia no permite asignar un diagnóstico automáticamente.

Consultadas el 16 de octubre de 2026. Las referencias NICE originales se conservan; el lector web devolvió 403 en CG103 y CG136 durante la ampliación, por lo que no se declara una nueva comprobación directa de esas páginas. Las rúbricas y el mínimo de preguntas son decisiones docentes sin validación psicométrica. Una negación de daño no descarta riesgo. No se prescriben tratamientos.

## Pruebas
`node --test tests/*.cjs`: ocho pruebas aprobadas. Cubren integridad de preguntas y decisiones, cuatro recorridos, avance condicionado, respuestas alternativas y revisadas, primera selección, datos pendientes, escape de notas, modo docente, cambio entre casos, reinicio independiente y rama urgente. La conservación literal del guion original se comprueba mediante SHA-256.

Safari: cuatro recorridos hasta devolución en escritorio y en un iframe de 390 × 780 píxeles CSS. Se comprobó selección de caso, preguntas, decisiones, feedback, cancelación de reinicio y conservación de otro caso tras reiniciar uno. La rama urgente lleva a interpretación sin exigir completar preguntas. Se inspeccionaron capturas en ambos tamaños. No se probó hardware móvil, agente de usuario móvil ni lector de pantalla.

Los estados viven en memoria: desaparecen al recargar. Las respuestas son fijas; la ramificación está en selección de preguntas, devolución de decisiones y prioridad urgente, sin modificar artificialmente la historia clínica.
