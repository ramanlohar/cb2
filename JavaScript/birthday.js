function wishbirthday() {
  const balloon = document.createElement("img");
  balloon.classList.add("balloon");
  balloon.src = "../images/balloons.png";
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

if(currentDay == 2 && currentMonth == 2){
    if(panchayat_name == 'Raman Lohar' || panchayat_name == ''){
        wishbirthday()
    }
}