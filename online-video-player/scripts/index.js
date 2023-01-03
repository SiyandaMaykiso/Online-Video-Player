"use strict";

const video = new Video({
    wrapperID: "video-wrapper",
    videoSrc:"static/clear-flowing-water-fountain.mp4/",
    posterSrc: "static/clear-flowing-water-fountain-poster.jpg",
    absolute: true,
    hideControlsOnPlay: true,
    progressColor: "cream"
});

console.log(video);
