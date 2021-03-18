
/****************** PESACKI KREIRANO ****************************
 
 let play = document.querySelector("#play");
 //let pause = document.querySelector("#pause);
 let reload = document.querySelector("#reload");
 let video = document.querySelector("#video");
 
 play.addEventListener("click", startVideo);
 reload.addEventListener("click", reloadVideo);
 
 function startVideo() {
 if (this.getAttribute("src") === 'Assets/playimg.png') {
 video.play();
 this.setAttribute("src", "Assets/pauseimg.png");
 } else {
 video.pause();
 this.setAttribute("src", "Assets/playimg.png");
 }
 }
 ;
 
 function reloadVideo() {
 video.load();
 play.setAttribute("src", "Assets/playimg.png");
 }
 ;*/


/**********************  VIDEO PLAYER OBJECT *********************
 (function () {
 // SAMOPOZIVAJUCA(self invoking) ANONYMUS FUNCTION
 let videoXXX = {
 play: document.querySelector("#play"),
 reload: document.querySelector("#reload"),
 video: document.querySelector("#video"),
 init: function () {
 this.play.addEventListener("click", this.startVideo);
 this.reload.addEventListener("click", this.reloadVideo);
 },
 startVideo: function () {
 if (this.getAttribute("src") === 'Assets/playimg.png')
 {
 videoXXX.video.play();
 this.setAttribute("src", "Assets/pauseimg.png");
 } else {
 videoXXX.video.pause();
 this.setAttribute("src", "Assets/playimg.png");
 }
 },
 reloadVideo: function () {
 videoXXX.video.load();
 videoXXX.play.setAttribute("src", "Assets/playimg.png");
 }
 
 };
 
 videoXXX.init();
 })();
 */

/********************** VIDEO PLAYER CONSTRUCTOR FUNCTION **************
 (function () {
 function VideoXXX() {
 var self = this;
 this.play = document.querySelector("#play"),
 this.reload = document.querySelector("#reload"),
 this.video = document.querySelector("#video"),
 this.init = function () {
 this.play.addEventListener("click", this.startVideo);
 this.reload.addEventListener("click", this.reloadVideo);
 },
 this.startVideo = function () {
 if (this.getAttribute("src") === 'Assets/playimg.png')
 {
 self.video.play();
 this.setAttribute("src", "Assets/pauseimg.png");
 } else {
 self.video.pause();
 this.setAttribute("src", "Assets/playimg.png");
 }
 },
 this.reloadVideo = function () {
 self.video.load();
 self.play.setAttribute("src", "Assets/playimg.png");
 };
 
 }
 
 let videoXXX = new VideoXXX();
 videoXXX.init();
 })();
 */

/*********************** BIND METODA ( bez var self =this )  ***************
 
 (function () {
 function VideoXXX() {
 this.play = document.querySelector("#play"),
 this.reload = document.querySelector("#reload"),
 this.video = document.querySelector("#video"),
 this.init = function () {
 this.play.addEventListener("click", this.startVideo.bind(this));//this=videoXXX
 this.reload.addEventListener("click", this.reloadVideo.bind(this));
 },
 this.startVideo = function () {
 if (this.play.getAttribute("src") === 'Assets/playimg.png')
 {
 this.video.play();
 this.play.setAttribute("src", "Assets/pauseimg.png");
 } else {
 this.video.pause();
 this.play.setAttribute("src", "Assets/playimg.png");
 }
 },
 this.reloadVideo = function () {
 this.video.load();
 this.play.setAttribute("src", "Assets/playimg.png");
 };
 }
 
 let videoXXX = new VideoXXX();
 videoXXX.init();
 })();
 */

/****************************************************************
 menjamo u htmlu id u class da bi dobili istu funkcionalnost 
 za veci broj videa **************************/

(function () {
    function VideoXXX(id) {
                this.videoWraper = document.querySelector("#" + id),
                this.play = this.videoWraper.querySelector(".play"), // iz videoWrapera selektujemo sada cve: play, reload, video
                this.reload = this.videoWraper.querySelector(".reload"),
                this.video = this.videoWraper.querySelector("#video"),
                this.init = function () {
                    this.play.addEventListener("click", this.startVideo.bind(this));//this=videoXXX
                    this.reload.addEventListener("click", this.reloadVideo.bind(this));
                },
                this.startVideo = function () {
                    if (this.play.getAttribute("src") === 'Assets/playimg.png')
                    {
                        this.video.play();
                        this.play.setAttribute("src", "Assets/pauseimg.png");
                    } else {
                        this.video.pause();
                        this.play.setAttribute("src", "Assets/playimg.png");
                    }
                },
                this.reloadVideo = function () {
                    this.video.load();
                    this.play.setAttribute("src", "Assets/playimg.png");
                };
    }

    let video1 = new VideoXXX('video1').init();
    let video2 = new VideoXXX('video2').init();
})();