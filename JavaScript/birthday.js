function wishbirthday() {
    //   birthdayimage
    birthdayimage = localStorage.getItem("birthdayimage");

  const balloon = document.createElement("img");
  balloon.classList.add("balloon");
  balloon.src = birthdayimage;
//   balloon.src = "../images/balloons.png";
  document.body.appendChild(balloon);


  const balloonStyle = balloon.style;
  balloonStyle.position = "fixed";
  balloonStyle.scale = "0.8";
  balloonStyle.left = "50%";
  balloonStyle.top = "100%";
  balloonStyle.transform = "translate(-50%, -50%) scale(0.8)";
  balloonStyle.padding = "10px";
  balloonStyle.borderRadius = "5px";
  balloonStyle.zIndex = "5";

  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
            @keyframes flyingBalloon {
                0% { bottom: 0px; }
                100% { top: -100%; }
            }

            @keyframes floatingBalloon {
                0% { transform: translateX(-60%) translateY(0) rotate(3deg); }
                100% { transform: translateX(-63%) rotate(-3deg); }
            }

            

            .balloon {
                animation: flyingBalloon 28s ease-in-out infinite, floatingBalloon 2s ease-in-out infinite alternate;
            }
        `;
  document.head.appendChild(styleElement);
}

function birthdaymsg(){
// Create a div element for the popup message
const popupDiv = document.createElement('div');
popupDiv.style.position = 'fixed';
popupDiv.style.top = '-100px'; // Initially position off-screen from the top
popupDiv.style.left = '50%';
popupDiv.style.transform = 'translateX(-50%)';
popupDiv.style.backgroundColor = '#fffd97'; // Yellow background color
popupDiv.style.padding = '20px';
popupDiv.style.border = '2px solid #ff6600'; // Orange border color
popupDiv.style.borderRadius = '10px';
popupDiv.style.zIndex = '9999';
popupDiv.style.animation = 'flyIn 0.5s forwards'; // Fly-in animation
popupDiv.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'; // Add shadow for better visibility

// Create a paragraph element for the birthday message
const messageParagraph = document.createElement('p');
messageParagraph.textContent = 'जन्मदिन की ढेर सारी शुभकामनाएँ, पिताजी! 🎉 और भी अधिक शुभकामनाएँ। 🎂 आपको जितनी खुशी इस समय हो रही है, वह खुशी हमेशा बनी रहे, यही मैं भगवान से प्रार्थना करता हूँ। 🙏';
messageParagraph.style.fontFamily = 'Arial, sans-serif';
messageParagraph.style.fontSize = '18px';
messageParagraph.style.textAlign = 'center';
messageParagraph.style.color = '#ff6600'; // Orange text color

// Append the message paragraph to the popup div
popupDiv.appendChild(messageParagraph);

// Create a close button for the popup
const closeButton = document.createElement('button');
closeButton.innerHTML = '&#10006;';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.background = 'none';
closeButton.style.border = 'none';
closeButton.style.cursor = 'pointer';

// Add click event listener to close the popup
closeButton.addEventListener('click', function() {
    var birthdaymsgl = localStorage.getItem("birthdaymsg")
    if(birthdaymsgl == ''){
        localStorage.setItem("birthdaymsg",1)        
    }else{
        birthdaymsgl = localStorage.getItem("birthdaymsg")
        birthdaymsgl++;
        localStorage.setItem("birthdaymsg",birthdaymsgl)
    }

    popupDiv.style.animation = 'flyOut 1.5s forwards'; // Fly-out animation
    setTimeout(() => {
        document.body.removeChild(popupDiv);
    }, 500);
});

// Append the close button to the popup div
popupDiv.appendChild(closeButton);

// Append the popup div to the document body
document.body.appendChild(popupDiv);

// Define CSS keyframes for fly-in and fly-out animations
const style = document.createElement('style');
style.innerHTML = `
@keyframes flyIn {
    from {
        top: -50%;
        transform: translateY(-50%)
        transform: translateX(-50%)
    }
    to {
        top: 35%;
        transform: translateY(50%)
        transform: translateX(50%)
    }
}

@keyframes flyOut {
    from {
        top: 35%;
    }
    to {
        top: -100%;
    }
}
`;
document.head.appendChild(style);

}

const currentDate = new Date();

// Get the current time
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();

// Get the current date
const currentDay = currentDate.getDate();
// Get the current month
const currentMonth = currentDate.getMonth() + 1; // Adding 1 because month starts from 0 (January)
// Get the current year
const currentYear = currentDate.getFullYear();

var panchaya_Data2 = localStorage.getItem("karyalayData");
    panchaya_Data2 = JSON.parse(panchaya_Data2);

    panchayat_name = panchaya_Data2["Panchayat Name"];

if(currentDay == 3 && currentMonth == 2){
    // धामनिया दीवान
    if(panchayat_name == 'धामनिया दीवान'){
        wishbirthday()
        var birthdaymsgl = localStorage.getItem("birthdaymsg")
        if(birthdaymsgl < 5){
            birthdaymsg()
        }
    }
}