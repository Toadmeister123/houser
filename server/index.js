require('dotenv').config()
const bodyParser = require('body-parser')
const massive = require('massive')
const express = require('express')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, } = process.env

const app = express();

app.use(bodyParser.json())


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  
  console.log('Connected to database')
  app.listen(SERVER_PORT, () =>
    console.log(`Listening on ${SERVER_PORT}`)
  )
})

app.get('/api/Houses', ctrl.getHouses)
app.post('/api/House', ctrl.createHouse)
app.delete('/api/House/:id', ctrl.deleteHouse)