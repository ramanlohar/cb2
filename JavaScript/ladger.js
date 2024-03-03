function madvalues() {
  let madFormData = localStorage.getItem("madFormData");

  if (madFormData && madFormData.length > 0) {
    // Display the retrieved data
    madFormData = JSON.parse(madFormData); // Parse the string into an array

    madFormData.forEach((data, index) => {
      var partiaay = data.textValue;
      var aayN = data.numberValue;
      var aayB = data.numberValue2;
      var vyayN = 0;
      var vyayB = 0;

      console.log(partiaay, aayB, aayN);

      combine(partiaay, aayB, aayN);

      // Calculate something using vyayN and vyayB?
      // Example: vyayN = aayN * someValue;
      // Example: vyayB = aayB * someValue;
    });
  }
}

let array1 = [];
let array3 = [];
let rbFormCount = localStorage.getItem("rbFormCount");
function save() {
  for (let index = 0; index <= rbFormCount; index++) {
    let rbData = localStorage.getItem("rbData" + index);

    if (rbData) {
      let = rbDatavalue = JSON.parse(rbData);
      if (rbDatavalue["r_Bajt LS"]) {
        if (rbDatavalue["r_Bajt LS"] !== " ") {
          if (array1.length == 0) {
            array1.push(rbDatavalue["r_Bajt LS"]);
          } else {
            let available;
            let ar1lv = array1.length - 1;
            for (j = 0; j < array1.length; j++) {
              if (array1[j] == rbDatavalue["r_Bajt LS"]) {
                available = true;
              }
            }
            if (!available) {
              array1.push(rbDatavalue["r_Bajt LS"]);
            }
          }
        }
      }

      ///////////////////////////////

      if (rbDatavalue["b_Bajt LS"]) {
        if (rbDatavalue["b_Bajt LS"] !== " ") {
          if (array3.length == 0) {
            array3.push(rbDatavalue["b_Bajt LS"]);
          } else {
            let available;
            let ar1lv = array3.length - 1;
            for (j = 0; j < array1.length; j++) {
              if (array3[j] == rbDatavalue["b_Bajt LS"]) {
                available = true;
              }
            }
            if (!available) {
              array3.push(rbDatavalue["b_Bajt LS"]);
            }
          }
        }
      }

      //////////////////////////////

      // console.log(rbDatavalue["r_Bajt LS"])
      // console.log(rbDatavalue["b_Bajt LS"])
      console.log(array1);
      console.log(array3);
      // if(){
      // }
    }
  }
}

let array2 = [];
let array4 = [];
function calculatevalues() {
  for (i = 0; i < array1.length; i++) {
    let Btotalvalue = 0;
    let Ntotalvalue = 0;
    let madname;
    for (let index = 0; index <= rbFormCount; index++) {
      let rbData = localStorage.getItem("rbData" + index);

      //   console.log(rbDatavalue["r_Bajt LS"]);

      if (rbData) {
        let = rbDatavalue = JSON.parse(rbData);
        if (array1[i] == rbDatavalue["r_Bajt LS"]) {
          let Btv = rbDatavalue["r_Bank Rashi"];
          let Ntv = rbDatavalue["r_Nagad Rashi"];
          Btotalvalue = Btotalvalue + parseFloat(Btv);
          Ntotalvalue = Ntotalvalue + parseFloat(Ntv);
          madname = rbDatavalue["r_Bajt LS"];
        }
        // totalvalue
      }
    }
    let data = {
      r_Bajt: madname,
      Btotalvalue: Btotalvalue,
      Ntotalvalue: Ntotalvalue,
    };
    array2.push(data);
  }

  ///////////////////////

  for (i = 0; i < array3.length; i++) {
    let Btotalvalue = 0;
    let Ntotalvalue = 0;
    let madname;
    for (let index = 0; index <= rbFormCount; index++) {
      let rbData = localStorage.getItem("rbData" + index);

      //   console.log(rbDatavalue["r_Bajt LS"]);

      if (rbData) {
        let = rbDatavalue = JSON.parse(rbData);
        if (array3[i] == rbDatavalue["b_Bajt LS"]) {
          let Btv = rbDatavalue["b_Bank Rashi"];
          let Ntv = rbDatavalue["b_Nagad Rashi"];
          Btotalvalue = Btotalvalue + parseFloat(Btv);
          Ntotalvalue = Ntotalvalue + parseFloat(Ntv);
          madname = rbDatavalue["b_Bajt LS"];
        }
        // totalvalue
      }
    }
    let data = {
      r_Bajt: madname,
      Btotalvalue: Btotalvalue,
      Ntotalvalue: Ntotalvalue,
    };
    array4.push(data);
  }

  ////////////
}

