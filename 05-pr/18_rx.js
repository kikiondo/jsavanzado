;
((c) => {
  c(`**********Programación Reactiva con RXJS************`)

  const createUser = () => {
    let id = Math.floor(Math.random() * 100000)
    user.push(id)
    c(`Usuario ${id} creado`)
  }

  const getUsers = () => {
    c(`Obteniendo Usuarios`)
    c(`Usuarios: ${user}\nTotal de Usuaios: ${user.length}`)
  }
  let user = []
  let pub = Rx.Observable.create(user => {
    setInterval(() => {
      c(`Enviando información....`)
      user.next(getUsers)
      getUsers()
    }, 5000)
  })

  pub.subscribe(() => createUser())
})(console.log)
