$(function(){
// slideshow for home page
var count = -1;
var image = ["mountain.jpg", "background.jpg", "landing.jpg"];
var defaultImage = image[0];
var time = 9000;

// show each image fade in and fade out every 3 seconds
// switch the backrground images
// reload the entire array of images
function changeImage(){
     count+=1;

      $('.banner_container').css({
        "background": "url('images/"+image[count]+"') no-repeat",
        "background-size": "cover",
        "width": 100+"%",
        "height": 875+"px",
        "transition": "background "+2+"sec ease-in-out"
      });
     // console.log("images", image[count]);

      if(count == image.length-1){
        count=-1;
      //  console.log("the count", count);
      }
  }

// show next image every nine seconds
setInterval(function(){
 changeImage();
}, time);

});
