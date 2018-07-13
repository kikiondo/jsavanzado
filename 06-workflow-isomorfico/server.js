import http from 'http' // Para levantar servidor
import app from './app'
import reload from 'ack-reload' // Solo en fase de desarrollo

const server = http.createServer(app)

// Ejecutar middlware, necesita ruta de carpeta publica y objeto que levanta servidor
if (app.get('env') === 'development') {
  app.use(reload.middleware(`${__dirname}/public`, server))
}

server.listen(
  app.get('port'),
  () => console.log(`Iniciando aplicación isomorfica en el puerto ${app.get('port')}`)
)
