const MongoClient = require('mongodb').MongoClient
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.${process.env.DB_CLUSTER_CODE}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

MongoClient.connect(url, { useNewUrlParser: true })
  .then(conn => global.conn = conn.db("triyo-test"))
  .catch(err => console.log(err))

function findAll() {
  return global.conn.collection("clients").find().toArray()
}

module.exports = { findAll }

