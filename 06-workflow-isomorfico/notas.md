# Información

Para que compile es6 a es5 utilizamos un archivo de babel -> .babelrc donde le indicamos el preset y pluguins que utilizamos.

Para poder utilizar necesitamos instalar depencecias de babel, las cuales se especifican en la documentación o pagina oficial.

## Carpeta

app: es donde va a estar todo mi codigo del back-end

<hr>

(nota, es bueno instalarlo global primero)
Si yo quiero que soporte todas las caracteristicas del estandar no debe de usar node <file> sino que tengo que usar el script configurado con la cli de babel que sería **bebel-node**.

      babel-node <file>

La compilación de sass se va a ser directamente en el servidor de express mediante un middleware

Cuando node hace una petición al html, trata de buscar el favicon y para eso utilizamos serve-favicon que nos ayuda a que la busqueda sea más eficiente.


El middlware de sass se debe de ejecutar antes del express.static

Como middlware es obligatorio si usamos express utilizar express.static()

**Importante**

Para el live reload es necesario instalar ack-reload !!!!!!
Es como el browser-sync pero de express c:

Necesito configurarlo en server y tambien tengo que tener un script en el html de public que va a ser el live reload pero ya que lo tengamos en producción lo tenemos que quitar o comentar y tambien en el serve el middleware

Para más archivos || -e extenciones || tiene opcion de ejecutar --exec diferente (python etc)
      
      "serve": "nodemon --watch src --watch src -e pug,scss,js,json"


Para poder soportar los **imports** del lado del navegador, utilizaremos browserify para lograr lo que hicimos en el back-end
solo que no tiene la capacidad de detectar cambios, por lo tanto utilizaremos wachify que es uno de sus pluguins.

Aparte para que browserify pudar entender todo es6 necesitamos babelify

**browserify** Necesito decirle donde inicia la importación de archivos.
      
        browserify ./ruta_de_archivos 
-d -> mandar
-o -> compilado a carpeta origen

Especificar el pluguin de transformación que seria babelify
-t [babelify --presets [env]] 

En node se puden ejecutar diversos script con:

    |  para asincrono
    &  para sincrono

<hr>

## Minificar el codigo

**uglify**: Solo necesitas  porner uglifyjs archivo_origine -c <--para minifica--> -o <--dir de salida-->

**autoprefixer**: Es un pluguin de postcss y en este caso se utiliza -u <--para pluguin--> utilizamos una expresión regular para opciones y -r <--para comprimir-->

      postcss -u autoprefixer --autoprefixer.browsers \">5%, ie10\" -r ./public/style.css

**archivo build**: Es un script para poner todo a producción. 