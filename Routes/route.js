const express = require('express');
const videostreamcontroller =require('./../Controllers/video.js')
const router = express.Router();

router.get('/',videostreamcontroller.displayVideo)

module.exports=router;