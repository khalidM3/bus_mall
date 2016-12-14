'use strict';


var picContainer = document.getElementById('picContainer');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');


var allProducts = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newArray = [];
var oldArray = [];
var clickCounter = 0;
var clicked = [];
var viewed =[];

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



function createThreePics() {
  arrayOfThreeNumbers();

  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views +=1;

}

function handleClick(event) {
  event.preventDefault();

  if(event.target.id === 'picContainer'){
    return alert('Click on a picture! Not the Background!');
  }
  if (event.target.id === 'left'){
    allProducts[newArray[0]].clicks += 1;
  }

  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
  }

  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
  }

  clickCounter += 1;

  if (clickCounter > 25){
    return('You ran out of clicks!')
  }
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
  // clear old images
  // display 3 new images
  createThreePics();
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

createThreePics();
picContainer.addEventListener('click', handleClick);


//chart below//
//
// var showButton = document.getElementById('displayButton');
// showButton.addEventListener('click', displayChart);

var displayChart = document.getElementById("myChart").getContext("2d");
var createChart = new Chart (displayChart, {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
    datasets: [{
      label: 'Number of Clicks',
      yAxisGroup: '1',
      data: clicked,
      backgroundColor: [
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
        'rgb(128, 223, 255)',
      ],
      borderColor: [
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
        'rgb(0, 51, 102)',
      ],
      borderWidth: 1,
    },{
      label: 'Number of Views',
      type: "bar",
      yAxisGroup: "2",
      data: viewed,
      backgroundColor: [
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
        'rgb(26, 255, 102)',
      ],
      borderColor: [
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
        'rgb(0, 102, 34)',
      ],
      borderWidth: 1,
    }]
  },
  options: {
    scales: {
      yAxis: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
