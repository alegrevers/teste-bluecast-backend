require('dotenv').config()
const express = require('express')
const app = express()
const router = express.Router()
const PORT = 8080;
const HOST = '0.0.0.0';
const cors = require('cors')
var corsOptions = {
  origin: "http://localhost:8081"
}
global.db = require('./src/infrastructure/config/database')

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    res.send('Home');
})

app.get('/clients', async (req, res, next) => {
  try {
    const docs = await global.db.findAll()
    res.json(docs);
  } catch (err) {
    next(err)
  }
})

app.listen(PORT, HOST)
