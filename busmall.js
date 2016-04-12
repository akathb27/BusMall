var Photo = function (image, name) {
  this.image = image;
  this.name = name;
  this.voteCount=0;
};

var photoArray = new Array ();
var bag = new Photo("bag.jpg", "bag");
var banana = new Photo("banana.jpg", "banana");
var boots = new Photo("boots.jpg", "boots");
var chair = new Photo("chair.jpg", "chair");
var cthulhu = new Photo("cthulhu.jpg", "cthulhu");
var dragon = new Photo("dragon.jpg", "dragon");
var pen = new Photo("pen.jpg", "pen");
var scissors = new Photo("scissors.jpg", "scissors");
var shark = new Photo("shark.jpg", "shark");
var sweep = new Photo("sweep.jpg", "sweep");
var unicorn = new Photo("unicorn.jpg", "unicorn");
var usb = new Photo("usb.jpg", "usb");
var watercan = new Photo("water_can.jpg", "watercan");
var wineglass = new Photo("wine_glass.jpg", "wineglass");

var ul = document.getElementById('list');
var li = document.createElement('li');
ul.appendChild(li);


var products = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, watercan, wineglass];
var copyArray = new Array();

function callImages() {
  makeCopy();
  li.innerHTML="";
  for (var i = 0; i < 3; i++){                             //creates random image selection
  var randomImage = Math.floor(Math.random() * copyArray.length);
  var pastImage = copyArray.splice(randomImage, 1)[0];
  var img = document.createElement("img");
  li.appendChild(img);
  img.src = pastImage.image;
  img.id = pastImage.name;
  img.addEventListener("click", registerClick);
}
};

function makeCopy() {                               //makes copy of the array
  for(var i = 0; i < products.length; i++){
    copyArray.push(products[i]);
  }
};


window.onload = function () {
  	var chart = new CanvasJS.Chart("chartContainer",
 	{
		animationEnabled: true,
	title:{
			text: "Your Product Votes"
		},
		data: [
		{
			type: "column",
			dataPoints: [
 				{ label: "bag", y: bag.voteCount },
        { label: "banana", y: banana.voteCount },
        { label: "boots", y: boots.voteCount },
        { label: "chair", y: chair.voteCount },
        { label: "sweep", y: sweep.voteCount },
        { label: "cthulhu", y: cthulhu.voteCount },
        { label: "pen", y: pen.voteCount },
        { label: "usb", y: usb.voteCount },
        { label: "shark", y: shark.voteCount },
        { label: "unicorn", y: unicorn.voteCount },
        { label: "watercan", y: watercan.voteCount },
        { label: "wineglass", y: wineglass.voteCount },
        { label: "dragon", y: dragon.voteCount },
        { label: "scissors", y: scissors.voteCount },
			]
    ]
	});
 }

var totalVotes = 0;   //number of votes made by user

function registerClick () {
  totalVotes++;
  console.log("image clicked:" + event.target.id);
  for (var index=0; index < products.length; index++) {
    if (products[index].name == event.target.id) {
      products[index].voteCount++;
      ul.innerHTML = "";
      if(totalVotes === 15){
        chart.render();
      }
    }
    break;
  }
  callImages();
}
callImages();









//
// var usedphotos = {};
// var usedphotoscount = 0;
//
// function imgRandom(){
//   var num = Math.floor(Math.random() * photos.length);
//   if (!usedphotos[num]){
//     document.tree.src = photos[num];
//     usedphotos[num] = true;
//     usedphotoscount++;
//     if (usedphotoscount === photos.length){
//       usedphotoscount = 0;
//       usedphotos = {};
//     }
//   } else {
//     imgRandom();
//   }
// }
// imgRandom();
// document.getElementById('')


// var photosLeft = new Array();       //created an array for images that haven't been used yet
//
// function copyArray () {             //created a function that pushes the items that have been used into an array
//     photosLeft.push(photoArray[i]);
//   }
//
// function randomImage () {            //if there are no photos left, it calls the copied array, which is full, fills up the photos left again for use
//   if (photosLeft.length === 0) {
//     copyArray();
//   }
//   var i  = Math.floor(Math.random() * photosLeft.length);      //calls a random image from the photos left array
//   var photoUse = photosLeft.splice(index, 1)[0];               //splice will remove a used image
//   return photoUse;                                             //this will return a photo to use
// }
//
// function displayImage () {
//
// }
