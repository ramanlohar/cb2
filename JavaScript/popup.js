function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("flyOut");
  popup.classList.add("flyIn");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("flyIn");
  popup.classList.add("flyOut");
  setTimeout(function() {
    popup.style.display = "none";
  }, 500);
}
