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


$(document).ready(function(){

getIt();
frameIt();

//call function here
  
});
