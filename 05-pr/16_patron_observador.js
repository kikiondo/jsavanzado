;

((c) => {
  c(`*************Patrón Observador***********`)

  class Click {
    constructor () {
      this.players = []
    }

    subscribe (fn) {
      this.players.push(fn)
    }

    unsubscribe (fn) {
      this.players = this.players.filter(item => (item !== fn) ? item : false)
    }

    fire (msg) {
      this.players.forEach(item => item(msg))
    }
  }

  class Log {
    constructor () {
      this.log = ''
    }

    add (msg) {
      this.log += `${msg}\n`
    }

    show () {
      c(this.log)
      this.log = ''
    }
  }

  /**
   * Click representa al sujeto observable (pub)
   * clickHandler es la función observadora (sub) este controlador suscribe y cancela la observación, adicionalmente
   * dispara los eventos para visualizar las notifiaciones de los mismos
   *
   * Log
   * Clase auxiliar que recoge y muestra los resultados
   */

  const click = new Click()
  const clickHandler = item => log.add(`dispara: ${item}`) // sub
  const log = new Log()

  // objeto subseptible a observación
  click.subscribe(clickHandler) // Se le agrega un sub
  click.fire('seguidor 1')
  click.unsubscribe(clickHandler)
  click.fire('seguidor 2')
  click.subscribe(clickHandler)
  click.fire('seguidor 3')

  log.show()
})(console.log);

((c) => {
  // Simular un videojuego de peleas (funcion que observe y una que sea sub)
  class Player {
    constructor () {
      this.players = []
    }

    add (play) {
      this.players.push(play)
    }

    notify (obj) {
      this.players.forEach(play => play(obj))
    }
  }

  // Sub
  class Fight {
    constructor (fighter1, fighter2) {
      this.Player = new Player()
      this.fighter1 = fighter1
      this.fighter2 = fighter2
      this.round = 1
    }

    readyGo () {
      let match = {}

      if (Math.floor((Math.random() * 2) + 1) === 1) {
        match = {
          winner: this.fighter1,
          looser: this.fighter2
        }
      } else {
        match = {
          winner: this.fighter2,
          looser: this.fighter1
        }
      }

      match.random = this.round
      this.round++

      this.Player.notify(match)
    }
  }

  const kof = new Fight('Kyo', 'Iori')
  kof.Player.add(obj => c(`Ronda ${obj.round} \n Ganador: ${obj.winner} \n Perdedor: ${obj.looser}`))
  kof.readyGo()
  kof.readyGo()
  kof.readyGo()
})(console.log)
