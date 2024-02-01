display_mad();
var reloadhome3 = localStorage.getItem("reloadhome3");

if (reloadhome3 < 1) {
  localStorage.setItem("reloadhome3", 1);
  location.reload();
}

var nagadpurve_Shesh = localStorage.setItem("nagadpurve_Shesh", 0);
var bankpurve_Shesh = localStorage.setItem("bankpurve_Shesh", 0);

localStorage.setItem("contvalueccc", 0);

function display_mad() {
  const madFormData = JSON.parse(localStorage.getItem("madFormData"));

  if (madFormData && madFormData.length > 0) {
    // Display the retrieved data

    madFormData.forEach((data, index) => {
      var partiaay = data.textValue;
      var aayN = data.numberValue;
      var aayB = data.numberValue2;
      var vyayN = 0;
      var vyayB = 0;

      purvrokadbahidisplayData(partiaay, aayN, aayB, vyayN, vyayB);
    });
  } else {
  }
}

function purvrokadbahidisplayData(partiaay,
    aayN,
    aayB,
    vyayN,
    vyayB,
) {
    var table = document.getElementById("combinedTable");
    var row = table.insertRow(-1);

    // var changeddateformate =convertDateFormat(date)

    var cell = row.insertCell(0);
    cell.innerHTML = '';

    var cell = row.insertCell(1);
    cell.innerHTML = "";

    var cell = row.insertCell(2);
    cell.innerHTML = "";

    var cell = row.insertCell(3);
    cell.innerHTML = partiaay;

    var cell = row.insertCell(4);
    cell.innerHTML = aayN;

    var cell = row.insertCell(5);
    cell.innerHTML = aayB;

    var cell = row.insertCell(6);
    cell.innerHTML = "";

    var cell = row.insertCell(7);
    cell.innerHTML = "";

    var cell = row.insertCell(8);
    cell.innerHTML = "";

    var cell = row.insertCell(9);
    cell.innerHTML = "";

    var cell = row.insertCell(10);
    cell.innerHTML = "";

    var cell = row.insertCell(11);
    cell.innerHTML = "";

    var cell = row.insertCell(12);
    cell.innerHTML = "";

    var cell = row.insertCell(13);
    cell.innerHTML = vyayN;

    var cell = row.insertCell(14);
    cell.innerHTML = vyayB;

    var cell = row.insertCell(15);
    cell.innerHTML = "";

    var cell = row.insertCell(16);
    cell.innerHTML = "";

    var cell = row.insertCell(17);
    cell.innerHTML = `<button class="btn_edit_del" id="Edit_button" onclick="editpurvshesh()"><i class="fa-solid fa-pen"></i></button>`;

}

function editpurvshesh(){
    window.location.href = "HTML/editfirstform.html"
}

function editrowdata(form_id) {
  localStorage.setItem("Edit_Form_Id", form_id);
  // localStorage.setItem("Edit_Form_Id");
  window.location.href = "HTML/editinput.html";
}

function deletefromrow(form_id) {
  const bodyElement = document.querySelector("body");
  alert("hello");

  // Create confirmation box
  var confirmationBox = document.createElement("div");
  confirmationBox.id = "confirmation-box";
  confirmationBox.innerHTML = `
    <h2>Do you want to delete it?</h2>
    <button class="yes" onclick="confirmAction(true, '${form_id}')">Yes</button>
    <button class="no" onclick="confirmAction(false)">No</button>
  `;

  // Append the confirmation box as the first child of the body
  bodyElement.insertBefore(confirmationBox, bodyElement.firstChild);
}

function confirmAction(isConfirmed, formId) {
  // Handle the user's choice
  if (isConfirmed) {
    // User clicked 'Yes'
    alert("You chose to delete."); // Replace this with your actual delete logic
    localStorage.removeItem(formId);
    location.reload();
  } else {
    // User clicked 'No'
    alert("You chose not to delete.");
  }

  // Remove the confirmation box after handling the choice
  var confirmationBox = document.getElementById("confirmation-box");
  confirmationBox.remove();
}

