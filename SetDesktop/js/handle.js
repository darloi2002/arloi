

// Handle Screen
const screenBtn = document.querySelector('.fullscreen')
const screenIcon = document.querySelector('#screen_icon')
var fullscreen = false;
var elem = document.documentElement;

screenBtn.addEventListener('click',() => {
    if (fullscreen === false) {
        openFullscreen();
        screenIcon.innerHTML = 'fullscreen_exit';
        fullscreen = true;
    }else{
        closeFullscreen();
        screenIcon.innerHTML = 'fullscreen';
        fullscreen = false;
    }
})

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


// Handle Settings
const settingsBtn = document.querySelector('.settings_btn');
const settings = document.querySelector('.settings');
var settingHide = true;
settingsBtn.addEventListener('click', ()=>{
    if(settingHide){
        settings.style.opacity = "1";
        settingHide = false;
    }else{
        settings.style.opacity = "0";
        settingHide = true;
    }
})