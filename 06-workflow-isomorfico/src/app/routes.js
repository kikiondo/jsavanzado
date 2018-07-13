import express from 'express'

const routes = express.Router() // De express

routes
  .get('/', (req, res, next) => {
    res.render('index', {
      title: 'Titulo de mi template Home',
      description: 'Descripción de mi Template Home'
    })
  })
  .get('/about', (req, res, next) => {
    res.render('index', {
      title: 'Titulo de mi template About',
      description: 'Descripción de mi Template Abput'
    })
  })

export default routes