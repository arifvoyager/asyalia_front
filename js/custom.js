var wrap = $("#sliderFix");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 100) {
    wrap.addClass("fixed-slider");
  } else {
    wrap.removeClass("fixed-slider");
  }
  
});

var header = $("#sliderFix");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if (scroll >= 600) {
        $("#dress").css({"padding-top":"90px"});
        header.addClass("fixed-slider");
        $(".sub-footer").css({"margin-bottom":"150x"});

      } else {
        $("#dress").css({"padding-top":"140px"});
        header.removeClass("fixed-slider");
      }
});

// Navigasi Scroll

// All Section

var dressSec = $("#dress").position().top;
var typeSec = $("#type").position().top - 100;
var colorSec = $("#color").position().top - 120;
var sizeSec = $("#size").position().top + 90;
var lenghtSec = $("#lenght").position().top + 370;
var khimarSec = $("#khimar").position().top + 100;
var niqobSec = $("#niqob").position().top + 150;

// Button Slider
$("#buttonDress").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: dressSec
  }, 500);
});

$("#buttonType").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: typeSec
  }, 500);
});

$("#buttonColor").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: colorSec
  }, 500);
});

$("#buttonSize").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: sizeSec
  }, 500);
});

$("#buttonLenght").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: lenghtSec
  }, 500);
});

$("#buttonKhimar").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: khimarSec
  }, 500);
});

$("#buttonNiqob").click(function (){
  $('html, body').stop(true, false).animate({
      scrollTop: niqobSec
  }, 500);
});

// $("#nextButton").click(function (){
//   $('html, body').stop(true, false).animate({
//       scrollTop: dressSec
//   }, 500);
// });

var $w = $(window).scroll(function(){
  
    if ( $w.scrollTop() < dressSec ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: dressSec
        }, 500);
      });
      $("#nextButton").html('PILIH DRESS');
    }
    if ( $w.scrollTop() > dressSec && $w.scrollTop() <= typeSec) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: typeSec
        }, 500);
      });
      $("#nextButton").html('PILIH TYPE');
    }
    if ( $w.scrollTop() > typeSec ) {   
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: colorSec
        }, 500);
      });
      $("#nextButton").html('PILIH COLOR');
    } else {
      $("#nextButton").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#dress").offset().top
        }, 500);
      });
    }
});

// Single Checkbox
$('input[type="checkbox"]').on('change', function() {
  $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});

$('input[name="dressCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgDress").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgDress").attr("src","/img/icons/1.jpg");
});

$('input[name="typeCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgType").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgType").attr("src","/img/icons/2.jpg");
}); 

$('input[name="colorCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgColor").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgColor").attr("src","/img/icons/3.jpg");
}); 

$('input[name="sizeCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgSize").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgSize").attr("src","/img/icons/4.jpg");
}); 

$('input[name="lenghtCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imglenght").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imglenght").attr("src","/img/icons/1.jpg");
}); 

$('input[name="khimarCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgKhimar").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgKhimar").attr("src","/img/icons/1.jpg");
}); 

$('input[name="niqobCheck[]"]').click(function() {
  if($(this).is(":checked"))
    $("#imgNiqob").attr("src","/img/icons/check_circle-24px.svg");
  if(!$(this).is(":checked"))
    $("#imgNiqob").attr("src","/img/icons/1.jpg");
}); 

$('input[type="checkbox"]').on('change', function() {

  if($(this).is('input[name="dressCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: typeSec
      }, 500);
    if($(this).is('input[name="typeCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: colorSec
      }, 500);
    if($(this).is('input[name="colorCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: sizeSec
      }, 500);
    if($(this).is('input[name="sizeCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: lenghtSec
      }, 500);
    if($(this).is('input[name="lenghtCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: khimarSec
      }, 500);
    if($(this).is('input[name="khimarCheck[]"]'))
      $('html, body').stop(true, false).animate({
        scrollTop: niqobSec
      }, 500);
});

