---
sidebar_position: 3
---

# Alcance del Proyecto

El alcance de este proyecto abarca el **desarrollo y migración** de los **CIS Benchmarks de Nivel 1** específicamente diseñados para el sistema operativo **RHEL 9.X**. Estos benchmarks, que representan un conjunto de mejores prácticas para la seguridad y hardening de sistemas, serán implementados y organizados en un portal de documentación moderno y accesible, desplegado en **GitHub Pages** utilizando **Docusaurus 3.7**, una herramienta robusta y flexible para la creación de sitios web de documentación.

Además del portal, se generará un **archivo consolidado** que incluirá todos los puntos de hardening identificados, estructurados de manera clara y detallada. Este archivo está diseñado para cumplir con los requisitos y expectativas de las **entidades de control**, proporcionando una referencia completa y fácil de seguir para auditorías y revisiones de cumplimiento. El objetivo es ofrecer una solución integral que no solo facilite la implementación de controles de seguridad, sino que también simplifique los procesos de verificación y reporte.

## Alcance Funcional

### Migración de Contenido

* Trasladar la documentación de estándares de hardening de PDF a un formato web, aprovechando las funcionalidades de Docusaurus.
* Estructurar la información en secciones, capítulos o módulos que faciliten la navegación y comprensión de los distintos instructivos.

### Control de versiones actualizado

* Implementar un flujo de trabajo que permita revisar, aprobar y publicar cambios de forma centralizada y segura.
* Proveer la capacidad de rastrear el historial de modificaciones en la documentación, de manera que se mantenga un registro claro y ordenado.

### Mejoras en Legibilidad y Usabilidad

* Refinar la redacción y la presentación de comandos para reducir errores de copiado o ejecución.
* Asegurar que la estructura de la documentación sea intuitiva, con índices, menús y sistemas de búsqueda avanzados.

### Consolidación y Entregables

* Generar un único archivo que incluya todos los puntos de hardenización, destinado a la revisión y auditoría por parte de las entidades de control.
* Facilitar el acceso y la distribución interna, asegurando que cada versión cumpla con los lineamientos de seguridad y normativa vigente.

## Alcance Técnico

### Configuración de Docusaurus

* Instalación y personalización del portal de documentación empleando la estructura y componentes de React que provee Docusaurus.
* Adaptación de temas y estilos para que la presentación del contenido refleje la imagen corporativa y cumpla con las políticas del banco.

### Integración con Repositorio Git

* Uso de GitHub (u otro repositorio como Azure) para hospedar el código fuente del portal, garantizando la trazabilidad de los cambios.
* Configuración de pipelines de integración y despliegue continuo (CI/CD) para automatizar la publicación de actualizaciones en GitHub Pages u otro servicio de hosting.

### Optimización de Contenido y Código

* Conversión de archivos PDF a Markdown (MD), asegurando un correcto formato de comandos y secciones.
* Implementación de etiquetas y metadatos (frontmatter) para mejorar la búsqueda y el filtrado del contenido.

### Pruebas y Validaciones
* Realización de pruebas de compatibilidad en distintos navegadores y sistemas operativos.
* Revisión del rendimiento y de la seguridad de la plataforma, adoptando buenas prácticas de protección de la información.

## Exclusiones

* **Reescritura de Políticas Internas o Reglamentos**: El proyecto no contempla la modificación de lineamientos regulatorios o legales establecidos por la entidad bancaria o entidades de control.

* **Desarrollo de Integraciones con Sistemas Externos**: No se prevé la creación de APIs o la conexión con plataformas de terceros, más allá del repositorio y el entorno de despliegue del portal.

* **Capacitaciones Masivas**: Aunque se brindará orientación sobre el uso y actualización de la plataforma, la formación extensiva a todo el personal o a terceros no forma parte del alcance del proyecto.





