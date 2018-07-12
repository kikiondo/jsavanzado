;
((c) => {
  c('*******Programación Asíncrona**********')
  c('*********Callbacks*********')

  function cuadrado (value, cb) {
    setTimeout(() => {
      cb(value, value * value)
    }, 0 | Math.random() * 100)
  }

  // El result es el resultado de arriba
  cuadrado(0, (value, result) => {
    c('Inicio Callback')
    c(`Callback: ${value}, ${result}`)
    cuadrado(1, (value, result) => {
      c(`Callback: ${value}, ${result}`)
      cuadrado(2, (value, result) => {
        c(`Callback: ${value}, ${result}`)
      })
    })
  })
})(console.log);

((c) => {
  // promeas en vez de pasar una cb paso un valor, y el valor va retornar una promesa. Ahora cuadrado devuelv e una promesa.!!
  const cuadrado = value => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({value: value, result: value * value})
      }, 0 | Math.random() * 100)
    })
  }

  cuadrado(0)
    .then(obj => {
      c('Inicio Promise')
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(1)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(2)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(3)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(4)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(5)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(6)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(7)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(8)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(9)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(10)
    })
    .catch(err => c(`Ocurrió un error: ${err}`))
})(console.log);

((c) => {
  // Generadores, un arow que devuelve un valor
  const cuadrado = value => {
    setTimeout(() => {
      c({value: value, result: value * value})
    }, 0 | value * 100)

    return {
      value: value,
      result: value * value
    }
  }

  function* generador () {
    c('Inicio Generator')
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    yield cuadrado(6)
    yield cuadrado(7)
    yield cuadrado(8)
    yield cuadrado(9)
    yield cuadrado(10)
    c('Fin Generador')
  }

  let gen = generador()
  c(gen.next())
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next().value)
  c(gen.next())
})(console.log);

((c) => {
  // Async - Await

  const cuadrado = value => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({value: value, result: value * value})
      }, 0 | Math.random() * 100)
    })
  }

  async function asyncAwait () {
    c('Inicio Async Functions')
    // Para que la función asincrona espera el valor de cuadrado es con wait
    let obj = await cuadrado()
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(1)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(2)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(3)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(4)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(5)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(6)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(7)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(8)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(9)
    c(`Async Function: ${obj.value}, ${obj.result}`)
    obj = await cuadrado(10)
    c(`Async Function: ${obj.value}, ${obj.result}`)
  }
  asyncAwait()
})(console.log)
