const express = require('express')
const MongoClient = require('mongodb').MongoClient

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World oiakudjfaj');
})

MongoClient.connect(
  'mongodb+srv://dev:dev@cluster0.l29up.mongodb.net/triyo-test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('MongoDB Connected!!!')
  })
  .catch(error => {
    console.log('MongoDB Fail!!!')
  })

app.listen(PORT, HOST)
