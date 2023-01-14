const mongoose =require('mongoose');
const Schema =mongoose.Schema

const videoSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    movie_name:{
        type:String,
        required: true
    },
    lang:{
        type:String,
        required: true
    },
    synopsis:{
        type:String,
        required: true
    },
    videourl:{
        type:String,
        required: true
    },
    ratings:{
        type:Number,
        required: true
    }
})

module.exports=mongoose.model('video',videoSchema,'video');

// movie datas
// [
//     {
//         _id:'1',
//         movie_name:'Atrangi Re',
//         lang:'Hindi',
//         synopsis:"Chaos ensues when a runaway woman gets forcefully married to a man who is already engaged. The situation turns murkier when the girl's boyfriend enters their lives",
//         videourl:'./../Videofiles/Atrangi Re.mp4',
//         ratings:7.6
//         },{
//             _id:'2',
//             movie_name:'Vikram',
//             lang:'Tamil',
//             synopsis:'A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.',
//             videourl:'./../Videofiles/VIKRAM-Official Trailer.mp4',
//             ratings:9
//         },{
//             _id:'3',
//             movie_name:'Sita Raman',
//             lang:'Telugu',
//             synopsis:"Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.",
//             videourl:'./../Videofiles/Sita Ramam Trailer.mp4',
//             ratings:8.8
//         },{
//             _id:'4',
//             movie_name:'KGF 2',
//             lang:'Kannada',
//             synopsis:"Rocky takes control of the Kolar Gold Fields and his newfound power makes the government as well as his enemies jittery. However, he still has to confront Ramika, Adheera and Inayat.",
//             videourl:'./../Videofiles/KGF CHAPTER2 TEASER.mp4',
//             ratings:9
//         },{
//             _id:'5',
//             movie_name:'RRR',
//             lang:'Telugu',
//             synopsis:"A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
//             videourl:'./../Videofiles/RRR Trailer.mp4',
//             ratings:8
//         }
//     ]