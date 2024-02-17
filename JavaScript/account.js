// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const accountemailid = document.getElementById("accountemailid");
    let formData = localStorage.getItem("signin_form_data");
    formData = JSON.parse(formData);

    let emailidfordisplay = formData["email"];
    accountemailid.innerHTML = emailidfordisplay;

    // Get the input elements
    var Name_info_popup = document.getElementById("Name_info_popup");
    var Email_info_popup = document.getElementById("Email_info_popup");
    var Mobile_info_popup = document.getElementById("Mobile_info_popup");

    // Assign values to the input elements
    Name_info_popup.value = formData["name"];
    Email_info_popup.value = formData["email"];
    Mobile_info_popup.value = formData["mobileno"];

    // Function to open the popup dialog
    document.getElementById("settingbtn").addEventListener("click",()=>{

        openPopup();
        
    })
});
