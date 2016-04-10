// var photoOne = {
//   name: "bag",
//   location: "<img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/bag.jpg'>",
//   voteCount: 0,
// }
//
// var photoTwo = {
//   name: "wineGlass",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/wine_glass.jpg'>",
//   voteCount: 0,
// }
//
// var photoThree = {
//   name: "waterCan",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/water_can.jpg'>",
//   voteCount: 0,
// }
//
// var photoFour = {
//   name: "sweep",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/sweep.jpg'>",
//   voteCount: 0
// }
//
// var photoFive = {
//   name: "dragon",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/dragon.jpg'>",
//   voteCount: 0,
// }
//
// var photoSix = {
//   name: "scissors",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/scissors.jpg'>",
//   voteCount: 0
// }
//
// var photoSeven = {
//   name: "shark",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/shark.jpg'>",
//   voteCount: 0
// }
//
// var photoEight = {
//   name: "boots",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/boots.jpg'>",
//   voteCount: 0
// }
//
// var photoNine = {
//   name: "cthulhu",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/cthulhu.jpg'>",
//   voteCount: 0
// }
//
// var photoTen = {
//   name: "usb",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/usb.jpg'>",
//   voteCount: 0
// }
//
// var photoEleven = {
//   name: "chair",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/chair.jpg'>",
//   voteCount: 0
// }
//
// var photoTwelve = {
//   name: "banana",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/banana.jpg'>",
//   voteCount: 0
// }
//
// var photoThirteen = {
//   name: "pen",
//   location: "img src='https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/pen.jpg'>",
//   voteCount: 0
// }

var photoFourteen = {
  name: "unicorn",
  location: "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/unicorn.jpg",
  voteCount: 0
}

//var photos = [photoOne, photoTwo, photoThree, photoFour, photoFive, photoSix, photoSeven, photoEight, photoNine, photoTen, photoEleven, photoTwelve, photoThirteen, photoFourteen];


var photos = ['https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/unicorn.jpg'];
var usedphotos = {};
var usedphotoscount = 0;

function imgRandom(){
  var num = Math.floor(Math.random() * (photos.length));
  if (!usedphotos[num]){
    document.tree.src = photos[num];    //replace "photos array with the one below. change images to photos"
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


//
// function imgRandom(rando) {
//   return photos.location[Math.floor(Math.random())];
// //  document.getElementById("imgRandom").innerHTML;
// }
//
































//
// var images = new Array("https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/bag.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/banana.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/chair.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/boots.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/cthulhu.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/dragon.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/pen.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/scissors.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/shark.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/sweep.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/unicorn.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/usb.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/water_can.jpg",
// "https://raw.githubusercontent.com/codefellows/portland-201n2/master/week_5-6/assets/imgs/wine_glass.jpg");
