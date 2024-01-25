const alltd = document.querySelectorAll("td");

alltd.forEach((td) => {
  let tdValue = td.innerText.trim();

  if (
    tdValue === "योग" ||
    tdValue === "आय" ||
    tdValue === "पूर्व शेष" ||
    tdValue === "व्यय" ||
    tdValue === "शेष"
  ) {
    // Change the background color for the specific td with innerText "Aay"
    // td.style.backgroundColor = "red";
    td.style.color = "black";
    td.style.fontStyle = "italic";
    td.style.fontWeight = "bold";

    // Apply CSS class to the entire row
    td.parentElement.classList.add("rowblack");
  }

  var panchaya_name1 = localStorage.getItem("karyalayData");

  // Parse the retrieved data as JSON
  panchaya_data2 = JSON.parse(panchaya_name1);

  // Access the value associated with the property 'b_Bank Rashi' in the parsed object
  panchaya_data23 = panchaya_data2["Purv_Rashi"];
  Npanchaya_data23 = panchaya_data2["NPurv_Rashi"];

  var aayN = localStorage.getItem("aayn");
  var aayB = localStorage.getItem("aayb");

  if (tdValue === "first_1") {
    // Find the specific <td> element within the parent row and update its content
    td.innerText = "";

    let parentRow = td.parentElement;
    let index = Array.from(parentRow.children).indexOf(td) + 6;
    parentRow.children[index - 1].innerHTML = aayB - panchaya_data23;
    parentRow.children[index - 1 - 1].innerHTML = aayN - Npanchaya_data23;
  }

  if (tdValue === "first_2") {
    td.innerText = "";
    // Find the specific <td> element within the parent row and update its content
    let parentRow = td.parentElement;
    let index = Array.from(parentRow.children).indexOf(td) + 6;
    parentRow.children[index - 1].innerHTML = panchaya_data23;
    parentRow.children[index - 1 - 1].innerHTML = Npanchaya_data23;
  }

  if (tdValue === "first_3") {
    td.innerText = "";
  }
  if (tdValue === "01-04-3000") {
    td.style.color = "transparent";
    td.style.userSelect = "none";

    let parentRow = td.parentElement;
    let index = Array.from(parentRow.children).indexOf(td) + 10;
    parentRow.children[index - 1].innerHTML = "";
  }
});

// const alltd = document.querySelectorAll("td");

alltd.forEach((td) => {
  td.addEventListener("click", () => {
    highlightRow(td);
  });
});

function highlightRow(td) {
  // Check if the clicked row is already highlighted
  const clickedRow = td.parentElement;
  const isHighlighted = clickedRow.classList.contains("highlight");

  // Remove highlight class from all rows
  document.querySelectorAll(".highlight").forEach((row) => {
    row.classList.remove("highlight");
  });

  // If the clicked row was not previously highlighted, add highlight class
  // Otherwise, remove the highlight class
  if (!isHighlighted) {
    clickedRow.classList.add("highlight");
  }
}

document.getElementById("zoomp-btn").addEventListener("click", function() {
  zoom(1);
});
document.getElementById("zoomm-btn").addEventListener("click", function() {
  zoom(0);
});

localStorage.setItem("table_zoom", 100);

function zoom(v) {
  var table_zoom = parseInt(localStorage.getItem("table_zoom")); // Parse to ensure it's a number
  if (v == 1) {
    if(table_zoom < 200){
      table_zoom = table_zoom + 5;
      zoom_value_update(table_zoom);
    }
  } else {
    if(table_zoom > 25){
      table_zoom = table_zoom - 5;
      zoom_value_update(table_zoom);
    }
  }

  var table = document.querySelector("table");
  table.style.zoom = table_zoom + "%"; // Add percent sign

  localStorage.setItem("table_zoom", table_zoom);
}

function zoom_value_update(table_zoom){
  zoom_value = document.getElementById("zoom_value");
  // saved_zoom_value =  localStorage.getItem("table_zoom");
  // zoom_value.innerText = saved_zoom_value + "%";
  zoom_value.innerText = table_zoom + "%";
}
