var dbconn = require('../data/dbconnection.js');

var sampleData = require('../data/sample-data.json');

module.exports.applicationsGetAll = function(req, res) {
   var db = dbconn.get();
   console.log("db",db);

  console.log('GET the json');
  res
    .status(200)
    .json(sampleData);
};

module.exports.applicationsGetOne = function(req, res) {
  let productId = req.params.productId;
  let thisproduct = sampleData[productId];
  console.log('GET One product',productId);
  res
    .status(200)
    .json(thisproduct);
};