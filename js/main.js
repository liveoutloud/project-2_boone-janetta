//5 lines of javascript

//Form button validation
$(function(){
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').attr('disabled', 'disabled').hasClass('.button--disabled').removeClass('button--primary');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });
})

//More custom Javascript: This event listener adds a box to the h3 to highlight the Call To Action when it is moused-over.
var hThree = document.getElementById( 'hThree' );

hThree.addEventListener( 'mouseover', function() {
  hThree.className = 'box';
})

//Custom jquery: ready function calls all h4's and adds a border to the bottom of each h4 article headline.
$(document).ready(function(){
    var h4 = $("h4");
    h4.css({
        'color': '$teal',
        'border-bottom': 'solid'
    });
});
