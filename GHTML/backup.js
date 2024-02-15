var url =
  "https://script.google.com/macros/s/AKfycbxlXFxWQtUit7kTSeT8FtgPbcvZppXJJ8HoiqdwD2Bu3QArgfT3eoVL_NvaOCHlhJvfGg/exec";

function backup() {
  let d = new FormData();

  let formData = localStorage.getItem("signin_form_data");

  formData = JSON.parse(formData);

  const localStorageData = { ...localStorage };
  var datavalue = JSON.stringify(localStorageData, null, 2);
  
  let mobileNumber = formData["email"];

  d.append("mobileno", mobileNumber);
  d.append("textvalue", datavalue);

  fetch(url, {
    method: "POST",
    body: d,
  })
    .then((res) => res.text())
    .then((finalRes) => console.log(finalRes));
}


function backupdataongsheets() {
  // Get the current date
  let currentDate = new Date();

  let dayOfWeek = currentDate.getDay();

  console.log("Current day of the week:", dayOfWeek);

  backuptime = localStorage.getItem("backuptimeday");

  if (backuptime) {
    if (backuptime != dayOfWeek) {
      backuptime = localStorage.setItem("backuptimeday", dayOfWeek);
      backup();
    }
  } else {
    backup();
    backuptime = localStorage.setItem("backuptimeday", dayOfWeek);
  }
}

backupdataongsheets();