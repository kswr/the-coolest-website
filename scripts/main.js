// myHeading.textContent = 'Darkhtrone is kvlt';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// if (3 > '2') {
//   alert('Yay, I love chocolate ice cream!');
// } else {
//   alert('Awwww, but chocolate is my favorite...');
// }

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/darkthrone-logo.jpg') {
        myImage.setAttribute('src', 'images/darkthrone-cover.jpg')
    } else {
        myImage.setAttribute('src', 'images/darkthrone-logo.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var storedName = localStorage.setItem('name', 'Robert')
myHeading.innerHTML = 'Darkhtrone is kvlt, ' + storedName;

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Darkthrone is kvlt, ' + myName;
}

// if(!localStorage.getItem('name') || localStorage.getItem('name')=='null') {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.innerHTML = 'Darkthrone is kvlt, ' + storedName;
// }

myButton.onclick = function() {
  setUserName();
}
