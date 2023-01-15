const VideostreamSchema = require('../Models/moviedatas')
const fs=require('fs');
const range=require('range-parser');
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
exports.displaymovie=(req,res)=>{
    VideostreamSchema.findById(req.params._id)
    .then(result=>{
        res.status(200).json({
            movie:result
        });
    })    
}

exports.playmovie = (req, res) => {
    VideostreamSchema.findById(req.params._id)
    .then(result=>{
        res.status(200).json({
            movie:result
        });
    })   
  };

 // const videoPath ='./Videofiles/RRR Trailer.mp4'
    // const videosize=fs.statSync(videoPath).size
    // const ranges = (videosize,req.headers.range)
    // if (!ranges) {
    //     return res.status(400).send('range header is missing');
    //  }
    // const chunksize = 1 * 1e+6;
    // const start = Number(ranges.replace(/bytes=/, ''));
    // const end =Math.min(start +chunksize,videosize -1)
    // const contentlenght = end - start +1;
    // const headers ={
    //     'Content-range': `bytes ${start}-${end}/${videosize}`,
    //     'Accet-range': 'bytes',
    //     'Content-Length': contentlenght,
    //     'Content-Type': 'video/mp4',
    // }
    // res.writeHead(200,headers);

    // const stream = fs.createReadStream(videoPath,{start,end})
    // stream.pipe(res); 


    // let range = req.headers.range;
    // if (!range) {
    //   range = 'bytes=0-';
    // }
    // const videoPath = "./Videofiles/RRR Trailer.mp4";
    // const videosize = fs.statSync(videoPath).size;
    // const chunksize = 10 **6;
    // const start = Number(range.replace(/\D/g, ''));
    // const end = Math.min(start + chunksize, videosize - 1);
    // const contentlenght = end - start + 1;
    // const headers = {
    //   'Content-range': `bytes ${start}-${end}/${videosize}`,
    //   'Accept-Ranges': 'bytes',
    //   'Content-Length': contentlenght,
    //   'Content-Type': 'video/mp4'
    // };
    // res.writeHead(200, headers);
    // const stream = fs.createReadStream(videoPath, { start, end });
    // stream.pipe(res);
    // stream.on("end", () => {
    //   res.sendFile('C:/Users/Ejaz Ahmed/Documents/EDUREKA INTERN/Projects/VideoStream/index.html');
    // });