function sortDataByDate(data) {
  return data.sort(function (a, b) {
    var dateA = new Date(a["Date"] || a["date"]);
    var dateB = new Date(b["Date"] || b["date"]);
    return dateA - dateB;
  });
}

function insertBlankRow(table, numRows, cellCount, date, Formid, R_BANK_RASHI) {
  for (var i = 0; i < 0; i++) {
    var blankRow = table.insertRow(-1);
    for (var j = -1; j < cellCount; j++) {
      var cell = blankRow.insertCell(j);
      cell.innerHTML = ""; // Leave cells empty for a blank row
    }
  }

  // avrokadbahidisplayData(date);
  caluculatingvalues(date, Formid, R_BANK_RASHI);

  for (var i = 0; i < 7; i++) {
    var blankRow = table.insertRow(-1);
    for (var j = -1; j < cellCount; j++) {
      var cell = blankRow.insertCell(j);
      cell.innerHTML = ""; // Leave cells empty for a blank row
    }
  }
}

function rokadbahidisplayData(formType) {
  var formCount = localStorage.getItem(formType + "FormCount");
  var formDataArray = [];

  for (var i = 1; i <= formCount; i++) {
    var formData = localStorage.getItem(formType + "Data" + i);

    if (formData) {
      formData = JSON.parse(formData);
      formDataArray.push(formData);
    }
  }

  formDataArray = sortDataByDate(formDataArray);

  var table = document.getElementById("combinedTable");
  var prevDate = null;

  for (var i = 0; i < formDataArray.length; i++) {
    var currentDate = formDataArray[i]["Date"];

    Formid = formDataArray[i]["Form_Id"] || "";
    R_BANK_RASHI = formDataArray[i]["r_Bank Rashi"];

    if (prevDate && currentDate !== prevDate) {
      insertBlankRow(table, 7, 17, prevDate, Formid, R_BANK_RASHI); // Adjust cell count accordingly
    }

    console.log(formType + "Data" + i);

    var row = table.insertRow(-1);

    var cell = row.insertCell(0);
    cell.innerHTML = convertDateFormat(currentDate);

    if (Formid === "rbData1" || Formid == "rbData1") {
      var cell = row.insertCell(1);
      cell.innerHTML = "";
    } else {
      if (
        formDataArray[i]["r_Particular"] != "" ||
        formDataArray[i]["r_Particular"] !== ""
      ) {
        var bakiseril = localStorage.getItem("rokadsno");
        bakiseril++;
        var cell = row.insertCell(1);
        cell.innerHTML = bakiseril;
        localStorage.setItem("rokadsno", bakiseril);
      } else {
        var cell = row.insertCell(1);
        cell.innerHTML = "";
        // cell.innerHTML = formDataArray[i]['S.no'];
      }
    }

    var cell = row.insertCell(2);
    cell.innerHTML = formDataArray[i]["r_AKMMKP"];

    var cell = row.insertCell(3);
    cell.innerHTML = formDataArray[i]["r_Particular"];

    var cell = row.insertCell(4);
    cell.innerHTML = formDataArray[i]["r_Nagad Rashi"];

    var cell = row.insertCell(5);
    cell.innerHTML = formDataArray[i]["r_Bank Rashi"];

    var cell = row.insertCell(6);
    cell.innerHTML = formDataArray[i]["r_Bajt LS"];

    var cell = row.insertCell(7);
    cell.innerHTML = formDataArray[i]["Signature"] || "";

    var cell = row.insertCell(8);
    cell.innerHTML = convertDateFormat(currentDate);

    if (Formid === "rbData1" || Formid == "rbData1") {
      var cell = row.insertCell(9);
      cell.innerHTML = "";
    } else {
      if (
        formDataArray[i]["b_Particular"] != "" ||
        formDataArray[i]["b_Particular"] !== ""
      ) {
        var bakiseril = localStorage.getItem("bakisno");
        bakiseril++;
        var cell = row.insertCell(9);
        cell.innerHTML = bakiseril;
        localStorage.setItem("bakisno", bakiseril);
      } else {
        var cell = row.insertCell(9);
        // cell.innerHTML = formDataArray[i]['S.no'];
        cell.innerHTML = "";
      }
    }
    var cell = row.insertCell(10);
    cell.innerHTML = formDataArray[i]["b_E.P.N No."];

    var cell = row.insertCell(11);
    cell.innerHTML = formDataArray[i]["b_AKMMKP"];

    var cell = row.insertCell(12);
    cell.innerHTML = formDataArray[i]["b_Particular"] || "";

    var cell = row.insertCell(13);
    cell.innerHTML = formDataArray[i]["b_Nagad Rashi"] || "";

    var cell = row.insertCell(14);
    cell.innerHTML = formDataArray[i]["b_Bank Rashi"] || "";

    var cell = row.insertCell(15);
    cell.innerHTML = formDataArray[i]["b_Bajt LS"] || "";

    var cell = row.insertCell(16);
    cell.innerHTML = formDataArray[i]["Signature"] || "";

    if (Formid === "rbData1" || Formid == "rbData1"){

        var cell = row.insertCell(17);
        cell.innerHTML = "";

    }else{        
        var cell = row.insertCell(17);
        cell.innerHTML = `<button class="btn_edit_del" id="Edit_button" onclick="editrowdata('${Formid}')"><i class="fa-solid fa-pen"></i></button> <button class="btn_edit_del" id="delete_button" onclick="deletefromrow('${Formid}');"><i class="fa-solid fa-trash-can" for="Edit_button"></i></button>`;
    }
        
        prevDate = currentDate;
  }
}

