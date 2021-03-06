const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeController');
const upload = require('../app/common/configUpload');


router.post('/uploadimgs',upload.any(),homeController.upload);
router.get('/',homeController.index);

module.exports = router;