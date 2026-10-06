# Delirios y alucinaciones

Web docente en español para estudiar psicopatología del pensamiento y la percepción. Adaptación temática de `delirio.pptx` (85 diapositivas), ampliada con alucinaciones y bibliografía verificable. Los archivos originales permanecen intactos y no se incluyen en el repositorio.

## Contenido

- Pensamiento: contenido, curso, forma y diagnóstico diferencial fenomenológico.
- Doce temas delirantes con búsqueda, ejemplos y matices.
- Seis modalidades de alucinaciones, ilusiones y contexto clínico.
- Anatomía, conectividad y función descritas como sistemas y modelos, con límites explicativos.
- Ocho casos clínicos ficticios completos, con preguntas, formulación provisional, diferencial, evaluación, abordaje y seguimiento ilustrativo.
- Seis preguntas de autoevaluación con explicación inmediata.
- Modo docente con claves y propuestas de discusión.
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
- `docs/REVISION_CIENTIFICA.md`: procedencia y decisiones de revisión.

Se utiliza HTML, CSS y JavaScript vanilla. No hay dependencias externas, backend, analítica, cuentas ni almacenamiento de respuestas. Las respuestas se pierden al recargar. El modo docente es un recurso didáctico, no una restricción de acceso a las claves.

## GitHub Pages

Repositorio previsto: https://github.com/Hromo-parra/delirios-alucinaciones

Página prevista: https://hromo-parra.github.io/delirios-alucinaciones/

Publicar desde `main`, carpeta raíz `/`, mediante Settings > Pages > Deploy from a branch. Las rutas de recursos son relativas. `.nojekyll` evita procesamiento Jekyll.

## Verificación

```sh
node --check js/content.js
node --check js/app.js
```

Comprobar en navegador búsqueda (incluidas tildes), selección de modalidades, ocho casos, modo docente, respuestas correctas e incorrectas, reinicio, analogía, enlaces internos y anchura móvil. La publicación solo se considera confirmada después de verificar el estado `built` de Pages y la página pública.

## Límites científicos y privacidad

Material educativo, sin función diagnóstica. Los casos, datos y seguimientos son ficticios. Las propuestas clínicas no incluyen prescripciones ni sustituyen juicio profesional. El diagrama de portada es conceptual y no anatómico. El control de expectativas solo calcula un promedio ponderado, sin validez clínica.

Las teorías históricas se identifican como tales. No se reutilizan los detalles personales del caso de las diapositivas 79–85. Las referencias incompletas del original no se completaron con datos inventados. Las guías NICE son del Reino Unido y deben contextualizarse según protocolos locales.

Versión 1.0, 6 de octubre de 2026.
