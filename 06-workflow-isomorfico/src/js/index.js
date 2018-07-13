import { suma } from './suma'
import resta from './resta'
import division, { modulo } from './division'
import producto, { potencia, cuadrado } from './producto'

const c = console.log

c(suma(6, 7))
c(resta(16, 27))
c(division(100, 4))
c(modulo(100, 33))
c(cuadrado(5))
c(potencia(2, 5))
c(cuadrado(9))
// alert('Browserify funcionando')