function calculateAndStoreTotal() {
  var formTypes = ["rb"];

  formTypes.forEach(function (formType) {
    var formCount = localStorage.getItem(formType + "FormCount");
    var totalData = {};

    for (var i = 1; i <= formCount; i++) {
      var formData = localStorage.getItem(formType + "Data" + i);

      if (formData) {
        formData = JSON.parse(formData);
        var currentDate = formData["Date"];
        var r_nagadAmount = parseFloat(formData["r_Nagad Rashi"]) || 0;
        var r_bankAmount = parseFloat(formData["r_Bank Rashi"]) || 0;
        var b_nagadAmount = parseFloat(formData["b_Nagad Rashi"]) || 0;
        var b_bankAmount = parseFloat(formData["b_Bank Rashi"]) || 0;

        if (!totalData[currentDate]) {
          totalData[currentDate] = {
            r_nagadTotal: 0,
            r_bankTotal: 0,
            b_nagadTotal: 0,
            b_bankTotal: 0,
          };
        }

        totalData[currentDate].r_nagadTotal += r_nagadAmount;
        totalData[currentDate].r_bankTotal += r_bankAmount;
        totalData[currentDate].b_nagadTotal += b_nagadAmount;
        totalData[currentDate].b_bankTotal += b_bankAmount;
      }
    }

    // Store the calculated totals in localStorage for each date
    Object.keys(totalData).forEach(function (date) {
      var dateTotal = totalData[date];
      localStorage.setItem(
        formType + "TotalData_" + date,
        JSON.stringify(dateTotal)
      );
    });
  });
}

