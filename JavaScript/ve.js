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
  
        // combine(partiaay, aayB, aayN);
  
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
        if (rbDatavalue["b_fo"]) {
          if (rbDatavalue["b_fo"] !== " ") {
            if (array1.length == 0) {
              array1.push(rbDatavalue["b_fo"]);
            } else {
              let available;
              let ar1lv = array1.length - 1;
              for (j = 0; j < array1.length; j++) {
                if (array1[j] == rbDatavalue["b_fo"]) {
                  available = true;
                }
              }
              if (!available) {
                array1.push(rbDatavalue["b_fo"]);
              }
            }
          }
        }
  
        ///////////////////////////////
  
        if (rbDatavalue["b_fo"]) {
          if (rbDatavalue["b_fo"] !==" ") {
            if (array3.length == 0) {
              array3.push(rbDatavalue["b_fo"]);
            } else {
              let available;
              let ar1lv = array3.length - 1;
              for (j = 0; j < array1.length; j++) {
                if (array3[j] == rbDatavalue["b_fo"]) {
                  available = true;
                }
              }
              if (!available) {
                array3.push(rbDatavalue["b_fo"]);
              }
            }
          }
        }
  
        //////////////////////////////
  
        // console.log(rbDatavalue["b_fo"])
        // console.log(rbDatavalue["b_fo"])
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
  
        //   console.log(rbDatavalue["b_fo"]);
  
        if (rbData) {
          let = rbDatavalue = JSON.parse(rbData);
          if (array1[i] == rbDatavalue["b_fo"]) {
            let Btv = rbDatavalue["r_Bank Rashi"] || 0;
            let Ntv = rbDatavalue["r_Nagad Rashi"] || 0;
            Btotalvalue = Btotalvalue + parseFloat(Btv);
            Ntotalvalue = Ntotalvalue + parseFloat(Ntv);
            madname = rbDatavalue["b_fo"];
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
  
        //   console.log(rbDatavalue["b_fo"]);
  
        if (rbData) {
          let = rbDatavalue = JSON.parse(rbData);
          if (array3[i] == rbDatavalue["b_fo"]) {
            let Btv = rbDatavalue["b_Bank Rashi"] || 0;
            let Ntv = rbDatavalue["b_Nagad Rashi"] || 0;
            Btotalvalue = Btotalvalue + parseFloat(Btv);
            Ntotalvalue = Ntotalvalue + parseFloat(Ntv);
            madname = rbDatavalue["b_fo"];
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
    let foundMatch = false; 
  
    for (let b = 0; b < array4.length; b++) {
      let ar4value = array4[b];
  
      if (ar2value["r_Bajt"] === ar4value["r_Bajt"]) {
        foundMatch = true; 
  
        var finaldata = {
          bjat: ar2value["r_Bajt"],
        //   ABtotal: formatNumber(ar2value["Btotalvalue"]), // Format number
        //   ANtotal: formatNumber(ar2value["Ntotalvalue"]), // Format number
          VBtotal: formatNumber(ar4value["Btotalvalue"]), // Format number
          VNtotal: formatNumber(ar4value["Ntotalvalue"]), // Format number
        };
  
        array6.push(finaldata);
  
        break; 
      }
    }
  
    if (!foundMatch) { 
      var finaldata = {
        bjat: ar2value["r_Bajt"],
        ABtotal: formatNumber(ar2value["Btotalvalue"]), // Format number
        ANtotal: formatNumber(ar2value["Ntotalvalue"]), // Format number
        VBtotal: "0", // Default value without decimal
        VNtotal: "0", // Default value without decimal
        yBtotal: formatNumber(ar2value["Btotalvalue"]), // Format number
        yNtotal: formatNumber(ar2value["Ntotalvalue"]), // Format number
      };
  
      array6.push(finaldata);
    }
  }
  
  console.log(array6);
  
  function formatNumber(value) {
    let formattedValue = parseFloat(value).toFixed(2); // Fix to two decimal places
    return formattedValue.endsWith('.00') ? parseInt(value) : formattedValue; // Remove decimal part if it's .00
  }
  
  let totalR = 0
  let totalB = 0
  
  for (let index = 0; index < array6.length; index++) {
    let a6value = array6[index];
    let bjat = a6value["bjat"];
    let ABtotal = a6value["ABtotal"];
    let ANtotal = a6value["ANtotal"];
    let VBtotal = a6value["VBtotal"];
    let VNtotal = a6value["VNtotal"];
    let yBtotal = a6value["yBtotal"];
    let yNtotal = a6value["yNtotal"];
  
    totalR = totalR + parseFloat(a6value["VBtotal"]);
    totalB = totalB + parseFloat(a6value["VNtotal"]);

    let colorred1;
    let colorred2;
    if(VBtotal>=250000){
        colorred1 = "colorred"
    }
    if(VNtotal>=250000){
        colorred2 = "colorred"
    }
  
    const display = document.getElementById("display");
    let ladger_box = document.createElement("div");
    ladger_box.id = "ladger_box";
    ladger_box.innerHTML = `
    <div id="head_div">
              <p>${bjat}</p>
              
              </div>
              <div>
                  <table>
                      <tr>
                          <th>वर्ग</th>
                          
                          <th>व्यय</th>
                          
                      </tr>
                      <tr>
                          <td>बैंक राशि</td>
                          
                          <td class="${colorred1}">${VBtotal}</td>
                         
                          </tr>
                          <tr>
                          <td>नगद राशि</td>
                          
                          <td class="${colorred2}">${VNtotal}</td>
                          
                      </tr>
                  </table>
              </div> `;
  
              function viewpage(info){
                localStorage.setItem("ladger_info", info)
                window.location.href = "ladgerpage.html"
              }
  
    display.appendChild(ladger_box);
  }
  
  
  console.log(array4);
  console.log(totalR)
  console.log(totalB)
  
  document.getElementById("t_amount").innerHTML = " बैंक राशि : " + formatNumber(totalR) + "<br>" +  "नगद राशि : " + formatNumber(totalB);