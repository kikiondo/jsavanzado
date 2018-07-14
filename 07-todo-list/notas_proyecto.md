# Introducción

Se va a realizar con la filosofia de modulos ._.)7 

Para que cualquier etiqueta html se vuelva editable existe un nuevo atributo llamado content

Para checar la ortografia es con spellcheck

neestin de propiedades en sass

Lo más recomendado es que los elementos del DOM los guarde en constantes y las exporte sin problema ._.)/

**destructuración** para exportar las constantes

<hr>

## LocalStorage

Tiene dos metodos, uno para ver el key que es con **getItem** y otro para establecer un nuevo valor en sus parametros **setTitem** que necesita la key y el valor que le vamos a poner.

El localStorage representa todo como cadena de texto

En HTML5 nos permite crear nuestros propios atributos siempre y cuando inicien con la palabra **data**

## DOM

list.insertAdjacentHTML() para insertar, mejor que appendChild

parentElement es para el papá del elemento

Existen los eventos:

* blur => el focus de la etiqueta
* keyup

e.target.textContent = es el contenido de la etiqueta

**nota importante** Los elemento que agarramos de un querySelectoAll o cualquier selector similar no son arrys, solo son nodos de lista. elementos html, etc. Parecen arreglos pero no lo son. html colections

Lo mejor es hacer un casting con **Array.from()** que es para heredar las caracteristicas que tiene un arreglo

<hr>

## JS

Existe un metodo que se llama **findIndex** que de un arreglo encuentra el indice de la tarea que cumpla con una validación

  A diferencia de filter, filter trae todo el objeto pero findIndex solo nos trae el indice, un numero dentro del arreglo ._.)/

Los arreglos tienen un metodo igual que los trings que se llama **splice()** para eliminar. Necesita un numero donde diga a partir de donde eliminara y despues especificar hasta donde va a eliminar

      task.splice(toRemove, 1)