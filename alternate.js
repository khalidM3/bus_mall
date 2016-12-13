'use strict';


var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');


var allProducts = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];
var clickCounter = 0;

// Global variables
// -----------------


// Constructor
// -----------------
function Product(name) {
  this.name = name;
  this.filepath = 'images/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

for(var i = 0; i < names.length; i++){
  new Product(names[i]);
}

function rand() {
  return Math.floor(Math.random() * allProducts.length);
}


function arrayOfThreeNumbers() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    // console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    // console.log('fixed');
  }

  newArray[1] = rand();

  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[1] = rand();
    // console.log('caught dupes between 1st and 2nd numbers');
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[2] = rand();
    // console.log('caught a dupe with the 3rd number');
  }
}



function showThreePics() {
  arrayOfThreeNumbers();

  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views +=1;

}

// function renderList() {
//   // display a list of items and total clicks/views
// }



function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // console.log(event.target, 'was clicked');
  // alert for clicks not on images
  if(event.target.id === 'pic-container'){
    return alert('Click on a picture! Not the Background!');
  }
  if (event.target.id === 'left'){
    allProducts[newArray[0]].clicks += 1;
    console.log(allProducts[newArray[0]]);
  }

  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
    console.log(allProducts[newArray[1]]);
  }

  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
    console.log(allProducts[newArray[2]]);
  }
  // tally the click
  clickCounter += 1;

  // check whether total clicks <25
  if (clickCounter > 5){
    return('You outta click!')
  }
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
  // clear old images
  // display 3 new images
  showThreePics();
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
picContainer.allEventListener('click', handleClick);