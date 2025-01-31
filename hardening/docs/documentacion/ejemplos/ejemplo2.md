---
title: Ejemplo 2 - 5.2.1
tags: [Torre Unix, IST]
sidebar_position: 3
---
[Comentario]: # (Titulo)

# 5.2.1

[Comentario]: # (Áreas Involucradas)

## Áreas Involucradas
- Torre Unix
- Seguridad Tecnológica

[Comentario]: # (Contexto)
## Contexto

En servidores conectados a la red interna, el servicio `NetworkManager` está activado por defecto y juega un papel clave en la configuración de la red. Uno de sus comportamientos más relevantes es la gestión dinámica del archivo `/etc/resolv.conf`, el cual se actualiza automáticamente con la configuración DNS de los perfiles de conexión activos.  

Cuando `NetworkManager` detecta un cambio en la red, ya sea por una nueva conexión, una modificación en la configuración de un perfil o la renovación de un lease DHCP, ajusta automáticamente el contenido de `/etc/resolv.conf` con los servidores DNS proporcionados por la red.  



[Comentario]: # (Verificación)
## Verificación

Para garantizar que `NetworkManager` esté activo y operativo, se puede utilizar el siguiente comando:  

```bash
systemctl status NetworkManager
```
Este comando mostrará el estado actual del servicio, incluyendo información relevante como si está en ejecución `active (running)` o si ha experimentado fallos recientes.


[Comentario]: # (Remediación)
## Remediación
Para proceder con la remediación, ejecutar los siguientes comandos:

:::danger

Algunos servidores, debido a su configuración específica, pueden requerir ajustes personalizados en su DNS. Es fundamental verificar a qué servidores no se debe aplicar esta configuración antes de proceder.

:::

1. **Mostrar conexiones disponibles**:
```bash
nmcli con show
```

2. **Modificar la configuración de DNS**:
```bash
nmclir con mod <nombre_conexion> ipv4 dns "0.0.0.0 0.0.0.0 0.0.0.0" ipv4 dns-search "domain.com ec.domain.com"
```

3. **Modificar la configuración de DNS**:
```bash
nmclir con mod <nombre_conexion> ipv4 dns "0.0.0.0 0.0.0.0 0.0.0.0" ipv4 dns-search "domain.com ec.domain.com"
```
* Reemplaza `<nombre_conexion>` con el nombre de la conexión que deseas modificar.
* Especifica los servidores DNS correspondientes en lugar de 0.0.0.0.
* Configura los dominios de búsqueda DNS según las necesidades de tu entorno.

4. **Aplicar los cambios y reiniciar la conexión**:
```bash
nmcli con up <nombre_conexion>
```