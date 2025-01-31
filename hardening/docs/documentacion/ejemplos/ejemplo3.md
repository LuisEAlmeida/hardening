---
title: Ejemplo 2 - 7.1.2.3
tags: [Torre Unix, IST]
sidebar_position: 4
---
[Comentario]: # (Titulo)

# 7.1.2.3

[Comentario]: # (Áreas Involucradas)

## Áreas Involucradas
- Torre Unix
- Seguridad Tecnológica

[Comentario]: # (Contexto)
## Contexto
Para inspeccionar el estado del kernel, es crucial verificar el valor de la variable `noexec_user_stack`, que define si la pila de usuario puede ejecutar código. Habilitar esta protección `noexec_user_stack=1` fortalece la seguridad del sistema al prevenir la ejecución de código malicioso en la pila, mitigando así vulnerabilidades explotadas a través de desbordamientos de búfer.

[Comentario]: # (Verificación)
## Verificación

```bash
echo "noexec_user_stack/D | mdb -k"
```

La salida esperada es: `noexec_user_stack: 1`



[Comentario]: # (Remediación)
## Remediación
Para proceder con la remediación, ejecutar el siguiente script en la terminal:

```bash
if [! "`grep npexec_user_stack= /etc/system`"]; then
    cat <<END_CFG >> /etc/system
    set noexec_user_stack=1
    set noexec_user_stack_log=1
END_CFG
fi
```