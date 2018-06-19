;
/**IMPLICITO THIS */
((c)=> {
    /**1, Asiganción implicita:
     * Caso1
     *  this está siendo invocado dentro de un método
     *  this hace referencia al objeto, que contiene el método donde se invoca
     */
    c('****************Asígnación de this Implicitamente******************')

    let yo = {
        nombre : 'Carlos Alberto Vera Villegas',
        edad: 21,
        saludar(){
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }
    yo.saludar()

    /**2, Asiganción implicita
     * Caso 2
     * existe una función que recibe un objeto como parámetro, dentro de ella se le asigna un método al objeto.
     * this en este caso hace referencia al objeto que se le añade al método
     */

     let preparandoSaludo = function(obj){
         obj.saludar = function(){
             c(`Hola mi nombre es ${this.nombre}`)
         }
     }

     const jon = {
         nombre: 'Jonathan',
         edad: 33,
     }, alvaro = {
         nombre: 'Álvaro',
         edad: 37
     }

     preparandoSaludo(jon)
     preparandoSaludo(alvaro)

     jon.saludar()
     alvaro.saludar()

     /**Caso 3 implícito
      * Una función que retorna un objeto, que contiene un método que invoca this  (una Clousure)
      */

     let Humano = function (nombre, edad, perro){
        return{
            nombre: nombre,
            edad: edad,
            saludar(){
                c(`Hola mi nombre es ${this.nombre}`)
            },
            perro: { //Nuevo scope
                nombre: perro,
                saludar(){
                    c(`${this.nombre} guauuuu guauuu`)
                }
            }
        }
     }

     //Esto no es una función constructora pero es parecido al polimorfismo c:
     const mircha = Humano('Jonathan', 33, 'KEnAi')
     mircha.saludar()
     mircha.perro.saludar()

     /**Conclusió:
      * This es invodado dentro de un método, implícitamente este hace referencia al objeto que contiene el método
      * sin importar si el método es añadido luego de haber sido creado el objeto, o si es una función que retorna un objeto.
      */
      
})(console.log);

/**EXPLICITO */
((c)=>{
    /**2. Asignación explícita
     * Desde ES5 cuando deseamos explícitamente referenciar this contamos con 3 
     * métodos call, apply y bind
     */
    c('************ Asíganación de this Explícita************')

    const nombrar = function(f1, f2, f3) {
        c(`${this.nombre} es el lenguaje de Front end de la Web y tiene librerías y frameworks muy poderosos como: ${f1}, ${f2}, ${f3}`)
    }

    const lenguaje = {
        nombre: 'JavaScript',
        versión: 6
    }

    let frameworks = ['Angular','React','Vue.js']

    //Call recibe un conjunto de argumento separado por comas
    //A quien voy a llamar como contexto de this a lenguaje
    nombrar.call(lenguaje, frameworks[0],frameworks[1],frameworks[2])
    //Recibe un Arrego completo
    nombrar.apply(lenguaje, frameworks)
    //Bind
    let frameworksJS = nombrar.bind(lenguaje, frameworks[0],frameworks[1],frameworks[2])
    frameworksJS()

})(console.log);

/*NEW**/
((c)=>{
    c('************Asignación con New************')
    let Framework = function(nombre, url, lenguaje){
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }

    const react = new Framework('Recat','https://facebook.io/react/','JavaScript'),
        //Con el metodo create de los objetos, lo unico que se tiene que poner es cual es ese prototipo que se tiene que basar
        vue = Object.create(Framework)
        //asiganr explicitamente
        vue.nombre = 'Vue.js'
        c(react,vue)

})(console.log);

/**GOBLAL */
((c)=>{
     //4. Asiganción Global
     c('*********Asignación Global***********')
     const dimeUnFramework = function() {
         c(this.nombre)
     }
 
     dimeUnFramework()
 
     //Variable global (Es mala practica no poner tipo)
     //nombre = 'Angualar'
     //Toda variable y función que creamos sin ningun scope en js cuelgan de window
     window.nombre = 'Angular'
     //window.nombre = 'Angualar
     dimeUnFramework()
})(console.log);

/**Arro Function */
((c)=>{
    c('***********Arrow Functions y el problema de this***************')

    const lenguaje = {
        name: 'JavaScript',
        versión: 6,
        frameworks: [
            { name: 'Angular', url: 'https://angualar.io'},
            { name: 'React', url: 'https://facebook.github.io/react/'},
            { name: 'Vue.js', url: 'https://vuejs.org/'}
        ],
        nombrar: function() {
            //El problema de this en JavaScript, no alcance al scpoe de la función
            // this.frameworks.forEach(function (fw){
            //     c(`${fw.name} es un framework de ${this.name}`)
            // })
            //Solución en ES3 (1999)
            // let that = this
            // this.frameworks.forEach(function (fw) {
            //     c(`${fw.name} es un framework de ${that.name}`)
            // })
            //Solución de ES5 (explicita)
            // this.frameworks.forEach(function (fw) {
            //     c(`${fw.name} es un framework de ${this.name}`)
            // }.bind(this))//A la función se le aplica el bind y le paso el this
            //Solución de ES6 y más expresiva (en el constexto en elq ue fue definida)
            this.frameworks.forEach( fw => c(`${fw.name} es un framework de ${this.name}`))
        }
    }
    lenguaje.nombrar()
})(console.log);