
/* MDN DOC */

//for shifting between two images on clicking
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/firefox-icon.png') {
      myImage.setAttribute('src','Images/firefox2.png');
    } else {
      myImage.setAttribute('src','Images/firefox-icon.png');
    }
}   

//taking input from the user with the help of a button then storing the same into a local storage... 
// ...and retreiving it to display on the heading(h1) of the webpage
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