function avrokadbahidisplayData(
  aayN,
  aayB,
  aayNPurvShesh,
  aayBPurvShesh,
  aayNyog,
  aayByog,
  vyayN,
  vyayB,
  vyayNPurvShesh,
  vyayBPurvShesh,
  vyayNyog,
  vyayByog,
  firstid
) {
  var table = document.getElementById("combinedTable");
  var row = table.insertRow(-1);
  var row2 = table.insertRow(-1);
  var row3 = table.insertRow(-1);
  if (firstid == 1) {
    var date = "first_1";
  } else {
    var date = "";
  }

  // var changeddateformate =convertDateFormat(date)

  var cell = row.insertCell(0);
  cell.innerHTML = date;

  var cell = row.insertCell(1);
  cell.innerHTML = "";

  var cell = row.insertCell(2);
  cell.innerHTML = "";

  var cell = row.insertCell(3);
  cell.innerHTML = "आय";

  var cell = row.insertCell(4);
  cell.innerHTML = aayN;

  var cell = row.insertCell(5);
  cell.innerHTML = aayB;

  var cell = row.insertCell(6);
  cell.innerHTML = "";

  var cell = row.insertCell(7);
  cell.innerHTML = "";

  var cell = row.insertCell(8);
  cell.innerHTML = "";

  var cell = row.insertCell(9);
  cell.innerHTML = "";

  var cell = row.insertCell(10);
  cell.innerHTML = "";

  var cell = row.insertCell(11);
  cell.innerHTML = "";

  var cell = row.insertCell(12);
  cell.innerHTML = "व्यय";

  var cell = row.insertCell(13);
  cell.innerHTML = vyayN;

  var cell = row.insertCell(14);
  cell.innerHTML = vyayB;

  var cell = row.insertCell(15);
  cell.innerHTML = "";

  var cell = row.insertCell(16);
  cell.innerHTML = "";

  var cell = row.insertCell(17);
  cell.innerHTML = "";

  //row 2

  if (firstid == 1) {
    var date = "first_2";
  } else {
    var date = "";
  }

  var cell = row2.insertCell(0);
  cell.innerHTML = date;

  var cell = row2.insertCell(1);
  cell.innerHTML = "";

  var cell = row2.insertCell(2);
  cell.innerHTML = "";

  var cell = row2.insertCell(3);
  cell.innerHTML = "पूर्व शेष";

  var cell = row2.insertCell(4);
  cell.innerHTML = aayNPurvShesh;

  var cell = row2.insertCell(5);
  cell.innerHTML = aayBPurvShesh;

  var cell = row2.insertCell(6);
  cell.innerHTML = "";

  var cell = row2.insertCell(7);
  cell.innerHTML = "";

  var cell = row2.insertCell(8);
  cell.innerHTML = "";

  var cell = row2.insertCell(9);
  cell.innerHTML = "";

  var cell = row2.insertCell(10);
  cell.innerHTML = "";

  var cell = row2.insertCell(11);
  cell.innerHTML = "";

  var cell = row2.insertCell(12);
  cell.innerHTML = "शेष";

  var cell = row2.insertCell(13);
  cell.innerHTML = vyayNPurvShesh;

  var cell = row2.insertCell(14);
  cell.innerHTML = vyayBPurvShesh;

  var cell = row2.insertCell(15);
  cell.innerHTML = "";

  var cell = row2.insertCell(16);
  cell.innerHTML = "";

  var cell = row2.insertCell(17);
  cell.innerHTML = "";

  // row 3
  if (firstid == 1) {
    var date = "first_3";
  } else {
    var date = "";
  }

  var cell = row3.insertCell(0);
  cell.innerHTML = date;

  var cell = row3.insertCell(1);
  cell.innerHTML = "";

  var cell = row3.insertCell(2);
  cell.innerHTML = "";

  var cell = row3.insertCell(3);
  cell.innerHTML = "योग";

  var cell = row3.insertCell(4);
  cell.innerHTML = aayNyog;

  var cell = row3.insertCell(5);
  cell.innerHTML = aayByog;

  var cell = row3.insertCell(6);
  cell.innerHTML = "";

  var cell = row3.insertCell(7);
  cell.innerHTML = "";

  var cell = row3.insertCell(8);
  cell.innerHTML = "";

  var cell = row3.insertCell(9);
  cell.innerHTML = "";

  var cell = row3.insertCell(10);
  cell.innerHTML = "";

  var cell = row3.insertCell(11);
  cell.innerHTML = "";

  var cell = row3.insertCell(12);
  cell.innerHTML = "योग";

  var cell = row3.insertCell(13);
  cell.innerHTML = vyayNyog;

  var cell = row3.insertCell(14);
  cell.innerHTML = vyayByog;

  var cell = row3.insertCell(15);
  cell.innerHTML = "";

  var cell = row3.insertCell(16);
  cell.innerHTML = "";

  var cell = row3.insertCell(17);
  cell.innerHTML = "";
}

