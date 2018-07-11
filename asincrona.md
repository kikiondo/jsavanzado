# Asincronia

En un mismo hilo ejecutar tareas y correr en segundo plano la ejecución. 

Establece la capacidad que tiene las operaciones del flujo de un programa para devolver el control de la ejecución al mismo (programa) antes de que hayan terminado sus procesos, mientras siguen operando en segundo plano (procesos u operaciones no bloqueantes)

Tareas en segundo plano ._.)/, permite agilizar los procesos de ejecución.


**programación concurrente**: No es programación asincrona,  son procesos ejecutados en paralelo que compiten por el acceso a un recurso compartido.

**Programación Paralela**: Cada tarea en un hilo independiente.

## Constrol de flujo asíncrono

* Callbacks

Elemento más basico de programación asincrona que tenemos. Metodo que se pasa como argumento a otra función.

Son usadas cuando hay acciones de I/O, cargas, lecturas de archivos, comunicación con la base de datos, etc. No devuelven algo de inmediato, 

    downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

    function handlePhoto (error, photo) {
      if (error) console.error('Download error!', error)
      else console.log('Download finished', photo)
    }

    console.log('Download started')

En el codigo la función handlePhoto se va a disparar cuando se termine de cargar la foto.

Primero handlePhotose declara la función, luego downloadPhotose invoca la función y se pasa el handlePhotocomo su callback, y finalmente 'Download started'se imprime.

La handlePhotodevolución de llamada es solo una forma de almacenar algunas cosas para hacer en un momento posterior

El orden en que suceden las cosas no se lee de arriba a abajo, salta según cuándo se completan las cosas

<hr>

* Promesas

Es otra manera de controlar el flujo asincrono c:. Podemos gestionar los errores sin problema y más facil que una promesa.

Necesita de dos parametros, el **resolve** que es cuando la promesa se resuelve y el **reject** que es cuando se rechaza.

Si quieres seguir con el flujo de la promesa, debes de poner un return.

<hr>

* Generadores

Los generadores son un tipo especial de función que devuelve un valor y permite luego volver a entrar en la función en el mismo lugar en que se quedó, al tiempo que conserva el contexto de ejecución.

Son funciones que pueden ser pausadas y resumidas como llamamos a la función generador, no ejecuta el cuerpo de la función, sino que devuelve un objeto generador. El generador implementa una interfaz (clase abstracta) que le proporciona un método **next()**, que ejecutará el cuerpo de la función hasta encontrar un **yield**. En este punto se detendrá.

El secreto del generador radica justamente en la palabra clave **yield**, que es un tipo especial de return que, en lugar de devolver un solo valor y salirse de la función, entrará nuevamente y continuará ejecutándola hasta que se acabe o encuentre otra cláusuala **yield**

Para que una función se considere generador, debe de declararse anteponiendo un asterísco function*

Para obtener los resultado del generador lo hacemo con el método **next()** que devuelve un objeto del tipo 

    {
      value: el valor retornado por yield
      done: indica si ha finalizado o no la ejecución del cuerpo de la función.
    }

Regresa true, hasta que todos los yield se ejecuten.

Funciona sin babel n.n)/ !! y se le pueden meter promesas.

<hr>

* Funciones Asincronas (async y await)

Son muy comodas, la escritura es muy entendible, tal vez más que las promesas. Pero ya no es ES6 sino es ES7 -> chrome ya lo soporta.

El await es la manera de hacer esperar una función asincrona.

Para declarar una dunción asincrona es con la palabra **async** antes de function

Muy buenas con el trabajo asincrono de datos

<hr>

* AJAX

El objeto ajax que es **XMLHttpRequest** interactua con el JSON y XML.

**Ejecuta en ambiente de servidor**

Se genera capa itermeida que es el Ajax engine que se encarga de estar mandando las peticiones al servidor y que cuando responda el servidor, actualizar solo la parte del front que se tenga que actualizar.

No se tiene que recargar la pagina al recibir nuevos datos.

5 momentos que tiene ajax.

* 0 UNSET (No se ha llamado al método open)
* 1 OPENED (Se ha llamado al método open)
* 2 HEADERS_RECEIVED (Se ha llamado al método send)
* 3 LOADING (Se está recibiendo la respuesta)
* 4 DONE (Se ha completado la operación)

Codigos de estado

* 100 Respuesta informativa
* 200 peticiones correctas
* 300 redirecciones
* 400 Errores cliente
* 500 Errores de servidor

El estado de ajax devuelve estas peticiones.

* JSON

Formato ligero de intercabio de datos.

Está basado en generación de objetos en js.

Es independiente del lenguaje, todos los lenguajes tienen implementado json sin problema. Está basado en propiedades y valores.

Al enviar datos a un servidor web, los datos deben ser una cadena.

**Caracteristicas**

* Es una alternativa más fácil de usar a XML
* Se utilizan doble comilla

JS tiene dos metodos:

**JSON.stringify()**: Convierte un valor a cadena de notación JSON. Convierte todo objeto a cadena de texto
**JSON.parse()**: Analiza una cadena de texto como JSON.

### Metodos de ajax

**open** Es para abrir la petición.
**addEventListener** Es un evento
**setRequestHeader** Es para modificar las cabezeras (opcional)
**send** Es para enviar la peticioón

* open -> Se necesita saber si es por GET o POST || URL || true(para asincrono)

* eventos -> *readystatechange* cuando hay cambios (se guarda la petición) || funcion a ejecutar

### Eventos

* readystatechange
* load