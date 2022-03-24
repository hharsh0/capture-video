const video = document.getElementById("video");

function startVideo(){
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(stream =>{
        video.srcObject = stream; // i have included autoplay thats why not doing video.play()
    }).catch(console.error);
};

window.addEventListener('load', startVideo);