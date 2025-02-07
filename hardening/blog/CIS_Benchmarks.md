# Contenido

## Resumen Ejecutivo

### Descripción Breve del Proyecto
Este proyecto busca migrar la documentación existente sobre estándares de hardenización para una entidad bancaria a un portal basado en Docusaurus. El objetivo principal es mejorar la legibilidad, la claridad de los comandos y la calidad de la redacción. Además, se prevé implementar pipelines que permitan actualizar el portal de forma justificada y continua. Finalmente, se consolidará toda la información en un archivo único que pueda ser entregado a las entidades de control.
<!-- truncate -->

### Objetivos Principales
- Desarrollar un portal de documentación que reúna los diferentes instructivos de hardenización para una entidad bancaria.
- Mejorar la presentación visual y la redacción, así como la claridad de los comandos necesarios para solventar los requerimientos de hardening.
- Publicar un estudio científico que presente los resultados del proyecto y evalúe la usabilidad del nuevo portal frente a la solución actual de la entidad.

### Alcance del Proyecto
El alcance incluye el desarrollo y la migración de un estándar e instructivo de hardenización para la entidad bancaria, desplegado en GitHub Pages mediante Docusaurus. Asimismo, se generará un archivo final que contenga todos los puntos de hardening, pensado para satisfacer los requerimientos de las entidades de control.

### Duración
Un periodo aproximado de 2 a 3 meses, con reuniones periódicas y semanales para el seguimiento y control.

### Presupuesto Aproximado
No aplica.

### Beneficios Clave para la Organización o el Cliente
- Optimización de la visualización y comprensión de los puntos de hardenización.
- Creación de un portal centralizado, con comandos verificados y adecuados para la ejecución de las medidas de hardening.
- Reducción de tiempos en actualizaciones y liberaciones de estándares e instructivos, gracias a pipelines de despliegue y control de versiones.

## Antecedentes y Propuesta

### Antecedente
En la actualidad, la entidad bancaria publica y libera los estándares de hardenización para servidores Unix y Wintel mediante archivos PDF, los cuales se distribuyen de forma trimestral o semestral. Si bien este formato permite una difusión relativamente sencilla, se han identificado diversos inconvenientes:

- **Desactualización y Alteraciones No Controladas**: Dado que el estándar en PDF no se integra a un sistema de control de versiones, resulta complicado garantizar que todos los involucrados cuenten siempre con la última versión. Además, existe la posibilidad de que se generen copias alteradas o no oficiales.
- **Dificultad para la Lectura y Copia de Comandos**: Los archivos PDF pueden presentar problemas de formateo y restricciones que dificultan la selección, copia y uso directo de los comandos de hardening. Esto incrementa la probabilidad de errores a la hora de aplicarlos en un entorno real.
- **Accesibilidad Limitada y Baja Usabilidad**: El formato PDF no ofrece funcionalidades de búsqueda tan eficientes como las que se pueden obtener en un portal web, lo que dificulta la localización de información específica y afecta la curva de aprendizaje de los equipos que necesitan implementar la hardenización.
- **Procesos de Liberación Largos**: La publicación trimestral o semestral no se adecúa a la inmediatez que demandan las nuevas incidencias o vulnerabilidades de seguridad. Actualizar el contenido y asegurarse de que todos reciban la nueva versión se convierte en un proceso prolongado.

# Cómo Docusaurus Ayudará a Resolver Estos Problemas

El uso de Docusaurus, un framework de documentación basado en React, ofrece diversas ventajas para mejorar la calidad, disponibilidad y control de la documentación de hardenización:

