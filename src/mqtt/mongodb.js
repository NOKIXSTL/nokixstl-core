const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'nokixstl';
const mongo = async (topic) => {
  // Connect using MongoClient
  MongoClient.connect(url,{ useNewUrlParser: true}, function(err, client) {
    // Use the admin database for the operation
    const adminDb = client.db(dbName).admin();
    

    const col = client.db(dbName).collection('semaforos');
    // Show that duplicate records got dropped
    let sinal = JSON.parse(topic);
    console.log(sinal);

    col.find({_id: sinal._id}).toArray(function(err, items) {
      //console.log(items);
      if(items.length >= 1){
        col.updateOne({_id: sinal._id}, {$set: sinal}, true);//function(err, result) {
          //callback(result)
         // console.log(result);
//        });
      }else{
        col.insert(sinal);
      }
      client.close();
    });
//      const collection = client.db(dbName).collection('semafoross');
//    collection.find({'_id': '1234'}).limit(1).toArray;
//     collection.updateOne({'_id': '1234','sinal': topic});
//  }
//  client.close();  

    
  });
}
//module.exports = MongoClient;
module.exports = mongo;