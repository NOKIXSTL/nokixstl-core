const Mongo = require('mongodb');
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'nokixstl';

const mongo = async (topic) => {

  // Connect using MongoClient
  Mongo.MongoClient.connect(url,{ useNewUrlParser: true}, function(err, client) {
//    const adminDb = client.db(dbName).admin();
    const col = client.db(dbName).collection('semaforos');
    let sinal = JSON.parse(topic);
    //console.log(sinal);
//    sinal._id = Mongo.ObjectId(sinal._id);

    col.find({_id: sinal._id}).toArray(function(err, items) {
      if(items.length >= 1){
        col.updateOne({_id: sinal._id}, {$set: sinal}, true);//function(err, result) {
      } //else {
        //col.insert(sinal);
      //}
      client.close();
    });

    
  });
}
module.exports = mongo;