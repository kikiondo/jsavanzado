;
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

((c)=>{
    /**2. Asignación explícita
     * Desde ES5 cuando deseamos explícitamente referenciar this
     */
})(console.log)