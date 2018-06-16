# Notas

### Programación prototipica

Las clases las **simulamos** con funciones constructoras utilizando prototipos.


    Paradigama de funciones autoejecutables

### Buenas practicas

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

### Orientado a objetos

* Objetos literales
* Prototipos
* Funciones Constructoras
* Clases

### Functions as First-Class Objects

Las funciones en JavaScript son objetos de primera clase. Esto significa que las funciones son simplemente un tipo de objeto especial,
con las cuales se pueden hacer las mismas cosas que cualquier otro objeto podria hacer.

### Loose Typing

No es necesario especificar el tipo de dato de una variable al ser declarada, cuando se le asigna un valor, JavaScript detecta el tipo de dato
automáticamente.

### Scoping

Con ES5 teniamos alcance global y funcional

Despues de ES6 tenemos alcance global, funcional y de bloque.

### Hoisting 

En ejecución, todas las declaraciones **var** y **function** son movidas al comienzo de cada función

Es buena práctica declara todas las variables juntas en la primera línea, con el fín de evitar falsas expectativas.

Desde ES6 con **let** podemos tener variables de bloque y evitar la elevación, por ello ya no deberías usar var.

### Strict Mode

El modo estricto en ES5 es una manera de optar por una forma restringida de JavaScript. El código en modo estricto y en modo no estrícto puede coexistir.

                             Ya no es necesario desde ES6

### Clousure Functions (funciones de clausura) -> Privacidad

Son un patron de diseño muy utilizado en JavaScript que nos permite mantener privacidad en atributos y métodos. Encapsulan variables y funciones que únicamente serán accesibles si son devueltas con el operador **return**


### Immediately-Invoked Functions (son closure)

Es un patrón de diseño que produce un scope léxico (ambiente privado).
Usadas para evitar hoisting, protege el código del ambiente global y simultáneamente permite acceder a los métodos publicos al tiempo que conserva la privacidad en las variables definidas dentro.

## Información de tipos de datos

Todas las variablesadmiten todos los tipos, y pueden ser reescritas. Es una de las cosas buenas y malas que tiene JavaScript

### Tipos de datos

**Primitivos**

    Se accede directamente al valor
    * string
    * number
    * boolean
    * null
    * undefined

**Complejos**

    Se accede a la referencia del valor (un tablero de ajedrez, el caballo estaria en f5 esa es su referencia)
    Se accede a la referencia y no al valor 

    * object={}
    * array=[]
    * function (){}
    * Instancia de clase

## Programación orientada a objetos ** 

Paradigma de programación.

La **POO** trata de plasmar o representar la realidad del mundo físico (lo concreto) y llevarlo al mundo digital (lo abstracto)

### Conceptos Básicos de POO

* Clase
* Objeto
* Método
* Atributo

    Vivimos en el mundo de las ideas, y los objetos son meras representaciones físicas de esas ideas

#### Clase

    * Es un MODELO a seguir
    * Sintaxis: Class Perro {...}

#### Objeto

    Intancia es un objeto que pertenece a un tipo de clase (poo)
    * Representación o Instancia de una clase
    * La representación física de la idea de Platón
    * Sintaxis kenai = new Perro()

#### Métodos

    Son las cosas o Acciones que hacen los objetos
    Sintaxis: objeto.metodo()
    correr, caminar, mover la cola, ladrar (verbos/acciones)
    kenai.comer('croqueta')
    kenai.ladrar()

    Los Métodos fuera de los objetos se llaman Funciones
    function ladrar() { ... }
    Los Parámetros son argumentos (datos) que se pueden pasar (o no) a una función. Pueden ser opcionales, y se separan por comas
    function comer(comida) { ... }

#### Atributo

    Caracterisitca o propiedades que definen a mi objeto.
    Sintaxis: objeto.atributo = valor

    Los atributos fuera de los objetos se le conoce como variables

## Características de la POO

**Abstracción**

Aislación de un elemento de su contexto. Define las caracterisitcas esenciales de un objeto

**Encapsulamiento**

Reúne al mismo nivel de abtracción, a todos los elemento pertenecientes a una misma entidad. <br>
Lo tenemos con el concepto de modulos, lo podemos importar y exportar


**Modularidad**

Permite dividir una aplicación en varias partes más pequeñas, independientes unas de otras.

**Ocultación**

Los objetos están aislados del exterior, protegiendo a sus propiedades para no ser modificadas por aquellos que no tengan derecho a acceder a las mismas.

**Polimorfismo**

Capacidad que da a diferentes objetos, la disponibilidad de contar con métodos y atributos de igual nombre, sin que los de un objeto interfieran con los del otro.

**Herencia**

Es la relación existe entre dos o más clases, donde una es la principal (madre) y otras son secundarias y dependen (heredan) de ellas (clases hijas), donde
a la vez los objetos heredan las caracterisitcas de los objetos de los cuales dependen.