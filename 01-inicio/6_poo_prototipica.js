;//Patron de diseño de las Arrow Functions //Evitas el scope global y manetiene el scope en pedazo de codigo

/**Anidación de objetos */
((c)=>{
  c('**********Anidación de Objetos************')
  //Objeto literal n.n recuerdalo
  const curso = {
      titulo: 'Curso JS Avanzado: Paradigmas de Programación',
      docente: {
        nombre: 'Jonathan MirCha',
        edad: 33,
        nacionalidad: 'Mexicana',
        contacto:{ 
            email: 'jonamircha@gmail.com',
            url: 'http://jonmircha.com',
            twitter: '@jonmircha',
            ubicación: 'CDMX'
        }
      },
      costo: 40,
      url: 'http:ed.team/cursos/javascript-avanzado',
      online: true,
      plataforma: {
          nombre: 'app.ed.team',
          url: 'https://app.ed.team',
          oficinas: [ 'Lima', 'Bogotá', 'Namekusei' ]
      }
  }

  //Notación de punto
  c( curso.docente.nombre)
  //Notación Array
  c( curso['plataforma']['nombre']) //Multidimensional
  //Notación Mixta
  c( curso['docente'].contacto['url'] )
 
  c( curso.plataforma['url'] )
  c( curso.plataforma['oficinas'][2] )
})(console.log);

/**POO con Closures */
((c)=>{
    c('********POO con Closures*********') 
    function Carrito (articulo){
        //Recurso privado (buena practica _)
        let _articulo = articulo,
        //Objeto literal n.n 
            _carrito = {}

        function agregar (articulo, cantidad){
            _carrito[articulo] = cantidad
        }

        function quitar (articulo) {
            //Metodo delete de los objetos
            delete _carrito[articulo]
        }

        function ver () {
            return _carrito
        }

        return{
            //En algo que voy a exponer como agregrar, quitar y ver
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    //No puedo aplicar new ya que es una función constructora
    const comics = Carrito('Comics')
    c(comics)
    comics.agregar('Flash Pint Paradox', 2)
    comics.agregar('The Return of the Dark Knigth', 3)
    comics.agregar('Civil War', 3)
    comics.agregar('Final Crisis',1)
    c( comics.ver() )
})(console.log);

//POO con funciones constructoras, this es contexto función constructora
((c) => {
  c('**********POO con Funciones Constructoras*********')
  function Carrito (articulo){
      this._articulo = articulo
      this._carrito = {}
  
      this.agregar = (articulo, cantidad) => this._carrito[articulo] = cantidad

      this.quitar = articulo => delete  this._carrito[articulo]
      
      this._iterable = () => {
        let message  = 'Carrito: \n'
        for (let key in this._carrito)
          message += `\t${this._carrito[key]} ${key} \n`
            
          return message
      }

      this.ver = (articulo = 'todos') => {
        return ( articulo === 'todos')
        ? this._iterable()
        : ( _carrito.hasOwnerProperty(articulo) )
          ? `${_carrito[articulo]} ${articulo}`
          : `El articulo ${articulo} no existe en el Carrito`
      }
  }

  //Una función constructora necesitamos de ley el operador new

  const comics = new Carrito('Comics')
  c(comics)
  comics.agregar('Flash Pint Paradox', 2)
  comics.agregar('The Return of the Dark Knigth', 3)
  comics.agregar('Civil War', 3)
  comics.agregar('Final Crisis',1)
  c( comics.ver() )

  /**Facotoria o frabrica */
  const libros = new Carrito('Libros')
    musica = new Carrito("Música")
    juegos = new Carrito("Juegos")

  //Esto supone que los métodos agregar, quitar, ver, e_iterabñe están siendo replicados en memoria, lo que es ineficiente. Ya que genera duplicado de metodos

  c(
    libros, '\n',
    musica, '\n',
    juegos, '\n',
  )
})(console.log);

/**POO con Prototype */
((c)=>{
  c('********POO con Prototype********')
  //Atributos
  function Carrito (articulo) {
    this._articulo =  articulo
    this._carrito = {}
  }

  //Le pegamos todos los metodos con prototype
  Carrito.prototype = {
    agregar(articulo, cantidad){
      this._carrito[articulo] = cantidad
    },
    quitar(articulo){
      delete this._carrito[articulo]
    },
    _iterable(){
      let message = 'Carrito:\n'
      for ( let key in this._carrito )

      return message
    },
    ver(articulo = 'todos'){
      return ( articulo === 'todos')
      ? this._iterable()
      : ( this._carrito.hasOwnerProperty(articulo) )
        ? `${this._carrito[articulo]} ${articulo}`
        : `Èl articulo ${articulo} no existe en el Carrito`
    }
  }

   /**Facotoria o frabrica */
   const libros = new Carrito('Libros')
   musica = new Carrito("Música")
   juegos = new Carrito("Juegos")

 c(
   libros, '\n',
   musica, '\n',
   juegos, '\n',
 )

})(console.log)

/**POO con Prototype Herencia */
((c)=>{
  c('******Herencia Prototipica*******')

  function Telefono(){
    this.puedoLlamar = true
  }

  Telefono.prototype = {
    llamar(){
      c('Riiiiing Riiiing')
    }
  }

  function Celular(){
    this.tengoCables = false
  }
})(console.log)