// JavaScript (twohome.js)

// Variable to keep track of initial pinch distance
let initialPinchDistance = 0;

// Function to handle touch start event
function handleTouchStart(event) {
    if (event.touches.length === 2) {
        // Calculate initial pinch distance
        initialPinchDistance = Math.hypot(
            event.touches[0].clientX - event.touches[1].clientX,
            event.touches[0].clientY - event.touches[1].clientY
        );
    }
}

// Function to handle touch move event
function handleTouchMove(event) {
    if (event.touches.length === 2) {
        // Calculate current pinch distance
        const currentPinchDistance = Math.hypot(
            event.touches[0].clientX - event.touches[1].clientX,
            event.touches[0].clientY - event.touches[1].clientY
        );

        // Calculate pinch scale ratio
        const pinchScale = currentPinchDistance / initialPinchDistance;

        // Zoom in or zoom out the table based on pinch scale
        const table = document.querySelector("table");
        table.style.transform = `scale(${pinchScale})`;
    }
}

// Function to handle touch end event
function handleTouchEnd() {
    // Reset initial pinch distance after touch ends
    initialPinchDistance = 0;
}

// Add event listeners for touch events
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);
