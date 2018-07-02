# Mixin en POO

Son como funciones auxiliares que nos ayudan a hacer alguna tarea en particular.

Clase que ofrece cierta funcionalidad para ser herdada por otras clases hijas, pero que no necesita ser autonoma -> **No necesita crear objetos de este tipo de clase**

En los lenguajes POO, un mixin es una clase que ofrece cierta funcionalidad para ser heredada por una subclase, pero no está ideada para ser autómata.

Es una especia de clase Abstracta

Los conceptos de superclase y subclase no existen como tipos de objetos concretos

Una subclase es la clase que hereda (extiende) de otra (clase hija) <br>
Una superclase es la clase a partir de la cual hereda (extiende) otras (clase madre)

En javaScript, las clases pueden ser utilizadas como expresiones.

Gracias a esto, es posible crear una nueva clase cada vez que dicha expresión es evaluada.

La cláusula extends permite actuar sobre expresiones, lo cual habilita que una clase extienda de otra creada en tiempo de ejecuación.

* Declaración

La clase original va a heredar de esta super clase

    const nombre = Superclass => class extends 
    const Operadora =  Superclass => class extends Superclass{
    }

    class Celular extends asignarOperadora (Red (Telefono) ){

Internamente van a tener metodos que las clases bana  poder **usar**.

Como se puede usar, se debe usar antes que herede las caracterista de una super clase.

    class Celular extends mixin_name (clase){


## helpers

  Funciones auxiliares