// function caluculatingvalues(date, Formid, R_BANK_RASHI) {
//   var nagadpurve_Shesh = localStorage.getItem("nagadpurve_Shesh") || 0;
//   var bankpurve_Shesh = localStorage.getItem("bankpurve_Shesh") || 0;

//   var rbTotalData_date = "rbTotalData_" + date;
//   var rbTotalData = localStorage.getItem(rbTotalData_date);

//   // Parse the JSON string to get a JavaScript object
//   rbTotalData = JSON.parse(rbTotalData);

//   // Check if rbTotalData is not null or undefined before accessing its properties
//   if (rbTotalData) {
//     var r_nagadAmount = rbTotalData.r_nagadTotal || 0;
//     var r_bankAmount = rbTotalData.r_bankTotal || 0;
//     var b_nagadAmount = rbTotalData.b_nagadTotal || 0;
//     var b_bankAmount = rbTotalData.b_bankTotal || 0;

//     //r_nagadAmount

//     aayN = r_nagadAmount;
//     aayB = r_bankAmount;

//     aayNPurvShesh = nagadpurve_Shesh;
//     aayBPurvShesh = bankpurve_Shesh;

//     nagadpurve_Shesh = parseFloat(nagadpurve_Shesh) + parseFloat(r_nagadAmount);
//     bankpurve_Shesh = parseFloat(bankpurve_Shesh) + parseFloat(r_bankAmount);

//     localStorage.setItem("nagadpurve_Shesh", nagadpurve_Shesh);
//     localStorage.setItem("bankpurve_Shesh", bankpurve_Shesh);

//     aayNyog = nagadpurve_Shesh;
//     aayByog = bankpurve_Shesh;

//     vyayN = b_nagadAmount;
//     vyayB = b_bankAmount;

//     var nagadpurve_Shesh = localStorage.getItem("nagadpurve_Shesh") || 0;
//     var bankpurve_Shesh = localStorage.getItem("bankpurve_Shesh") || 0;

//     vyayNyog = nagadpurve_Shesh;
//     vyayByog = bankpurve_Shesh;

//     nagadpurve_Shesh = parseFloat(nagadpurve_Shesh) - parseFloat(b_nagadAmount);
//     bankpurve_Shesh = parseFloat(bankpurve_Shesh) - parseFloat(b_bankAmount);

//     localStorage.setItem("nagadpurve_Shesh", nagadpurve_Shesh);
//     localStorage.setItem("bankpurve_Shesh", bankpurve_Shesh);

//     vyayNPurvShesh = nagadpurve_Shesh;
//     vyayBPurvShesh = bankpurve_Shesh;

//     var changeddateformate = convertDateFormat(date);

//     // Retrieve the data stored in localStorage with the key "rbData1"
//     var panchaya_name1 = localStorage.getItem("karyalayData");

//     // Parse the retrieved data as JSON
//     panchaya_data2 = JSON.parse(panchaya_name1);

//     // Access the value associated with the property 'b_Bank Rashi' in the parsed object
//     panchaya_data23 = panchaya_data2["Purv_Rashi"];
//     Npanchaya_data23 = panchaya_data2["NPurv_Rashi"];

//     console.log(panchaya_data23 + "panchaya_data203");
//     // console.log(Formid + "hello");

