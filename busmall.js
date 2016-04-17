var Photo = function (image, name) {
  this.image = image;
  this.name = name;
  this.label = name;
  this.y = 0;
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

var chart = null;

function buildChart () {
  chart = new CanvasJS.Chart("chartContainer", {

    title: {text: "Your Product Votes"},
    data: [
            {
             type: "column",
             dataPoints: products
            }
          ]
   });
}

window.onload = function () {

buildChart();

  // chart = new CanvasJS.Chart("chartContainer", {
  //
  //   title: {text: "Your Product Votes"},
  //   data: [
  //           {
  //            type: "column",
  //            dataPoints: products
  //           }
  //         ]
  //  });

 chart.render();
}

totalVotes = 0;
function registerClick () {
totalVotes++;
  console.log(totalVotes);
  for (var index=0; index < products.length; index++) {
    if (products[index].name == event.target.id) {
      products[index].y++;
      endProducts = localStorage.setItem('products', JSON.stringify(products));
      li.innerHTML = "";
      if(totalVotes === 15) {
        console.log("voteCount reached")
        chart.render();
      }
    }
  }
  console.log("getting new images");
  callImages();
}
callImages();


var lsProducts = localStorage.getItem('products');
if(lsProducts != null) {
  products = JSON.parse(lsProducts);
  // buildChart();
  // chart.render();
};


//localStorage.clear();
