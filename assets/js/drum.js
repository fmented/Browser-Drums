var lowLag = window.lowLag;
      lowLag.debug = "shutup!";
      lowLag.init();
      var sheight;
      var swidth;
      var ratio;
      var rotation;
      var big, big2;
      var medium, medium2;
      var small, small2;
      var xbig, xbig2;
      var pos;



      var elem = document.documentElement;

      /* View in fullscreen */
      function openFullscreen() {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
      


      var audio = {
        crash1: "assets/audio/crash1.wav",
        crash2: "assets/audio/crash2.wav",
        ride: "assets/audio/ride.wav",
        openhat: "assets/audio/hh-open.wav",
        closehat: "assets/audio/hh-close.wav",
        snare: "assets/audio/snare.wav",
        tom1: "assets/audio/tom-hi.wav",
        tom2: "assets/audio/tom-lo.wav",
        floor: "assets/audio/floor.wav",
        kick: "assets/audio/kick.wav",
        kick2: "assets/audio/kick.wav",
      };

      key = {
        crash1: [69, 87, 81],
        crash2: [84, 89],
        ride: [73, 79],
        openhat: [65, 83],
        closehat: [88, 90],
        snare: [71, 72, 74],
        tom1: [68, 70],
        tom2: [75, 76],
        floor: [188, 190],
        kick: [86],
        kick2: [66, 78],
      };

      function pageInit() {
        var a = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        if (!a.includes("landscape")) {
          rotation = 90;
          sheight = window.innerHeight;
          swidth = window.innerWidth;
          ratio = swidth / sheight;

          big = (swidth * 45) / 100;
          medium = (swidth * 38) / 100;
          small = (swidth * 30) / 100;
          xbig = (swidth * 52) / 100;

          pos = {
            crash1: {
              x: (sheight * 1) / 100 + ratio,
              y: (swidth * (-8 + -100)) / 100 + ratio,
            },
            crash2: {
              x: (sheight * 40) / 100 + ratio,
              y: (swidth * (-2 + -100)) / 100 + ratio,
            },
            ride: {
              x: (sheight * 72) / 100 + ratio,
              y: (swidth * (-5 + -100)) / 100 + ratio,
            },
            openhat: {
              x: (sheight * 3) / 100 + ratio,
              y: (swidth * (30 + -100)) / 100 + ratio,
            },
            closehat: {
              x: (sheight * 1) / 100 + ratio,
              y: (swidth * (60 + -100)) / 100 + ratio,
            },
            snare: {
              x: (sheight * 36) / 100 + ratio,
              y: (swidth * (35 + -100)) / 100 + ratio,
            },
            tom1: {
              x: (sheight * 25) / 100 + ratio,
              y: (swidth * (20 + -100)) / 100 + ratio,
            },
            tom2: {
              x: (sheight * 55) / 100 + ratio,
              y: (swidth * (20 + -100)) / 100 + ratio,
            },
            floor: {
              x: (sheight * 72) / 100 + ratio,
              y: (swidth * (42 + -100)) / 100 + ratio,
            },
            kick: {
              x: (sheight * 20) / 100 + ratio,
              y: (swidth * (55 + -100)) / 100 + ratio,
            },
            kick2: {
              x: (sheight * 50) / 100 + ratio,
              y: (swidth * (55 + -100)) / 100 + ratio,
            },
            textmode: {
              x: (sheight * 88) / 100 + ratio,
              y: (swidth * (93 + -100)) / 100 + ratio,
            },
          };
        } else {
          rotation = 0;

          sheight = window.innerHeight;
          swidth = window.innerWidth;
          ratio = sheight / swidth ;

          big = (sheight * 45) / 100;
          medium = (sheight * 38) / 100;
          small = (sheight * 30) / 100;
          xbig = (sheight * 52) / 100;

          

          pos = {
            crash1: {
              x: (swidth * 1) / 100 + ratio,
              y: (sheight * -8) / 100 + ratio,
            },
            crash2: {
              x: (swidth * 40) / 100 + ratio,
              y: (sheight * -2) / 100 + ratio,
            },
            ride: {
              x: (swidth * 72) / 100 + ratio,
              y: (sheight * -5) / 100 + ratio,
            },
            openhat: {
              x: (swidth * 3) / 100 + ratio,
              y: (sheight * 30) / 100 + ratio,
            },
            closehat: {
              x: (swidth * 1) / 100 + ratio,
              y: (sheight * 60) / 100 + ratio,
            },
            snare: {
              x: (swidth * 36) / 100 + ratio,
              y: (sheight * 35) / 100 + ratio,
            },
            tom1: {
              x: (swidth * 25) / 100 + ratio,
              y: (sheight * 20) / 100 + ratio,
            },
            tom2: {
              x: (swidth * 55) / 100 + ratio,
              y: (sheight * 20) / 100 + ratio,
            },
            floor: {
              x: (swidth * 72) / 100 + ratio,
              y: (sheight * 42) / 100 + ratio,
            },
            kick: {
              x: (swidth * 20) / 100 + ratio,
              y: (sheight * 55) / 100 + ratio,
            },
            kick2: {
              x: (swidth * 50) / 100 + ratio,
              y: (sheight * 55) / 100 + ratio,
            },
            textmode: {
              x: (swidth * 88) / 100 + ratio,
              y: (sheight * 93) / 100 + ratio,
            },
          };
        }
      }

      pageInit();

      function loadCanvas(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for (var src in sources) {
          numImages++;
        }
        for (var src in sources) {
          images[src] = new Image();
          images[src].onload = function () {
            if (++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }

      function buildStage(images) {
        var crash1 = new Konva.Image({
          image: images.crash1,
          x: pos.crash1.x,
          y: pos.crash1.y,
          audio: audio.crash1,
          width: xbig,
          height: xbig,
          keyBind: key.crash1,
        });

        var crash2 = new Konva.Image({
          image: images.crash2,
          x: pos.crash2.x,
          y: pos.crash2.y,
          audio: audio.crash2,
          width: big,
          height: big,
          keyBind: key.crash2,
        });

        var ride = new Konva.Image({
          image: images.ride,
          x: pos.ride.x,
          y: pos.ride.y,
          audio: audio.ride,

          width: xbig,
          height: xbig,
          keyBind: key.ride,
        });

        var openhat = new Konva.Image({
          image: images.openhat,
          x: pos.openhat.x,
          y: pos.openhat.y,
          audio: audio.openhat,
          width: medium,
          height: medium,
          keyBind: key.openhat,
        });

        var closehat = new Konva.Image({
          image: images.closehat,
          x: pos.closehat.x,
          y: pos.closehat.y,
          audio: audio.closehat,
          width: medium,
          height: medium,
          keyBind: key.closehat,
        });

        var snare = new Konva.Image({
          image: images.snare,
          x: pos.snare.x,
          y: pos.snare.y,
          audio: audio.snare,
          width: xbig,
          height: xbig,
          keyBind: key.snare,
        });

        var tom1 = new Konva.Image({
          image: images.tom1,
          x: pos.tom1.x,
          y: pos.tom1.y,
          audio: audio.tom1,

          width: medium,
          height: medium,
          keyBind: key.tom1,
        });

        var tom2 = new Konva.Image({
          image: images.tom2,
          x: pos.tom2.x,
          y: pos.tom2.y,
          audio: audio.tom2,

          width: big,
          height: big,
          keyBind: key.tom2,
        });

        var floor = new Konva.Image({
          image: images.floor,
          x: pos.floor.x,
          y: pos.floor.y,
          audio: audio.floor,

          width: xbig,
          height: xbig,
          keyBind: key.floor,
        });

        var kick = new Konva.Image({
          image: images.kick,
          x: pos.kick.x,
          y: pos.kick.y,
          audio: audio.kick,
          width: xbig,
          height: xbig,
          keyBind: key.kick,
        });

        var kick2 = new Konva.Image({
          image: images.kick2,
          x: pos.kick2.x,
          y: pos.kick2.y,
          audio: audio.kick2,
          width: xbig,
          height: xbig,
          keyBind: key.kick2,
        });

        var textmode = new Konva.Text({
          x: pos.textmode.x,
          y: pos.textmode.y,
          fontFamily: "Calibri",
          fontSize: 20,
          text: "mode : play",
          fill: "white",

        });

        var components = [
          closehat,
          floor,
          openhat,
          kick,
          kick2,
          snare,
          tom1,
          tom2,
          crash1,
          crash2,
          ride,
        ];

        var editmode = false;

        textmode.on("click tap", function () {
          if (!editmode) {
            editmode = !editmode;
            components.forEach(function (x) {
              x.draggable(true);
            });
            components.forEach(function (x) {
              x.off("mousedown touchstart mouseup touchend");
              x.on("click tap", function () {
                x.moveToTop();
                textmode.moveToTop();
                layer.draw();
              });
              x.on("dblclick dbltap", function () {
                x.moveToBottom();
                textmode.moveToTop();
                layer.draw();
              });
            });
            this.text("");
            layer.draw();
            this.text("mode : edit");
            layer.draw();
          } else {
            editmode = !editmode;
            components.forEach(function (x) {
              x.off("click tap dblclick dbltap");
              x.draggable(false);
            });
            playMode();
            this.text("");
            layer.draw();
            this.text("mode : play");
            layer.draw();
          }
        });
        textmode.on("dblclick dbltap", function(){
              openFullscreen()
        })

        function playMode() {
          components.forEach(function (x) {
            x.off("mousedown touchstart mouseup touchend");
            x.on("mousedown touchstart", function () {
              lowLag.play(x.attrs.audio);
              x.scale({ x: 1.05, y: 1.05 });
              layer.draw();
            });
            x.on("mouseup touchend", function () {
              x.scale({ x: 1, y: 1 });
              layer.draw();
            });
          });
        }

        components.forEach(function (x) {
          x.cache();
          x.drawHitFromCache();
          layer.add(x);
        });
        layer.add(textmode);
        stage.add(layer);
        playMode();
      }

      var stage;
      stage = new Konva.Stage({
        container: "container",
        rotation: rotation,
        width: swidth,
        height: sheight,
      });

      var container = stage.container();
      container.tabIndex = 1;
      container.focus();

      var lastplay = [];
      container.addEventListener("keydown", function (e) {
          if (e.keyCode===13){
            openFullscreen()
          }
          else{
        try {
          stage.children[0].children.forEach(function (x) {
            if (!lastplay.includes(e.keyCode)) {
              if (x.attrs.keyBind.includes(e.keyCode)) {
                x.fire("touchstart");
                lastplay.push(e.keyCode);
              }
            }
          });
        } catch (error) {
          if (error.name == TypeError) {
            stage.children[0].children.forEach(function (x) {
              if (!lastplay.includes(e.keyCode)) {
                if (x.attrs.keyBind.includes(e.keyCode)) {
                  x.fire("touchstart");
                  lastplay.push(e.keyCode);
                }
              }
            });
          }
        }}

      });

      container.addEventListener("keyup", function (e) {

        try {
          stage.children[0].children.forEach(function (x) {
            if (x.attrs.keyBind.includes(e.keyCode)) {
              x.fire("touchend");
              var t = lastplay.indexOf(e.keyCode);
              delete lastplay[t];
            }
          });
        } catch (error) {
          if (error.name == TypeError) {
            stage.children[0].children.forEach(function (x) {
              if (x.attrs.keyBind.includes(e.keyCode)) {
                x.fire("touchend");
                var t = lastplay.indexOf(e.keyCode);
                delete lastplay[t];
              }
            });
          }
        }
      });

      var layer = new Konva.Layer({});

      var sources = {
        openhat: "assets/image/x-hat-o.png",
        crash1: "assets/image/x-crash.png",
        closehat: "assets/image/x-hat-c.png",
        kick: "assets/image/x-kick.png",
        kick2: "assets/image/x-kick.png",
        crash2: "assets/image/x-crash.png",
        ride: "assets/image/x-ride.png",
        tom1: "assets/image/x-tom.png",
        tom2: "assets/image/x-tom.png",
        snare: "assets/image/x-snare.png",
        floor: "assets/image/x-tom.png",
      };

      window.addEventListener("load", function () {
        for (var a in audio) {
          lowLag.load(audio[a]);
        }
        loadCanvas(sources, buildStage);
      });

      window.addEventListener("resize", function () {
        stage.destroy();
        pageInit();
        stage = new Konva.Stage({
          container: "container",
          rotation: rotation,
          width: swidth,
          height: sheight,
        });

        loadCanvas(sources, buildStage);
      });

      window.addEventListener("orientationchange", function () {
        var o = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        if (o.includes('landscape')){
          stage.destroy();
          pageInit();
          stage = new Konva.Stage({
            container: "container",
            rotation: rotation,
            width: swidth,
            height: sheight,
          });

          loadCanvas(sources, buildStage);
        }
        

      });
