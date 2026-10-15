# Delirios y alucinaciones

Web docente en español para estudiar psicopatología del pensamiento y la percepción. Adaptación temática de `delirio.pptx` (85 diapositivas), ampliada con alucinaciones y bibliografía verificable. Los archivos originales permanecen intactos y no se incluyen en el repositorio.

## Contenido

- Pensamiento: contenido, curso, forma y diagnóstico diferencial fenomenológico.
- Doce temas delirantes con búsqueda, ejemplos y matices.
- Seis modalidades de alucinaciones, ilusiones y contexto clínico.
- Anatomía, conectividad y función descritas como sistemas y modelos, con límites explicativos.
- Ocho casos clínicos ficticios completos, con preguntas, formulación provisional, diferencial, evaluación, abordaje y seguimiento ilustrativo.
- Seis preguntas de autoevaluación con explicación inmediata.
- Entrevista clínica progresiva con un caso completo, 13 preguntas elegibles, tres decisiones razonadas y devolución sobre datos omitidos.
- Modo docente con claves y propuestas de discusión. El control dentro de la simulación se sincroniza con la cabecera.
- Impresión de todos los casos (en modo docente también incluye el razonamiento).

## Uso local

No requiere instalación ni compilación. Desde este directorio:

```sh
python3 -m http.server 8027
```

Abrir http://localhost:8027. También puede abrirse `index.html` directamente, porque no hay solicitudes `fetch` ni módulos externos.

## Arquitectura

- `index.html`: contenido base, navegación y bibliografía.
- `css/styles.css`: diseño adaptable y estilos de impresión.
- `js/content.js`: temas, modalidades, casos y preguntas.
- `js/app.js`: búsqueda, selección de casos, modos, autoevaluación y analogía matemática.
- `js/interview-content.js`: caso ficticio, respuestas, retroalimentación, decisiones y rúbrica.
- `js/interview.js`: navegación y estado de la entrevista progresiva.
- `css/interview.css`: presentación adaptable de la simulación.
- `tests/interview-content.test.cjs`: integridad del banco y de sus referencias internas.
- `docs/REVISION_CIENTIFICA.md`: procedencia y decisiones de revisión.

Se utiliza HTML, CSS y JavaScript vanilla. No hay dependencias externas, backend, analítica, cuentas ni almacenamiento de respuestas. Las respuestas se pierden al recargar. El modo docente es un recurso didáctico, no una restricción de acceso a las claves.

## GitHub Pages

Repositorio: https://github.com/Hromo-parra/delirios-alucinaciones

Página: https://hromo-parra.github.io/delirios-alucinaciones/

Publicar desde `main`, carpeta raíz `/`, mediante Settings > Pages > Deploy from a branch. Las rutas de recursos son relativas. `.nojekyll` evita procesamiento Jekyll.

## Verificación

```sh
node --check js/content.js
node --check js/app.js
node --check js/interview-content.js
node --check js/interview.js
node --test tests/interview-content.test.cjs
```

Comprobar en navegador búsqueda (incluidas tildes), selección de modalidades, ocho casos, modo docente, respuestas correctas e incorrectas, reinicio, analogía, enlaces internos y anchura móvil. La publicación solo se considera confirmada después de verificar el estado `built` de Pages y la página pública.

## Límites científicos y privacidad

Material educativo, sin función diagnóstica. Los casos, datos y seguimientos son ficticios. Las propuestas clínicas no incluyen prescripciones ni sustituyen juicio profesional. El diagrama de portada es conceptual y no anatómico. El control de expectativas solo calcula un promedio ponderado, sin validez clínica.

Las teorías históricas se identifican como tales. No se reutilizan los detalles personales del caso de las diapositivas 79–85. Las referencias incompletas del original no se completaron con datos inventados. Las guías NICE son del Reino Unido y deben contextualizarse según protocolos locales.

## Entrevista progresiva

Acceso directo: https://hromo-parra.github.io/delirios-alucinaciones/#entrevista

1. Comenzar la entrevista y seleccionar al menos dos preguntas en cada uno de los tres bloques. La pregunta de seguridad está accesible desde el primero.
2. Consultar la última respuesta, el registro y el cuaderno de hallazgos. Se puede retroceder sin perder preguntas.
3. Elegir tres decisiones y, si se desea, escribir un razonamiento breve (máximo 2000 caracteres). No introducir datos reales.
4. Revisar la devolución: cobertura de cinco dimensiones, primera respuesta y selecciones revisadas. Las omisiones se conservan aunque se acierte una opción.
5. Volver a completar la entrevista o reiniciarla. El reinicio pide confirmación dentro de la actividad y no borra las otras actividades.

El modo docente revela todas las respuestas, objetivos, claves y cierre ficticio. Cambiar de modo conserva el recorrido y las notas. Es un recurso de enseñanza, sin autenticación. El guion es determinista, con respuestas preparadas; no es un chatbot ni una evaluación clínica. La exigencia de dos preguntas es una regla de la actividad, no un estándar de entrevista médica.

La rúbrica es formativa y no ha sido validada. El texto libre no recibe evaluación automática. La impresión general incluye la vista actual de la simulación; el caso completo se puede desplegar al terminar o en modo docente. No se promete guardar avances entre sesiones.

Versión 1.1.0, 15 de octubre de 2026. La versión original permanece en el historial Git.
