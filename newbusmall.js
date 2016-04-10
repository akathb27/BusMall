var photos = new Array ("bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg",
"pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wineglass.jpg");

var usedphotos = {};
var usedphotoscount = 0;

function imgRandom(){
  var num = Math.floor(Math.random() * photos.length);
  if (!usedphotos[num]){
    document.tree.src = photos[num];
    usedphotos[num] = true;
    usedphotoscount++;
    if (usedphotoscount === photos.length){
      usedphotoscount = 0;
      usedphotos = {};
    }
  } else {
    imgRandom();
  }
}
imgRandom();
document.getElementById('')