- **Control de Versiones Integrado**: Al alojar la documentación en un repositorio Git (como GitHub o GitLab), cada cambio queda registrado. Esto ayuda a rastrear el historial de modificaciones y garantiza que los usuarios dispongan de la versión más reciente.
- **Actualizaciones Rápidas y Continuas**: Docusaurus permite implementar pipelines de integración continua (CI/CD) para que las nuevas versiones de la documentación se publiquen automáticamente, reduciendo tiempos de espera y riesgos de obsolescencia.
- **Mejor Experiencia de Lectura y Búsqueda**: La presentación en un portal web posibilita una navegación amigable, con índices, secciones y un motor de búsqueda interno, lo que facilita la localización de apartados o comandos específicos.
- **Formato Óptimo para Código y Comandos**: Gracias al soporte de Markdown y componentes específicos, es posible resaltar código y proporcionar ejemplos interactivos, lo que minimiza errores de copia o lectura.
- **Colaboración y Revisión en Equipo**: Cualquier miembro del equipo puede proponer cambios a través de pull requests o revisiones, lo cual fortalece la colaboración y asegura que los estándares estén siempre actualizados y verificados.
- **Escalabilidad y Adaptabilidad**: Al ser una solución basada en tecnologías web modernas, la documentación puede escalarse a diferentes niveles de complejidad y adaptarse a múltiples plataformas, servidores o estándares de seguridad en el futuro.

De este modo, migrar la documentación de un sistema de archivos PDF a un portal con Docusaurus permitirá a la entidad bancaria no solo mantener la información actualizada de manera más efectiva, sino también optimizar la claridad y la rapidez con la que se despliegan nuevas versiones o mejoras en los estándares de hardenización.

# Alcance del Proyecto

Este proyecto contempla la migración de la documentación existente en formato PDF sobre estándares de hardenización para servidores Unix y Wintel a un portal web basado en Docusaurus. El objetivo es mejorar la legibilidad, simplificar la búsqueda y permitir actualizaciones más rápidas y controladas. Se incluirá la creación de pipelines de integración y despliegue continuo (CI/CD) que faciliten la publicación de nuevas versiones, así como la generación de un archivo final que consolide toda la información para su entrega a las entidades de control.

## Alcance Funcional

### Migración de Contenido
- Trasladar la documentación de estándares de hardening de PDF a un formato web, aprovechando las funcionalidades de Docusaurus.
- Estructurar la información en secciones, capítulos o módulos que faciliten la navegación y comprensión de los distintos instructivos.

### Control de Versiones y Actualizaciones
- Implementar un flujo de trabajo que permita revisar, aprobar y publicar cambios de forma centralizada y segura.
- Proveer la capacidad de rastrear el historial de modificaciones en la documentación, de manera que se mantenga un registro claro y ordenado.

### Mejoras en Legibilidad y Usabilidad
- Refinar la redacción y la presentación de comandos para reducir errores de copiado o ejecución.
- Asegurar que la estructura de la documentación sea intuitiva, con índices, menús y sistemas de búsqueda avanzados.

### Consolidación y Entregables
- Generar un único archivo (o paquete) que incluya todos los puntos de hardenización, destinado a la revisión y auditoría por parte de las entidades de control.
- Facilitar el acceso y la distribución interna, asegurando que cada versión cumpla con los lineamientos de seguridad y normativa vigente.

## Alcance Técnico

### Configuración de Docusaurus
- Instalación y personalización del portal de documentación empleando la estructura y componentes de React que provee Docusaurus.
- Adaptación de temas y estilos para que la presentación del contenido refleje la imagen corporativa y cumpla con las políticas del banco.

### Integración con Repositorio Git
- Uso de GitHub (u otro repositorio como Azure) para hospedar el código fuente del portal, garantizando la trazabilidad de los cambios.
- Configuración de pipelines de integración y despliegue continuo (CI/CD) para automatizar la publicación de actualizaciones en GitHub Pages u otro servicio de hosting.

### Optimización de Contenido y Código
- Conversión de archivos PDF a Markdown (MD), asegurando un correcto formato de comandos y secciones.
- Implementación de etiquetas y metadatos (frontmatter) para mejorar la búsqueda y el filtrado del contenido.

### Pruebas y Validaciones
- Realización de pruebas de compatibilidad en distintos navegadores y sistemas operativos.
- Revisión del rendimiento y de la seguridad de la plataforma, adoptando buenas prácticas de protección de la información.

## Exclusiones
- **Reescritura de Políticas Internas o Reglamentos**: El proyecto no contempla la modificación de lineamientos regulatorios o legales establecidos por la entidad bancaria o entidades de control.
- **Desarrollo de Integraciones con Sistemas Externos**: No se prevé la creación de APIs o la conexión con plataformas de terceros, más allá del repositorio y el entorno de despliegue del portal.
- **Capacitaciones Masivas**: Aunque se brindará orientación sobre el uso y actualización de la plataforma, la formación extensiva a todo el personal o a terceros no forma parte del alcance del proyecto.

