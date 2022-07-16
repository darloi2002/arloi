// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

function loader() {
    document.querySelector('.loader').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 4000)
}

fadeOut();