//     // if (Formid === "rbData1" || Formid == "rbData1" && R_BANK_RASHI == aayB) {
//     if (panchaya_data23 != aayB) {
//       localStorage.setItem("treecount", 1);
//       console.log(R_BANK_RASHI + "rashi");
//       console.log(aayB + "hhh");
//       // aayB = aayB-panchaya_data23;
//       // aayN = aayN-Npanchaya_data23;
//       // aayBPurvShesh = panchaya_data23;
//       // aayNPurvShesh = Npanchaya_data23;
//     } else {
//     }

//     treecounttwo = localStorage.getItem("treecounttwo");
//     if (treecounttwo == 0) {
//       localStorage.setItem("aayn", aayN);
//       localStorage.setItem("aayb", aayB);
//       firstid = 1;
//       localStorage.setItem("treecounttwo", 1);
//     } else {
//       firstid = 0;
//     }

//     var treecount = localStorage.getItem("treecount", 0);

//     if (treecount == 0) {
//       avrokadbahidisplayData(
//         aayNPurvShesh,
//         aayBPurvShesh,
//         aayN,
//         aayB,
//         aayNyog,
//         aayByog,
//         vyayN,
//         vyayB,
//         vyayNPurvShesh,
//         vyayBPurvShesh,
//         vyayNyog,
//         vyayByog,
//         firstid
//       );
//       localStorage.setItem("treecount", 1);

//       //aayBPurvShesh
//       //aayN
//     } else {
//       avrokadbahidisplayData(
//         aayN,
//         aayB,
//         aayNPurvShesh,
//         aayBPurvShesh,
//         aayNyog,
//         aayByog,
//         vyayN,
//         vyayB,
//         vyayNPurvShesh,
//         vyayBPurvShesh,
//         vyayNyog,
//         vyayByog,
//         firstid
//       );
//     }
//   }
// }

