
    const alltdm = document.querySelectorAll("td");

    alltdm.forEach((td) => {
        let tdValue = td.innerText.trim();

        formid = localStorage.getItem("Edit_Form_Id");
        if(formid){

            var rbFormDataJSON = localStorage.getItem(formid);
            
            var rbFormData = JSON.parse(rbFormDataJSON);
            date = rbFormData['Date'];
            
        //     var r_Bajt_LS = rbFormData['r_Bajt LS'];
        // var b_Bajt_LS = rbFormData['b_Bajt LS'];

        // var r_Nagad_Rashi = rbFormData['r_Nagad Rashi'];
        // var r_Bank_Rashi = rbFormData['r_Bank Rashi'];
        // var b_Nagad_Rashi = rbFormData['b_Nagad Rashi'];
        // var b_Bank_Rashi = rbFormData['b_Bank Rashi'];

        date = convertDateFormat(date);
        
        if (tdValue == date) {
            td.parentElement.classList.add("highlight");
            td.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
                td.parentElement.classList.remove("highlight");
            }, 2000);
            localStorage.removeItem("Edit_Form_Id"); 
        }
    }
    });

