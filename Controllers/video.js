const VideostreamSchema = require('./../Models/video')
exports.displayVideo=(req,res)=>{
    VideostreamSchema.find()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            movieshows:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        });
    })
}