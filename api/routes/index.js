var express = require('express');
var router = express.Router();

var ctrlCustom = require('../controllers/custom.controllers.js');
//test
router
  .route('/trident')
  .get(ctrlCustom.applicationsGetAll);

  router
  .route('/trident/:productId')
  .get(ctrlCustom.applicationsGetOne);
module.exports = router;