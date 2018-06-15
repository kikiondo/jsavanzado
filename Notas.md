# Notas

### Programación prototipica

Las clases las **simulamos** con funciones constructoras utilizando prototipos.


    Paradigama de funciones autoejecutables

###Buenas practicas

* 2 espacios como sangría.
* Usar comillas simples en cadenas de texto con la excepción de escapado   de texto
* No dejar variables sin usar – esta captura toneladas de bugs!
* Sin punto y coma – Está bien. ¡En serio!
* Nunca empezar una línea con (, [, o `  - Este es el único problema al    evitar punto y coma – automáticamente verificado para ti!
* Más detalles
* Espacio después de las palabras claves if (condition) { ... }
* Espacio después del nombre de función function name (arg) { ... }
* Usar siempre  === en vez de == – pero obj == null está permitido para    verificar null || undefined.
* Gestionar siempre el parámetro de función err de node.js
* Usar siempre el prefijo window en los globales del navegador – A         excepción de document y navigator esto está bien
* Previene el uso accidental de mal-llamados globales del navegador como   open, length, event, y name.