---
sidebar_position: 2
---

# Antecedentes y Propuesta

## Antecedente

En la actualidad, diversas organizaciones trabajan en la liberación y publicacion de estándares de hardenización para servidores Unix y Wintel mediante archivos PDF, los cuales se distribuyen de forma trimestral o semestral. Si bien este formato permite una difusión relativamente sencilla, se han identificado diversos inconvenientes, entre ellos:

* **Desactualización y Alteraciones No Controladas**: Dado que el estándar en PDF no se integra a un sistema de control de versiones, resulta complicado garantizar que todos los involucrados cuenten siempre con la última versión. Además, existe la posibilidad de que se generen copias alteradas o no oficiales.

* **Dificultad para la Lectura y Copia de Comandos**: Los archivos PDF pueden presentar problemas de formateo y restricciones que dificultan la selección, copia y uso directo de los comandos de hardening. Esto incrementa la probabilidad de errores a la hora de aplicarlos en un entorno real.

* **Accesibilidad Limitada y Baja Usabilidad**: El formato PDF no ofrece funcionalidades de búsqueda tan eficientes como las que se pueden obtener en un portal web, lo que dificulta la localización de información específica y afecta la curva de aprendizaje de los equipos que necesitan implementar la hardenización.

* **Procesos de Liberación Largos**: La publicación trimestral o semestral no se adecúa a la inmediatez que demandan las nuevas incidencias o vulnerabilidades de seguridad. Actualizar el contenido y asegurarse de que todos reciban la nueva versión se convierte en un proceso prolongado.

## Propuesta

### Cómo Docusaurus Ayudará a Resolver Estos Problemas

El uso de Docusaurus, un framework de documentación basado en React, ofrece diversas ventajas para mejorar la calidad, disponibilidad y control de la documentación de hardenización:

* **Control de Versiones Integrado**: Al alojar la documentación en un repositorio Git (como GitHub o GitLab), cada cambio queda registrado. Esto ayuda a rastrear el historial de modificaciones y garantiza que los usuarios dispongan de la versión más reciente.

* **Actualizaciones Rápidas y Continuas**: Docusaurus permite implementar pipelines de integración continua (CI/CD) para que las nuevas versiones de la documentación se publiquen automáticamente, reduciendo tiempos de espera y riesgos de obsolescencia.

* **Mejor Experiencia de Lectura y Búsqueda**: La presentación en un portal web posibilita una navegación amigable, con índices, secciones y un motor de búsqueda interno, lo que facilita la localización de apartados o comandos específicos.


* **Formato Óptimo para Código y Comandos**: Gracias al soporte de Markdown y componentes específicos, es posible resaltar código y proporcionar ejemplos interactivos, lo que minimiza errores de copia o lectura.


* **Colaboración y Revisión en Equipo**: Cualquier miembro del equipo puede proponer cambios a través de pull requests o revisiones, lo cual fortalece la colaboración y asegura que los estándares estén siempre actualizados y verificados.

* **Escalabilidad y Adaptabilidad**: Al ser una solución basada en tecnologías web modernas, la documentación puede escalarse a diferentes niveles de complejidad y adaptarse a múltiples plataformas, servidores o estándares de seguridad en el futuro.


De este modo, migrar la documentación de un sistema de archivos PDF a un portal con Docusaurus permitirá a la entidad bancaria no solo mantener la información actualizada de manera más efectiva, sino también optimizar la claridad y la rapidez con la que se despliegan nuevas versiones o mejoras en los estándares de hardenización.
