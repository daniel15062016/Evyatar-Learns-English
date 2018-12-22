var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-white.png') {
      myImage.setAttribute ('src','images/logo-green.png');
    }
    else if(mySrc === 'images/logo-green.png') {
      myImage.setAttribute ('src','images/logo-blue.png');
    }
    else if(mySrc === 'images/logo-blue.png') {
      myImage.setAttribute ('src','images/logo-red.png');
    }
    else if(mySrc === 'images/logo-red.png') {
      myImage.setAttribute ('src','images/logo-grey.png');
    }
    else if(mySrc === 'images/logo-grey.png') {
      myImage.setAttribute ('src','images/logo-purple.png');
    }
     else{
      myImage.setAttribute ('src','images/logo-white.png');
    }
  }

/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-white.png') {
      myImage.setAttribute ('src','images/logo-green.jpg');
    }
    else if (mySrc === 'images/logo-green.png') {
      myImage.setAttribute ('src','images/logo-grey.jpg');
    }
    else {
    myImage.setAttribute ('src','images/logo-white.png');
    }
*/
