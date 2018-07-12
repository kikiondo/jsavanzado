;
((c) => {
  // REDUCE necesita un acumulado y el valor actual  ||una lamda (funcion de una expresión)
  c([1, 2, 3, 4, 5].reduce((acumulado, elemento) => acumulado + elemento))
  c([1, 2, 3, 4, 5].reduce((acumulado, elemento) => acumulado * elemento)) // factorial

  // MAP necesita un array y regresa un array
  c([1, 2, 3, 4, 5].map((elemento) => elemento * elemento))
  c([1, 2, 3, 4, 5].map((elemento) => -elemento)) // elemento * -1

  // FILTER filtra necesita elemento y una condicional
  c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 0))
  c([1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 1))
})(console.log)