function caluculatingvalues(date, Formid, R_BANK_RASHI) {
  var nagadpurve_Shesh = parseFloat(localStorage.getItem("nagadpurve_Shesh")) || 0;
  var bankpurve_Shesh = parseFloat(localStorage.getItem("bankpurve_Shesh")) || 0;

  var rbTotalData_date = "rbTotalData_" + date;
  var rbTotalData = localStorage.getItem(rbTotalData_date);

  // Parse the JSON string to get a JavaScript object
  rbTotalData = JSON.parse(rbTotalData);

  // Check if rbTotalData is not null or undefined before accessing its properties
  if (rbTotalData) {
      var r_nagadAmount = parseFloat(rbTotalData.r_nagadTotal) || 0;
      var r_bankAmount = parseFloat(rbTotalData.r_bankTotal) || 0;
      var b_nagadAmount = parseFloat(rbTotalData.b_nagadTotal) || 0;
      var b_bankAmount = parseFloat(rbTotalData.b_bankTotal) || 0;

      aayN = r_nagadAmount;
      aayB = r_bankAmount;

      aayNPurvShesh = nagadpurve_Shesh;
      aayBPurvShesh = bankpurve_Shesh;

      nagadpurve_Shesh += r_nagadAmount;
      bankpurve_Shesh += r_bankAmount;

      localStorage.setItem("nagadpurve_Shesh", nagadpurve_Shesh);
      localStorage.setItem("bankpurve_Shesh", bankpurve_Shesh);

      aayNyog = nagadpurve_Shesh;
      aayByog = bankpurve_Shesh;

      vyayN = b_nagadAmount;
      vyayB = b_bankAmount;

      vyayNyog = nagadpurve_Shesh;
      vyayByog = bankpurve_Shesh;

      nagadpurve_Shesh -= b_nagadAmount;
      bankpurve_Shesh -= b_bankAmount;

      localStorage.setItem("nagadpurve_Shesh", nagadpurve_Shesh);
      localStorage.setItem("bankpurve_Shesh", bankpurve_Shesh);

      vyayNPurvShesh = nagadpurve_Shesh;
      vyayBPurvShesh = bankpurve_Shesh;

      var changeddateformate = convertDateFormat(date);

      // Retrieve the data stored in localStorage with the key "rbData1"
      var panchaya_name1 = localStorage.getItem("karyalayData");

      // Parse the retrieved data as JSON
      var panchaya_data2 = JSON.parse(panchaya_name1);

      // Access the value associated with the property 'b_Bank Rashi' in the parsed object
      var panchaya_data23 = panchaya_data2["Purv_Rashi"];
      var Npanchaya_data23 = panchaya_data2["NPurv_Rashi"];

      console.log(panchaya_data23 + "panchaya_data203");

      var treecounttwo = localStorage.getItem("treecounttwo");
      var firstid = 0;

      if (treecounttwo == 0) {
          localStorage.setItem("aayn", aayN);
          localStorage.setItem("aayb", aayB);
          firstid = 1;
          localStorage.setItem("treecounttwo", 1);
      }

      aayNPurvShesh = parseFloat(aayNPurvShesh.toFixed(2));
      aayBPurvShesh = parseFloat(aayBPurvShesh.toFixed(2));
      aayN = parseFloat(aayN.toFixed(2));
      aayB = parseFloat(aayB.toFixed(2));
      aayNyog = parseFloat(aayNyog.toFixed(2));
      aayByog = parseFloat(aayByog.toFixed(2));
      vyayN = parseFloat(vyayN.toFixed(2));
      vyayB = parseFloat(vyayB.toFixed(2));
      vyayNPurvShesh = parseFloat(vyayNPurvShesh.toFixed(2));
      vyayBPurvShesh = parseFloat(vyayBPurvShesh.toFixed(2));
      vyayNyog = parseFloat(vyayNyog.toFixed(2));
      vyayByog = parseFloat(vyayByog.toFixed(2));

      var treecount = localStorage.getItem("treecount", 0);

      if (treecount == 0) {
          avrokadbahidisplayData(
              aayNPurvShesh,
              aayBPurvShesh,
              aayN,
              aayB,
              aayNyog,
              aayByog,
              vyayN,
              vyayB,
              vyayNPurvShesh,
              vyayBPurvShesh,
              vyayNyog,
              vyayByog,
              firstid
          );
          localStorage.setItem("treecount", 1);
      } else {
          avrokadbahidisplayData(
              aayN,
              aayB,
              aayNPurvShesh,
              aayBPurvShesh,
              aayNyog,
              aayByog,
              vyayN,
              vyayB,
              vyayNPurvShesh,
              vyayBPurvShesh,
              vyayNyog,
              vyayByog,
              firstid
          );
      }
  }
}


function convertDateFormat(inputDate) {
  // Split the input date into year, month, and day
  const [year, month, day] = inputDate.split("-");

  // Create a new date object with the given values
  const convertedDate = new Date(year, month - 1, day);

  // Format the date as "DD-MM-YYYY"
  const formattedDate = `${convertedDate
    .getDate()
    .toString()
    .padStart(2, "0")}-${(convertedDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${convertedDate.getFullYear()}`;

  return formattedDate;
}

function pnyd() {
  var panchaya_name = localStorage.getItem("karyalayData");

  panchaya_data = JSON.parse(panchaya_name);

  document.getElementById("panchaya_name").innerText =
    panchaya_data["Panchayat Name"];
  document.getElementById("panchaya_year").innerText = panchaya_data["Year"];
}

function baki() {
  localStorage.setItem("rokadsno", 0);
  localStorage.setItem("bakisno", 0);
  rokadbahidisplayData("rb");
  // rokadbahidisplayData('bahi');
}

function addbtn() {
  window.location.href = "HTML/rokadform.html";
}

pnyd();
baki();
calculateAndStoreTotal();
localStorage.setItem("treecount", 0);
localStorage.setItem("treecounttwo", 0);

setTimeout(() => {
  localStorage.removeItem("Edit_Form_Id");  
}, 1000);