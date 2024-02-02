// https://script.google.com/macros/s/AKfycbx305Jwj2dvLTrPqSo674vbKTXAVLWoXwbAUHGKx95RoMKNj85P8zrGHl_Kd6pHN4Iw/exec
// ?email=ramanlohar11%40gmail.com&otp=hjksdhfjhksdhfjkh+lk

var SendedUserInfo = localStorage.getItem("SendedUserInfo");

if (SendedUserInfo != 'true') {
    sendinfo();
    localStorage.setItem("SendedUserInfo", 'true');
}

function sendinfo() {
    let data = new FormData();

    var panchaya_Data = localStorage.getItem("karyalayData");
    panchaya_data = JSON.parse(panchaya_Data);
    panchayat_name = panchaya_data["Panchayat Name"];
    //   panchaya_data["Year"];

    data.append("no", "");
    data.append("email", "ramanlohar11@gmail.com");
    data.append("hello", panchayat_name);

    fetch(
      "https://script.google.com/macros/s/AKfycbx305Jwj2dvLTrPqSo674vbKTXAVLWoXwbAUHGKx95RoMKNj85P8zrGHl_Kd6pHN4Iw/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => console.log(data));
  }
