//Custom jQuery for submit and reset form validation buttons

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

//Custom event listener calls an h3 by ID and adds a box to highlight the CTA on mouseover
var hThree = document.getElementById( 'hThree' );

hThree.addEventListener( 'mouseover', function() {
  hThree.className = 'box';
})

//Custom jQuery adds a border to the h4's by altering the CSS
$(document).ready(function(){
    var h4 = $("h4");
    h4.css({
        'color': '$teal',
        'border-bottom': 'solid'
    });
});

//Functionality for Tooltip plug-in:
$(document).ready(function() {
    $('.tooltip').tooltipster();
});
