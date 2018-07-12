# Programación reactiva

Es un paradigma de programación orientado a flujo de datos **ASINCRONOS** y la propagación de cambios.

Frameworks reactivos:

* Angular
* React
* Vue

Nace como modelo de nuevo sistema flexible y elastico.

Es un modelo de programación que pretende dar respuesta a la demanda creciente de nuevos sistemas más flexibles, elásticos y tolerantes a fallos a partir de los principios de la programación funcional.

Ésto resulta muy ventajoso porque produce desarrollos más declarativos y explícitos centrados en las transformaciones que deben sufrir los datos para su procesamiento.

La web, como plataforma de interacción, es un sistema reacttivo. Ya que es una interación.

El DOM representa en memoria el documento de la página que visualiza el navegaor y es un modelo de datos sujeto a cambios sobre el que pueden registrarse funciones escuchadoras para cada uno de los eventos que lanza el navegador.

## La web como modelo Reacttivo

La programación basada en escuchadores es el más básico de los modelos de la Web y es Reactivo.

Si vemos este comportamiento es conocido como el: 

**Patron Observador**

El paradigma de escuchadores de eventos en JavaScript es la manifestación de patrón de diseño Observador o Pub/Sub

Pub: Objeto que publica (influencer) <br>
Sub: Objeto que subscribe (como fans que están pendientes de lo que publica el influencer)

Este patrón es la piedra angular de la programación orientada a eventos, incluyendo JavaScript

Facilita el buen diseño funcional y orientado a objetos.

**Importante**

PF es oop, funcional, y flujo de datos asincronos de la web

El evento es el Publicador y el sub es la función que ejecuta el evento
<hr>


## Arquitecturas Web Reactivas

Son sistemas que operan en reacción a los eventos ocurridos sobr el modelo de datos del DOM

Es un paradigma enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona.

Cada evento atraviesa una cadena de transformación funcional para su procesamiento.

Si lo activamos a un nav sus hijos lo pueden capturar el eventos. JS es orientado a eventos.

Como evolución del modelo de construcción basado en programación de escuchadores, emergieron una serie de arquitecturas que se recogen bajo el acrónimo **MV** por sus similitudes entre sí

Todas ellas comparten la premisia de que están centradas en un modelo interno cuyos cambios son atendidos por la vista a través de cierta lógica de control.

* Modelo vista controlador (MVC)

El controlador manipula la vista en respuesta a las interacciones del usuario y el modelo actualiza la vista

* Modelo vista adaptador (MVA)

El modelo no se comunica con la vista. Es el adaptador el encargado de programar los cambios en ambas partes.

* Modelo vista controlador jerárquico (HMVC)

Los modelos MVC sese distribuyen entre el aplicativo por cada componente que se organiza agregativamente

* Modelo vista presentador (MVP)

COmo extensión del MVA

* Modelo vista vista modelo (MVVM)

La vista y el modelo de vista permanece sincronizado a través de una arquitectura de observadores y mutadores. Genera un data binding para interacción de interfaces.


### Librerías y Frameworks Reactivos

* Elm 

      Elm es un funcional y reactivo lenguaje que compila a JavaScript (Es tipo metalenguaje)

* ReactiveX + RxJS

      Una API asincrona programada con stream observable. Puede ser implementada en el lenguaje que uno quiera.
      La implementación con js se llama RxJSn y este es una libreria que usa el patron observable c:

* Reactive.js

      Es como una libreria ui tipo versión 1 de vue o angular.
      Genera mucho codigo en el html pero es muy similar a vue, 

<hr>

CDN para descargar librerias n.n // 

Red de distribución de contenidos.

https://cdnjs.com/