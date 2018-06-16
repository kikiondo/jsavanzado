// Cuando importas archivos js desde el html, es buena practica modularizar el codigo c:!!!! (patron funciones autoInvocadas)
// Cuando trabajas en un flujo basado en modulos ya no es tan necesario

;
((c,d) => {
    //  FORMAS DE CREAR UN OBJETO

    //1, Objeto Literal
    c('*********Objeto Literal**********')
    //Implicito
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
            c(`${this.nombre} come ${comida}`) 
        },
        aparecer(imagen){
            d.write(`<img src="${imagen}">`)
        }
    }
    c(
      perro,
      perro.nombre,
      perro.edad,
      perro.raza,
      perro.genero,
      perro.esterilizado
    )
   
    perro.ladrar()
    perro.comer()
    perro.comer('tacos')
   
    
    /**2 Prototipo Object */
    c('********Prototipo Objetc**********')
    //Explicito
    const gato = new Object()
    gato.nombre = 'Marceline'
    gato.edad = 6
    gato.raza = 'ni idea'
    gato.genero = 'Hembra'
    gato.esterilizado = false
    gato.maullar = ()=> c('miau miau')
    // gato.comer = (comida = 'croqueta') => c(`${this.nombre} come ${comida}`)  //Su contexto es window
    // gato.comer = (comida = 'croqueta') => c(`${gato.nombre} come ${comida}`)
    gato.comer = function(comida = 'croqueta'){c(`${this.nombre} come ${comida}`)}
    gato.aparecer = imagen => d.write(`<img src="${imagen}"`)

    c(
        gato,
        gato.nombre,
        gato.edad,
        gato.raza,
        gato.genero,
        gato.esterilizado
      )
    gato.maullar()
    gato.comer()

    /**3 Función Constructora*/
    c('********Función Constructora**********') //Es mi modelo a seguir
    function Perro(nombre, edad, raza, genero, esterilizado){
        //Atributos
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
        this.genero = genero
        this.esterilizado = esterilizado
        //métodos
        this.ladrar = () => c('guau guau')
        this.comer = (comida = 'croqueta') => c(`${this.nombre} come ${comida}`)//el this es la función perro
        this.aparecer = (imagen) => d.write('<img src="#">') 
    }

        const perro2 = new Perro('Banana', 10, 'ni idea', 'Macho', false),
          perro3 = new Perro('firu', 5,'ni idea','Macho',true)
        
        c(perro2)
        c(perro3)


    /**4 Clases a partir de ES6*/
    c('********Clases a partir de ES6**********')

    class Dog {
        constructor(nombre, edad, raza, genero, esterilizado){
            this.nombre = nombre
            this.edad = edad
            this.raza = raza 
            this.genero = genero
            this.esterilizado = esterilizado
        }

        ladrar(){
          c('guau guau')
        }

        aparecer(comida = 'croqueta'){
          c(`${this.nombre} come ${comida}`)  
        }
    }

    const perro4 = new Dog('banana',10,'ni idea','Masculino', false)
    c(perro4)


})(console.log, document)

//Ahora están las funciones constructoras que nos evitan crear objetos iguales c: