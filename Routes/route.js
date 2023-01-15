const express = require('express');
const videostreamcontroller =require('../Controllers/moviedatas')
const router = express.Router();

router.get('/shows',videostreamcontroller.displayVideo)
router.get('/shows/:_id',videostreamcontroller.displaymovie)
router.get('/shows/:_id/video',videostreamcontroller.playmovie)
module.exports=router;