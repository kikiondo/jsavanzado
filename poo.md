# Programación Protottípica en JS

## Programación prototipica

Es un primer ejemplar que se fabrica de una figura, es como un molde que nos ayuda a la generación en masa de objetos.

Si el prototipo tiene ciertas caracteristicas o metodoso, todos los objetos que creemos de ese prototipo heredaran sus caracteristicas.

**Definición**: Es un estilo de POO en la que las clases no están presentes y la reutilización de procesos de decoración de objetos existentes que sirven de prototipos.

**Anidación de OBjetos**: Un objeto es una colección de variables y funciones agrupadas de manera estructural

    A las variables definidas dentro de un objeto  se les denomina atributos
    A las funciones definidas dentro de un objeto se las denomina métodos

Entonces un objeto puede tener propiedades y estas propiedades tener en su interior más propiedades que incluso sean objetos. (Esto es la anidación)

Esto se representa en forma de árbol y podemos acceder a sus propiedades con:

1) Notación de punto
2) Notación de array (no es muy frecuente verlo pero es valida)
3) Notación mixta

**POO con Closures**: Función que encapsula a otras y dependiendo lo que mandemos en el return es lo que va a estar expuesto (primer metodo de privacidad)

**POO con Funciones Constructoras**: A diferencia de las closures una función constructora empieza a utilizar los metodo. Ya no tienen la nececidad del **return** y pueden heredar de otras constructoras.

Las Funciones Constructoras pueden heredar directamente de otros constructores gracuas al Prototype.


**Factory Pattern**: Muy utilizado patron de diseño basado en factorias o fábricas (angular1 lo utilizaba). Esta forma de codificar las funciones o clases se conoce como Factory Pattern o Template funcions

Un problema importante que tiene este tipo de estructura, es que cuando creamos un nuevo objeto a partir de estas funciones, se reservará espacio en memoria para todas las funciones.

Con un objeto creado no supone mucha desventaja, pero varios objetos si.

Para evitar el uso mal de la memoria se utiliza el objeto prototipe. Es la respuesta.

**POO con Prototype**: Permite que objetos de la misma clase compartan métodos y no sean replicados en memoria de manera ineficiente

**POO Herencia Prototípica**: Primero se definen sus parametros en una función y fuera asignamos sus metodos con prototype. Se puede por medio de un objeto literal o como si fuera una intancia de Object **explicito** con .funcion = () ... 

De esta manera creando nuevos objetos, su espacio en memoria es menor y ya no hay replicacioón de métodos, internamente será más eficiente en el uso de la memoria por parte de JavaScript y obtendremos un mejor rendimiento en la apliación.


**POO con Clases**: Las clases internas son prototipos, es pura azucar sintáctico (es un concepto informatico). 

Con la llegada de ES6 la definicioón de una función constructora ha cambiado y nos ofrece la posibilidad de crear clases. ES6 aporta un *azúcar sintáctico* para declarar una clase como en la mayoria de los lenguajes POO, pero por debajo sigue siendo una función prototipal.

El método especial constructor recibe los parametros que anteriormente recibía la función constructora.<br>
Las clases ES6 sustituyen a las funciones prototipales de ES5.

Las declaraciones de clases no siguen las reglas de hoisting como sí lo hacen las declaraciones de funciones, esto quiere decir que solo existen tras ser declaradas.

De forma implícita un clase se comporta como una constante, no siendo posible redeclarla más adelante en un mismo ámbito o scope

Los métodos no se declaran de forma explícita con var, let, const

Al tratarse de un constructor y no una función, no hay una salida de datos explícita con return.

Encontramos nuevas palabras reservadas: constructor, super, get, set y static

<hr>
Las funciones son un paradigma prototipal