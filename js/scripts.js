



var myCookie = {
  setCookie: function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
},

getCookie: function(cname){
 var name = cname + "=";
 var ca = document.cookie.split(';');
 for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
  }
}
return ""
},

checkCookie: function() {

  var user =  myCookie.getCookie("username");
  var userImage =  myCookie.getCookie("userImage");


  var myImage = new Image();

  myImage.setAttribute('class', 'thanos-image');
  document.body.appendChild(myImage);




  if (user != "") {
    if(userImage == "You survived the snap from Thanos. Be grateful for Your existence.") {
      myImage.src = 'images/survived.gif';
  } else {
      myImage.src = 'images/slayed.gif';
      // alert(myImage.src);
  }

     var div = document.createElement('div');
     div.textContent = user;
     div.setAttribute('class', 'thanos-message');
     document.body.appendChild(div);

} else {

    Thanosmessages = {
       "0": "You survived the snap from Thanos. Be grateful for Your existence.",
       "1":"You didn't survive Thanos's snap! Your death will be in gratitude.",
   }
   var randNumber = Math.floor(Math.random() * 2);

   if(randNumber == 0) {
      myImage.src = 'images/survived.gif';
  } else {
      myImage.src = 'images/slayed.gif';
      // alert(myImage.src);
  }


        // user = prompt("Please enter your name:", "");
        user = Thanosmessages[randNumber];
        // alert(user);
        userImage = Thanosmessages[randNumber];
        // alert(randNumber);

        if (user != "" && user != null) {
           myCookie.setCookie("username", user, 2);
           myCookie.setCookie("userImage", userImage, 2);
       }
   }

     // Append the random result of teh array onto a new dynamic div.

     var div = document.createElement('div');
     div.textContent = user;
     div.setAttribute('class', 'thanos-message');
     document.body.appendChild(div);


 },
 getImageResults: function() {

 },
 removeCookie: function(user , userImage) {
      // document.cookie = "cookie=username; expires=" + 0;
      myCookie.setCookie("username", user, -1);
      myCookie.setCookie("userImage", userImage, -1);
      // location.reload();
  },

  getAttributes: function() {
    var titleString = 'Did you Survive Thanos Snap?';
    document.title = titleString;

        // var metaString = document.getElementByTagName('meta')[0].content;
        // meta.name = 'viewport';

    }
}
$(document).ready(function() {
    myCookie.checkCookie();
    myCookie.getAttributes();
    // myCookie.removeCookie();


});