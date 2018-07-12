;
((c) => {
  // Función recursiva para obtener el factorial de un número.
  // (n! = producto de todos los números naturales desde 1 hasta n) integral referencial

  // Imperativo
  const factorialImperativo = n => {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
      factorial = factorial * i
    }
    return factorial
  }
  c(factorialImperativo(5))

  // Declarativo  caso base a donde tiene que llegar, caso recursivo elq ue se va a estar ejecutando
  const factorialDeclarativo = n => {
    return n === 0
      ? 1
      : n * factorialImperativo(n - 1)
  }
  c(factorialDeclarativo(5))

  // Función recursiva para obtener la suma factorial de un número
  // (n+! = sumatoria de todos los números naturales desde 1 hasta n)
  const sumaFactorial = n => {
    return n === 1
      ? 1
      : n + sumaFactorial(n - 1)
  }
  c(sumaFactorial(5))
  c(sumaFactorial(10))

  // Función recursiva para calcular la potencia de un numero b elevado al exponente e
  // (b elevado a e = se obtiene como el producto de b con sigo mismo e veces)
  const pow = (b, e) => {
    return e < 2 // a evaluar
      ? b // caso base
      : b * pow(b, e - 1)
  }
  c(pow(2, 6))
  c(pow(3, 5))

  // Función para determinar si un número es par o impar sin el uso de operador módulo
  const even = numero => {
    return numero === 0
      ? true
      : numero === 1
        ? false
        : odd(numero - 1)
  }

  const odd = n => {
    return n === 0
      ? true
      : n === 1
        ? false
        : even(n - 1)
  }
  c(even(5))

  // Función recursiva que sume los dígitos de un número
  // pe 125 = 1 + 2 + 5 = 8

  const sumadDigitos = n => {
    return n < 10
      ? n // vevuelve el numero
      : n % 10 + sumadDigitos(Math.floor(n / 10))
  }
  c('Suma digitos:' + sumadDigitos(15))

  // Función recursiva para determinar si un elemento está contenido dentro de un vector.
  c('Elemento dentro de Vector')
  const existeEnVectorAux = (vector, elemento, posicion) => {
    return posicion > vector.length - 1
      ? false
      // : (vector[posicion] === elemento)
      //   ? true // caso base
      //   : existeEnVectorAux(vector, elemento, posicion + 1)
      : vector[posicion] === elemento || existeEnVectorAux(vector, elemento, posicion + 1)
  }

  const existeEnVector = (vector, elemento) => {
    return existeEnVectorAux(vector, elemento, 0) // caso a evaluar
  }

  c(existeEnVector([1, 2, 3, 4, 5], 4))
  c(existeEnVector([1, 2, 3, 4, 5], 0))

  // Función recursiva para determinar si un elemento está repetido dentro de un vector.
})(console.log)
