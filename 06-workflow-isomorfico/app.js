import express from 'express'
import pug from 'pug'
import favicon from 'serve-favicon'
import sassMidleware from 'node-sass-middleware'
import routes from './src/app/routes'

const env = 'development'
const port = process.env.PORT || 3000
const publicDir = `${__dirname}/public`
const viewDir = `${__dirname}/src/views`
const faviconDir = `${__dirname}/public/img/favicon.png`
const app = express()

// Establecer valores de la app, concatenamos en una misma instancia (pf)

app
  .set('views', viewDir)
  .set('view engine', 'pug')
  .set('port', port)
  .set('env', env)
// Middleware que va a ejecutar
  .use(sassMidleware({
    src: `${__dirname}/src/scss`,
    dest: publicDir,
    debug: false,
    outputStyle: 'compressed'
  }))
  .use(express.static(publicDir))
  .use(favicon(faviconDir))
  .use(routes) // Decir que utilizara el modulo routes

// Solo en desarrollo
if (app.get('env') === 'production') {
  // middleware para error 400 y 500
  app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404 // Como en ajax
    next(err)
  })

  // Recibe el return middlware anterior
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {err: err})
  })
}

export default app
