require('dotenv').config()
const express = require('express')
global.db = require('./src/infrastructure/config/database')

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', async (req, res) => {
    res.send('Home');
})

app.get('/clients', async (req, res, next) => {
  try {
    const docs = await global.db.findAll()
    res.json({title: 'Lista de Clientes', docs });
  } catch (err) {
    next(err)
  }
})



app.listen(PORT, HOST)
