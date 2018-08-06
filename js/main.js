//Write 5 lines of custom javascript in here

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


//This event listener puts a box around the <h3> when it is moused-over.

var hThree = document.getElementById( 'hThree' );

hThree.addEventListener( 'mouseover', function() {
  hThree.className = 'box';
})
