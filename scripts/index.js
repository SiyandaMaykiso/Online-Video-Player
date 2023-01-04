"use strict";

const video = new Video({
    wrapperID: "video-wrapper",
    videoSrc: "static/flowing-water-fountain.mp4",
    posterSrc: "static/flowing-water-fountain-poster.jpg",
    absolute: true,
    hideControlsOnPlay: true,
    progressColor: "white"
});

console.log(video);
