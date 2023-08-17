const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = callback => {
  MongoClient.connect('mongodb+srv://yashgupta03:Yash123@project1.t7unbog.mongodb.net/?retryWrites=true&w=majority').then(client => {
  console.log("connected");
  _db = client.db();
  callback();
}).catch(error => {
  console.log(error);
});
}

const getDb = () => {
  if(_db){
    return _db;
  }
  console.log('error: not connected');

}

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;