# Objetivos Generales y Específicos

## Objetivo General
Implementar un portal web basado en Docusaurus para la documentación de estándares de hardenización en servidores Unix, que mejore la legibilidad, facilite la actualización continua y ofrezca un recurso unificado para su validación.

## Objetivos Específicos
- Migrar la documentación desde archivos PDF a un entorno web, asegurando una estructura de contenidos clara y de fácil navegación.
- Mejorar la legibilidad y consistencia de los comandos y procedimientos de hardening, reduciendo el riesgo de errores y aumentando la eficiencia en la aplicación de cada punto.
- Implementar pipelines de integración y despliegue continuo (CI/CD) para automatizar el proceso de actualización y liberación de nuevas versiones, brindando control de cambios y trazabilidad.
- Generar un archivo unificado de referencia que consolide todos los puntos de hardenización, sirviendo como documento oficial para auditorías y entidades de control.
- Analizar y validar la usabilidad del nuevo portal mediante un estudio comparativo que evalúe los beneficios frente al modelo anterior basado en archivos PDF, garantizando así la efectividad de la migración.

# Entregables

## Portal Web en Docusaurus
- Migración completa de los estándares de hardenización (Unix) a un portal web construido con Docusaurus.
- Estructuración de la documentación en secciones claras y búsqueda integrada para facilitar la consulta.

## Pipelines de Integración y Despliegue Continuo (CI/CD)
- Configuración de flujos automáticos para validar, aprobar y publicar nuevas versiones de la documentación.
- Registro y seguimiento de cambios que permita tener trazabilidad y control de versiones.

## Documento Unificado de Hardening para Entidades de Control
- Consolidación de todos los puntos de hardenización en un formato único (por ejemplo, PDF o anexo), que sirva como referencia oficial para auditorías y revisiones regulatorias.
- Inclusión de comandos, descripciones de procedimientos y justificaciones técnicas de cada medida de seguridad.

## Manual de Usuario y Guía de Operación del Portal
- Instrucciones detalladas sobre cómo navegar, buscar información y proponer cambios dentro del portal en Docusaurus.
- Orientaciones para el uso de pipelines (aprobaciones y despliegues) y mejores prácticas para mantener la documentación actualizada.

## Estudio Comparativo y Validación de Usabilidad
- Informe que muestre los resultados de comparar la nueva solución frente al uso de archivos PDF, evaluando la facilidad de uso, la rapidez para encontrar información y la calidad de la documentación.
- Conclusiones y recomendaciones basadas en el feedback de usuarios clave o equipos de TI.

## Acta de Cierre e Informe Final
- Documento que recoja las lecciones aprendidas, el cumplimiento de los objetivos y la confirmación de la entrega de todos los componentes del proyecto.
- Validación formal por parte de los interesados y evidencia de que se han cumplido los criterios de aceptación.

# Metodología de Trabajo

La metodología propuesta combina elementos de Scrum, Cascada y Kamba para aprovechar la claridad y estructura de un enfoque secuencial, al tiempo que se incorporan iteraciones cortas que permitan ajustar y mejorar el producto conforme avanza el proyecto.

## Herramientas y Comunicación:
- **Microsoft Teams**: Principal canal de comunicación para reuniones de seguimiento, intercambio de archivos y coordinación diaria.
- Se programarán videoconferencias quincenales para la validación de avances e hitos.

## Git y GitHub:
- Repositorio principal donde se almacenarán los archivos fuente del portal en Docusaurus y los documentos relacionados.
- Se habilitarán branches para cada fase o sprint, facilitando el control de versiones y la colaboración entre los miembros del equipo.
- Mediante GitHub Actions (o herramientas equivalentes), se implementarán pipelines de integración y despliegue continuo (CI/CD).

## Registro de Progreso y Documentación:
- Las decisiones clave y acuerdos se documentarán en actas breves dentro de Teams y reuniones semanales, asegurando transparencia y trazabilidad.