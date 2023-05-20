$(document).ready(function(){

});



document.addEventListener('contextmenu', event => event.preventDefault());


window.addEventListener('keydown', function (e) {

// if the keyCode is 16 ( shift key was pressed )
if (e.key == 'F12' || e.key == 'Ctrl' || e.key == 's' || e.key == 'S') {

// prevent default behaviour
e.preventDefault();

return false;
}

});






const disableselect = (e) => {  
    return false  
  }  
  document.onselectstart = disableselect  
  document.onmousedown = disableselect