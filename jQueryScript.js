//$ pretty much stands for jQuery, which is a function

//to create a jQuery document, we start our script file with the following, and all your jquery code will be placed within the callback function

//it will invoke the function once the document is ready and loaded, which is what the ready() function does

$(document).ready(function(){

  //login example
  var user = "Jacob"
  var pass = "hey"

  //use button and the .click to assign values and check for accuracy
  $('button').click(function(){
    var username = $('#input')
    var password = $('#password')
    
    if(!username.val()){
      username.css('border','2px solid red')
      $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please ensure username is provided </p>'
      );
    }

    if(!password.val()){
      password.css('border','2px solid red')
      $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please ensure password is provided </p>'
      );
    }

    if(username.val() && password.val()){

      username.css({
        'border-width':'2px',
        'border-style':'inset',
        'border-color':'initial',
        'border-image': 'initial'
      })

      password.css({
        'border-width':'2px',
        'border-style':'inset',
        'border-color':'initial',
        'border-image': 'initial'
      })

      if (username.val() === user && password.val() === pass) {
        alert("You're in!");
      } else $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please ensure your login info is correct </p>'
      );
    }
  })

})
