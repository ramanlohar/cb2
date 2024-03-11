let aayN = 0;
let aayB = 0;

let caayN = 0;
let caayB = 0;

let cvyayN = 0;
let cvyayB = 0;

function madvalues() {
    let madFormData = localStorage.getItem("madFormData");

    if (madFormData && madFormData.length > 0) {
        madFormData = JSON.parse(madFormData);

        madFormData.forEach((data, index) => {
            if (data && typeof data.numberValue !== "undefined" && typeof data.numberValue2 !== "undefined") {
                aayN += data.numberValue;
                aayB += data.numberValue2;
            }
        });

        console.log("aayN:", aayN);
        console.log("aayB:", aayB);
    }
}

let array1 = [];
let array3 = [];
let rbFormCount = localStorage.getItem("rbFormCount");

function save() {
    for (let index = 0; index <= rbFormCount; index++) {
        let rbData = localStorage.getItem("rbData" + index);

        if (rbData) {
            let rbDatavalue = JSON.parse(rbData);
            if (rbDatavalue["r_Bajt LS"] && rbDatavalue["r_Bajt LS"] !== " ") {
                if (array1.length == 0) {
                    array1.push(rbDatavalue["r_Bajt LS"]);
                } else {
                    let available = false;
                    for (let j = 0; j < array1.length; j++) {
                        if (array1[j] == rbDatavalue["r_Bajt LS"]) {
                            available = true;
                            break;
                        }
                    }
                    if (!available) {
                        array1.push(rbDatavalue["r_Bajt LS"]);
                    }
                }
            }

            if (rbDatavalue["b_so"]) {
                if (array3.length == 0) {
                    array3.push(rbDatavalue["b_so"]);
                } else {
                    let available = false;
                    for (let j = 0; j < array3.length; j++) {
                        if (array3[j] == rbDatavalue["b_so"]) {
                            available = true;
                            break;
                        }
                    }
                    if (!available) {
                        array3.push(rbDatavalue["b_so"]);
                    }
                }
            }

            console.log(array1);
            console.log(array3);
        }
    }
}

let array2 = [];
let array4 = [];

function calculatevalues() {
    for (let i = 0; i < array1.length; i++) {
        let Btotalvalue = 0;
        let Ntotalvalue = 0;
        let madname;
        for (let index = 0; index <= rbFormCount; index++) {
            let rbData = localStorage.getItem("rbData" + index);

            if (rbData) {
                let rbDatavalue = JSON.parse(rbData);
                if (array1[i] == rbDatavalue["r_Bajt LS"]) {
                    let Btv = rbDatavalue["r_Bank Rashi"] || 0;
                    let Ntv = rbDatavalue["r_Nagad Rashi"] || 0;
                    Btotalvalue += parseFloat(Btv);
                    Ntotalvalue += parseFloat(Ntv);
                    madname = rbDatavalue["r_Bajt LS"];
                }
            }
        }
        let data = {
            S: i + 1,
            r_Bajt: madname,
            Btotalvalue: Btotalvalue,
            Ntotalvalue: Ntotalvalue,
        };
        caayB += Btotalvalue;
        caayN += Ntotalvalue;
        array2.push(data);
    }

    for (let i = 0; i < array3.length; i++) {
        let Btotalvalue = 0;
        let Ntotalvalue = 0;
        let madname;
        for (let index = 0; index <= rbFormCount; index++) {
            let rbData = localStorage.getItem("rbData" + index);

            if (rbData) {
                let rbDatavalue = JSON.parse(rbData);
                if (array3[i] == rbDatavalue["b_so"]) {
                    let Btv = rbDatavalue["b_Bank Rashi"] || 0;
                    let Ntv = rbDatavalue["b_Nagad Rashi"] || 0;
                    Btotalvalue += parseFloat(Btv);
                    Ntotalvalue += parseFloat(Ntv);
                    madname = rbDatavalue["b_so"];
                }
            }
        }
        let data = {
            S: i + 1,
            r_Bajt: madname,
            Btotalvalue: Btotalvalue,
            Ntotalvalue: Ntotalvalue,
        };
        cvyayB += Btotalvalue;
        cvyayN += Ntotalvalue;
        array4.push(data);
    }
}

let array7 = [];

function combinea() {
    let lengthofarry = Math.max(array1.length, array3.length);

    for (let index = 0; index < lengthofarry; index++) {
        let data = {
            S1: array2[index] ? array2[index]["S"] || "" : "",
            mad: array2[index] ? array2[index]["r_Bajt"] || "" : "",
            rbank: array2[index] ? array2[index]["Btotalvalue"] || "" : "",
            rnagad: array2[index] ? array2[index]["Ntotalvalue"] || "" : "",
            S2: array4[index] ? array4[index]["S"] || "" : "",
            kary: array4[index] ? array4[index]["r_Bajt"] || "" : "",
            bbank: array4[index] ? array4[index]["Btotalvalue"] || "" : "",
            bnagad: array4[index] ? array4[index]["Ntotalvalue"] || "" : "",
        };

        array7.push(data);
    }
}

function display_value() {
    for (let index = 0; index < array7.length; index++) {
        S1 = array7[index]["S1"];
        mad = array7[index]["mad"];
        rbank = array7[index]["rbank"];
        rnagad = array7[index]["rnagad"];
        S2 = array7[index]["S2"];
        kary = array7[index]["kary"];
        bbank = array7[index]["bbank"];
        bnagad = array7[index]["bnagad"];

        display_value2(S1, mad, rbank, rnagad, S2, kary, bbank, bnagad);
    }
}

function display_value3() {
    for (let i = 0; i < 3; i++) {
        display_value2("", "", "", "", "", "", "", "");
    }

    display_value2("", "आय", caayB, caayN, "", "व्यय", cvyayB, cvyayN);
    display_value2("", "पूर्व शेष", aayB, aayN, "", "शेष", caayB + aayB - cvyayB, caayN + aayN - cvyayN);
    display_value2("", "योग", caayB + aayB, caayN + aayN, "", "योग", caayB + aayB, caayN + aayN);
}

// Call the functions
save();
calculatevalues();
madvalues();
combinea();
display_value();
display_value3();

// Output the results
console.log(array2);
console.log(array4);
console.log(array7);

function display_value2(S1, mad, rbank, rnagad, S2, kary, bbank, bnagad) {
    const display = document.getElementById("display_table");
    let ladger_box = document.createElement("tr");
    ladger_box.innerHTML = `
        <td>${S1}</td>
        <td>${mad}</td>
        <td>${formatNumber(rbank)}</td>
        <td>${formatNumber(rnagad)}</td>
        <td>${S2}</td>
        <td>${kary}</td>
        <td>${formatNumber(bbank)}</td>
        <td>${formatNumber(bnagad)}</td>
    `;
    display.appendChild(ladger_box);
}

function formatNumber(number) {
  // Check if the provided value is a valid number
  if (typeof number !== 'number' || isNaN(number)) {
      return number; // Return the value as is if it's not a valid number
  }

  // Check if the number has a decimal part
  if (Number.isInteger(number)) {
      return number.toString(); // Return the number as is if it's an integer
  } else {
      return number.toFixed(2); // Return the number with two decimal places
  }
}