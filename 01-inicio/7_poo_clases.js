;

((c) => {
  c('*********POO con Clases**********')

  class Carrito {
    constructor(articulo){
      this._articulo = articulo
      this._carrito = {}
    }

    agregar(articulo, cantidad){
      this._carrito[articulo] = cantidad
    }

    quitar(articulo){
      delete this._carrito[articulo]
    }

    _iterable(){
      let message = 'Carrito:\n'
      for ( let key in this._carrito )

      return message
    }

    ver(articulo = 'todos'){
      return ( articulo === 'todos')
      ? this._iterable()
      : ( this._carrito.hasOwnerProperty(articulo) )
        ? `${this._carrito[articulo]} ${articulo}`
        : `Èl articulo ${articulo} no existe en el Carrito`
    }
  }

  const libros = new Carrito('Libros')
  musica = new Carrito("Música")
  juegos = new Carrito("Juegos")

  c(
    libros, '\n',
    musica, '\n',
    juegos, '\n',
  )
})(console.log)

