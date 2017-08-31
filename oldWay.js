//old way of doing things, prior to jQuery

var div = document.getElementById('container')

function randomColor() {
  var rgb1 = Math.floor(Math.random() * 10);
  var rgb2 = Math.floor(Math.random() * 10);
  var rgb3 = Math.floor(Math.random() * 10);
  return `#${rgb1}${rgb2}${rgb3}`;
}

div.onclick = function() {
  this.style.backgroundColor = randomColor();
  console.log('clicked')
};

var input = document.getElementById('input')
var password = document.getElementById('password')
var button = document.getElementById('button')
var username = "Jacob"
var myPass = "hey"

button.onclick = function(){
  if(username === input.value && myPass === password.value) {
    console.log('You are in!')
  }
}

//jQuery is a library in javascript, which makes things easier to do than writing 'vanilla' javascript (the most used library on the internet) ***libscore***
