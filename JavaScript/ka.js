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