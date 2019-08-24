//define functions here
function getIt() {
  $('p').on('click', function () {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
    $('img').css( "background-color", "red" );
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which == )
  }
}

$(document).ready(function(){

getIt();
frameIt();

//call function here
  
});
