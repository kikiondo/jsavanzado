
# Anotaciones

* Cuando importas archivos js desde el navegador, es buena practica modularizar el codigo c:!!!! (patron funciones autoInvocadas)

* Cuando trabajas en un flujo basado en modulos ya no es tan necesario

## Prototipos <hr>

En si ya no tenemos que usar los prototipos ya que js nos da las clases

Ya se pueden definir metodos como si estuvieran dentro de una clase (este es un objeto literal)

    const perro = {
        nombre: 'peke',
        edad: 7,
        raza: 'ni idea',
        genero: 'Macho',
        esterilizado: true,
        ladrar() {
            c('Wuau Wuau')
        },
        comer(comida = 'croqueta'){
            c(`comiendo ${comida}`)
        }
    }

Ahora están las funciones constructoras que noes evitan crear objetos iguales c:

**Funcion constructora**

* Se llama así porque ese metodo especial que tienen las clases llamado constructor lo tiene implicitamente en el nombre. El      constructor es un método especial que se ejecuta en el momento de instanciar la clase 

    El this pasa el contexto de la función.

* En la clase utiliza su metodo especial constructor c:

## This

* Asignación implicita
* Asignación explicita
* Asiganción con new
* Asignación global
* Las Arrow Functions

**Implicito**
    
    Que está siendo invocado dentro de un método
    Hace referencia al objeto, que contiene el método donde se invoca


funciones para hacer referencia

**call**: Permite definir a que va a hacer referencia this, en su primer parámetro, los parámetros siguientes son los que recibe la función.

**apply**: Permite referencair this ene l primer parámetro, pero este nos permite pasar un array, como los parámetros de la función.

**bind**: Devuelve una función, en dónde this, hace referencia al objeto que pasamos en su parámetro

**new**: Hace referencia al constructor o prototipo que se ha instanciado

**global**: Uno de los grandes errores con this, es que cuando no se tiene una referencia al objeto, que representa this, este hace referencia al objeto global:

* window: En los navegadores
* global: En Node.js

**Arrow function**: Tiene la capacidad de pasar el contexto en el que fue definido, ya no hay necesidad de bind, applay, that etc
## ES6 <hr>

Template string ``

ES6 puede asignar valores por defecto c:!!!!

## JavaScript <hr>

Es un lenguaje orientado a prototipos, es por eso que siempre que imprimimos un objeto en consola sale proto: y depende de la clase objet de js

Otra manera de expresar un objeto literal es a travez del prototipo objet, la clase object de js (prototipo)<br>
Si tengo duda de **this** puedo mandarlo a imprimir en el contexto para ver a quien le está haciendo referencia

Un problema con las dos primeras formas de hacer los objetos literales es que no se pueden reutilizar es por eso que tenemos que crear una function constructora. 


## Funciones flecha <hr>

Permiten pasar el contexto en el que ha sido definida esa arrow function.

## Función anonima <hr>

Guarda su propio escope