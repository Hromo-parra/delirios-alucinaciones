# Verificación de la versión 1.0

Fecha: 6 de octubre de 2026.

- Ambos scripts pasan `node --check`.
- Búsqueda «capgras»: una coincidencia de doce. Restablecer búsqueda muestra todos los temas.
- Cambio a modalidad visual: muestra explicación correspondiente.
- Se comprobó la selección de los ocho casos, cada uno con siete campos de estado mental y discusión clínica.
- Apertura de discusión de delirium: muestra formulación, diferencial, evaluación, abordaje y seguimiento.
- Respuesta correcta e incorrecta en la autoevaluación: retroalimentación y puntuación coherentes.
- Reinicio: limpia avance y habilita respuestas.
- Modo docente: muestra claves y abre la discusión clínica.
- Control de expectativa: extremos 0 y 100 producen 20 y 80 respectivamente.
- Enlaces internos presentes: ningún destino ausente en la vista generada.
- Vistas de 358, 390 y 1280 px: ancho del documento coincide con viewport, sin desbordamiento horizontal.
- Consola revisada tras el recorrido: sin errores ni advertencias.
- Portada inspeccionada en móvil y escritorio. Se corrigió un recorte del rótulo conceptual.

La impresión está implementada para incluir los ocho casos y preservar la selección al volver a la página. No se verificó una impresión física.

Para confirmar la publicación hay que comprobar el último build de GitHub Pages y la ruta pública. El resultado de esa comprobación se comunica en la entrega, para no confundir la validación local con el estado del servidor.

## Versión 1.1.0: entrevista progresiva (15 de octubre de 2026)

Verificación en navegador local:

- Inicio en modo estudiante sin claves visibles. Al activar docente aparecen el caso completo y la guía.
- Control local de modo sincronizado con el de cabecera. Cambiar de modo conserva preguntas, decisiones y nota.
- Avance bloqueado antes de dos preguntas del bloque. La pregunta de seguridad no cuenta artificialmente para este mínimo y está accesible desde el inicio.
- Recorrido parcial: respuestas, registro y hallazgos coherentes. Retroalimentación para opción adecuada e inadecuada.
- Primera selección conservada después de revisarla. Ejemplo: una opción incorrecta revisada más dos adecuadas produce 2/3 en primer intento.
- Texto libre conservado entre modos y mostrado literalmente, sin interpretar etiquetas HTML. Límite de 2000 caracteres.
- Omisiones reflejadas en la rúbrica y junto a las decisiones, incluso con opciones adecuadas.
- Recorrido completo: las doce preguntas de bloques y la pregunta de seguridad producen cinco dimensiones exploradas.
- Omisión de seguridad detectada; al volver, preguntar y terminar, la devolución se actualiza sin perder decisiones.
- Pregunta elegida con Enter. Controles nativos de radio y foco conservado al seleccionar.
- Caso completo y seguimiento ficticio disponibles al finalizar.
- Reinicio cancelado conserva el avance; confirmarlo vuelve al comienzo.
- Búsqueda de Capgras, cambio al caso original 8 y respuesta a pregunta 1 de la autoevaluación siguen funcionando.
- Vistas de 390 y 1280 px: ancho del documento igual al viewport, sin desbordamiento horizontal. Sin IDs duplicados ni destinos internos ausentes.
- Inspección visual de la simulación en ambas disposiciones. Consola sin errores ni advertencias tras los recorridos.

Verificación automática:

- Cuatro pruebas de integridad del contenido con `node --test tests/interview-content.test.cjs`: todas aprobadas.
- Sintaxis de los cuatro scripts comprobada con `node --check`.
- `git diff --check` sin errores.

Límites: no se hizo prueba con lector de pantalla real, impresión física ni evaluación de eficacia educativa. La rúbrica no tiene validación psicométrica. Los resultados locales anteriores no sustituyen la comprobación de la publicación final.
