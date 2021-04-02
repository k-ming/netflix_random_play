const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('.video');
const videoInfo = document.querySelector('.video-info');

const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.right-btn');
const preBtn = document.querySelector('.left-btn');

const videoCon = document.querySelector('video');



//Play vidoe and button move to place
playBtn.addEventListener('click', ()=>{
    playVideo();
    setPlay();
});

nextBtn.addEventListener('click',playVideo);
preBtn.addEventListener('click',playVideo);
closeBtn.addEventListener('click',stopPlay);



function playVideo(){
    //Get Random Video
    let randomIndex = Math.floor(Math.random() * videoContents.length)
    let randomVideo = videoContents[randomIndex];

     const videoTag = `<video src="video/${randomVideo.url}.mp4" autoplay></video>`;
    video.innerHTML = videoTag;
        
        
    //get video info
    const videoDetail = `<p>${randomVideo.title}</p>
                        <p>${randomVideo.details}</p>
                        <p>${randomVideo.category}</p>`
    videoInfo.innerHTML = videoDetail;
    videoInfo.classList.add('active');


    // PlayBtn click & play video
    playBtn.classList.add('active');
    closeBtn.classList.add('active');
    nextBtn.classList.add('active');
    preBtn.classList.add('active');


    console.log(videoInfo)
}

function setPlay(){
    setInterval(playVideo, 50000);
}

function stopPlay(){
    location.reload();
}