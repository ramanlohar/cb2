// // JavaScript to handle sidebar toggle and close button
// document.getElementById('menu-icon').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '0';
// });

// document.getElementById('close-btn').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '-250px';
// });

// document.getElementById('menu-icon').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '0';
// });

// document.getElementById('close-btn').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '-250px';
// });

// document.body.addEventListener('click', function (event) {
//     // Check if the clicked element is not inside the sidebar
//     if (!document.getElementById('sidebar').contains(event.target) && event.target.id !== 'menu-icon') {
//         document.getElementById('sidebar').style.left = '-250px';
//     }
// });




var sidebar = document.getElementById('sidebar');
var menuIcon = document.getElementById('menu-icon');
var closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', function () {
    sidebar.style.left = '0';
});

closeBtn.addEventListener('click', function () {
    sidebar.style.left = '-250px';
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
        sidebar.style.left = '-250px';
    }
});

document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the sidebar or menu icon
    if (!sidebar.contains(event.target) && event.target.id !== 'menu-icon') {
        sidebar.style.left = '-250px';
    }
});
