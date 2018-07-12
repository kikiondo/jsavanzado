;
((c) => {
  c(`**********Programación Reactiva ************`)

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

  setInterval(() => {
    c(`Enviando información....`)
    createUser()
    getUsers()
  }, 5000)

  setInterval(() => {
    c(`Enviando información....`)
    createUser()
    getUsers()
  }, 2000)
})(console.log)
