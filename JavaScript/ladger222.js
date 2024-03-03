let array1 = [];
let array3 = [];
let array2 = [];
let array4 = [];
let array5 = [];

function saveData() {
  let rbFormCount = localStorage.getItem("rbFormCount");

  for (let index = 0; index <= rbFormCount; index++) {
    let rbData = localStorage.getItem("rbData" + index);

    if (rbData) {
      let rbDatavalue = JSON.parse(rbData);

      if (rbDatavalue["r_Bajt LS"] && rbDatavalue["r_Bajt LS"] !== " ") {
        if (!array1.includes(rbDatavalue["r_Bajt LS"])) {
          array1.push(rbDatavalue["r_Bajt LS"]);
        }
      }

      if (rbDatavalue["b_Bajt LS"] && rbDatavalue["b_Bajt LS"] !== " ") {
        if (!array3.includes(rbDatavalue["b_Bajt LS"])) {
          array3.push(rbDatavalue["b_Bajt LS"]);
        }
      }
    }
  }
}

function calculateValues() {
  let rbFormCount = localStorage.getItem("rbFormCount");

  array1.forEach(madname => {
    let Btotalvalue = 0;
    let Ntotalvalue = 0;

    for (let index = 0; index <= rbFormCount; index++) {
      let rbData = localStorage.getItem("rbData" + index);

      if (rbData) {
        let rbDatavalue = JSON.parse(rbData);

        if (madname === rbDatavalue["r_Bajt LS"]) {
          Btotalvalue += parseFloat(rbDatavalue["r_Bank Rashi"]);
          Ntotalvalue += parseFloat(rbDatavalue["r_Nagad Rashi"]);
        }
      }
    }

    array2.push({
      r_Bajt: madname,
      Btotalvalue: Btotalvalue,
      Ntotalvalue: Ntotalvalue
    });
  });

  array3.forEach(madname => {
    let Btotalvalue = 0;
    let Ntotalvalue = 0;

    for (let index = 0; index <= rbFormCount; index++) {
      let rbData = localStorage.getItem("rbData" + index);

      if (rbData) {
        let rbDatavalue = JSON.parse(rbData);

        if (madname === rbDatavalue["b_Bajt LS"]) {
          Btotalvalue += parseFloat(rbDatavalue["b_Bank Rashi"]);
          Ntotalvalue += parseFloat(rbDatavalue["b_Nagad Rashi"]);
        }
      }
    }

    array4.push({
      r_Bajt: madname,
      Btotalvalue: Btotalvalue,
      Ntotalvalue: Ntotalvalue
    });
  });
}

function combineData() {
  array2.forEach(data => {
    let correspondingData = array4.find(item => item.r_Bajt === data.r_Bajt);

    if (correspondingData) {
      array5.push({
        r_Bajt: data.r_Bajt,
        ABtotal: data.Btotalvalue,
        ANtotal: data.Ntotalvalue,
        VBtotal: correspondingData.Btotalvalue,
        VNtotal: correspondingData.Ntotalvalue,
        yBtotal: data.Btotalvalue - correspondingData.Btotalvalue,
        yNtotal: data.Ntotalvalue - correspondingData.Ntotalvalue
      });
    }
  });
}

function madValues() {
  let madFormData = localStorage.getItem("madFormData");

  if (madFormData && madFormData.length > 0) {
    madFormData = JSON.parse(madFormData);

    madFormData.forEach(data => {
      combineData(data.textValue, data.numberValue2, data.numberValue);
    });
  }
}

saveData();
calculateValues();
madValues();

console.log(array5);