function combine(partiaay, aayB, aayN) {
  let available = false; // Initialize available as false
  let availableindexat = 0;
  for (let index = 0; index < array2.length; index++) {
    let arvalue = array2[index];
    if (arvalue["r_Bajt"] === partiaay) {
      available = true;
      availableindexat = index;
      break; // Exit the loop once a match is found
    }
  }
  if (available) {
    // Update the values in the found object
    array2[availableindexat]["Btotalvalue"] += aayB;
    array2[availableindexat]["Ntotalvalue"] += aayN;

    console.log(availableindexat + " done");
  } else {
    let data = {
      r_Bajt: partiaay,
      Btotalvalue: aayB,
      Ntotalvalue: aayN,
    };
    array2.push(data);
  }
}

////////////////////////////////////////////////////////////////

save();
calculatevalues();
madvalues();
console.log(array2);
console.log(array4);

let array6 = [];

for (let a = 0; a < array2.length; a++) {
  let ar2value = array2[a];
  let foundMatch = false; // Initialize a flag to track if a match is found

  for (let b = 0; b < array4.length; b++) {
    let ar4value = array4[b];

    if (ar2value["r_Bajt"] === ar4value["r_Bajt"]) {
      foundMatch = true; // Set the flag to true if a match is found

      var finaldata = {
        bjat: ar2value["r_Bajt"],
        ABtotal: ar2value["Btotalvalue"],
        ANtotal: ar2value["Ntotalvalue"],
        VBtotal: ar4value["Btotalvalue"],
        VNtotal: ar4value["Ntotalvalue"],
        yBtotal: ar2value["Btotalvalue"] - ar4value["Btotalvalue"],
        yNtotal: ar2value["Ntotalvalue"] - ar4value["Ntotalvalue"],
      };

      array6.push(finaldata);

      break; // Exit the loop once a match is found
    }
  }

  if (!foundMatch) { // If no match is found for ar2value, add default values
    var finaldata = {
      bjat: ar2value["r_Bajt"],
      ABtotal: ar2value["Btotalvalue"],
      ANtotal: ar2value["Ntotalvalue"],
      VBtotal: 0, // Assuming default values
      VNtotal: 0, // Assuming default values
      yBtotal: ar2value["Btotalvalue"],
      yNtotal: ar2value["Ntotalvalue"],
    };

    array6.push(finaldata);
  }
}

console.log(array6);


for (let index = 0; index < array6.length; index++) {
  let a6value = array6[index];
  let bjat = a6value["bjat"];
  let ABtotal = a6value["ABtotal"];
  let ANtotal = a6value["ANtotal"];
  let VBtotal = a6value["VBtotal"];
  let VNtotal = a6value["VNtotal"];
  let yBtotal = a6value["yBtotal"];
  let yNtotal = a6value["yNtotal"];

  const display = document.getElementById("display");
  let ladger_box = document.createElement("div");
  ladger_box.id = "ladger_box";
  ladger_box.innerHTML = `
            <p>${bjat}</p>
            <div>
                <table>
                    <tr>
                        <th>वर्ग</th>
                        <th>आय</th>
                        <th>व्यय</th>
                        <th>योग</th>
                    </tr>
                    <tr>
                        <td>bank</td>
                        <td>${ABtotal}</td>
                        <td>${VBtotal}</td>
                        <td>${yBtotal}</td>
                        </tr>
                        <tr>
                        <td>nagad</td>
                        <td>${ANtotal}</td>
                        <td>${VNtotal}</td>
                        <td>${yNtotal}</td>
                    </tr>
                </table>
            </div> `;

  display.appendChild(ladger_box);
}
console.log(array4);
