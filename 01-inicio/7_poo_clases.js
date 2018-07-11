;
((c) => {
  c('*********POO con Clases**********')

  class Carrito {
    constructor (articulo) {
      this._articulo = articulo
      this._carrito = {}
    }

    agregar (articulo, cantidad) {
      this._carrito[articulo] = cantidad
    }

    quitar (articulo) {
      delete this._carrito[articulo]
    }

    _iterable () {
      let message = 'Carrito:\n'
      for (let key in this._carrito)
        return message
    }

    ver (articulo = 'todos') {
      return ( articulo === 'todos')
        ? this._iterable()
        : (this._carrito.hasOwnerProperty(articulo))
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
})(console.log);

/** POO clases, super, static, etc ._.)/ */
((c) => {
  c('******Herencia, Polimorfismo*******')

  // Privado
  let privado = new WeakMap()

  class Telefono {
    constructor (marca, modelo, numero) {
      // this._numero = numero
      privado.set(this, {_numero: numero})
      this.puedoLlamar = true
      this.puedoLlamar = true
      this.marca = marca
      this.modelo = modelo
    }

    static queEs () {
      c('El telefono es un dispositivo de telecomunicación diseñado para transmitir......')
    }

    // this._numero = numero
    set numero (numero) {
      privado.get(this)._numero = numero
    }

    // return c(this._numero)
    get numero () {
      return c(privado.get(this)._numero)
    }

    llamar () {
      c('Riiiiing Riiiing')
    }
  }

  const Operadora = Superclass => class extends Superclass {
    asignarOperadora (operadora) {
      return c(`La operadora asignada es ${operadora}`)
    }
  }

  const Red = Superclass => class extends Superclass {
    asignarRed (red) {
      return c(`La red de datos asignada es ${red}`)
    }
  }

  class Celular extends Operadora(Red(Telefono)) {
    constructor (marca, modelo, numero) {
      super(marca, modelo, numero) // Directamente al constructor del padre, evito la inicialisación y tengo una propiedad más
      this.tengoCables = false // Antes de un this en la clase hija, debe de llamarse al super constructor
    }
    vibrar () {
      c('Vbrrrrrrrr Vbrrrrrrr')
    }
  }

  class Smartphone extends Celular {
    constructor (marca, modelo, numero) {
      super(marca, modelo, numero)
      this.tengoInternet = true
    }
    conectar () {
      c('Conectando a Internet....')
    }
  }

  // Primero creamos un objeto para tener sus metodos
  let g4 = new Smartphone('huawei','p10 lite','3121838685')
  g4.numero
  g4.numero = '10'
  g4.numero
  c(g4)
  g4.llamar()
  c(g4.puedoLlamar)
  g4.vibrar()
  c(g4.tengoCables)
  g4.conectar()
  c(g4.tengoInternet)
  g4.asignarRed('A&TT')
  g4.asignarOperadora('ATT')

  // Metodo estatico
  Telefono.queEs()
})(console.log)
