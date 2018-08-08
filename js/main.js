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

var hThree = document.getElementById( 'hThree' );

hThree.addEventListener( 'mouseover', function() {
  hThree.className = 'box';
})

$(document).ready(function(){
    var h4 = $("h4");
    h4.css({
        'color': '$teal',
        'border-bottom': 'solid'
    });
});
