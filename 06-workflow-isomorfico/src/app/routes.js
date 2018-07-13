import express from 'express'

const routes = express.Router()

routes
  .get('/', (req, res, next) => {
    res.render('index', {
      title: 'Título de mi template Home',
      description: 'Descripción de mi template Home'
    })
  })
  .get('/about', (req, res, next) => {
    res.render('index', {
      title: 'Título de mi template About',
      description: 'Descripción de mi template About'
    })
  })

export default routes