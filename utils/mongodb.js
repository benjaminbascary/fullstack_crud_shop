const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

const URL = `mongodb+srv://root:${process.env.MONGODBPASSWORD}@cluster0.onnqs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(URL);

async function mongoConnect() {
  try {
    await client.connect();
    console.log('CONNECTED')
  } catch(err) {
    console.log(err);
  }
}

module.exports = mongoConnect;
