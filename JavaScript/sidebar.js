var sidebar = document.getElementById('sidebar');
var menuIcon = document.getElementById('menu-icon');
var closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', function () {
    sidebar.style.left = '0';
    sidebar.style.transition = '0.3s';
});

closeBtn.addEventListener('click', function () {
    // sidebar.style.left = '-250px';
    sidebar.style.transition = '1s';
    sidebar.style.left = '-100vw';
});

var startTouchX, startTime;

document.body.addEventListener('touchstart', function (event) {
    startTouchX = event.touches[0].clientX;
    startTime = Date.now();
});

document.body.addEventListener('touchend', function (event) {
    var endTime = Date.now();
    var duration = endTime - startTime;
    var touchX = event.changedTouches[0].clientX;

    // Calculate speed
    var speed = Math.abs((touchX - startTouchX) / duration);

    // If sliding to the left quickly, close the sidebar
    if (touchX < startTouchX && speed > 0.2) {
        // sidebar.style.left = '-250px';
        // sidebar.style.left = '-250px';
        sidebar.style.left = '-100vw';
    }
});

document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the sidebar or menu icon
    if (!sidebar.contains(event.target) && event.target.id !== 'menu-icon') {
        // sidebar.style.left = '-250px';
        sidebar.style.left = '-100vw';
    }
});


function redledger(){
    window.location.href  = "HTML/le.html"
}
function redvender(){
    
    window.location.href  = "HTML/ve.html"
}
function redkary(){
    
    window.location.href  = "HTML/ka.html"
    
}
function redaayvyay(){
    
    window.location.href  = "HTML/aayvyay.html"
}