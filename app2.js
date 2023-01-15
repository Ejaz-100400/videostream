fetch('http://localhost:7000/shows')
.then(response => response.json())
.then(data =>this.displaydata(data));

function displaydata(data) {
    // data.movieshows.forEach((video)=>{
    //     console.log(video.videourl[0])
    // })
    // document.querySelectorAll('video')[0].src =data.movieshows[0].videourl;
    console.log(data.movieshows[0].videourl);
}


