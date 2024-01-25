var a = 0, a2 = 0;
const mad_form = document.getElementById("mad_form");
const Addbtn = document.getElementById("Addbtn");

function bindEventListeners() {
    document.querySelectorAll('.madSelect').forEach((select) => {
        select.addEventListener('change', handleSelectChange);
    });

    document.querySelectorAll('.madNumber').forEach((numberInput) => {
        numberInput.addEventListener('input', handleNumberChange);
    });

    document.querySelectorAll('.madNumber2').forEach((numberInput) => {
        numberInput.addEventListener('input', handleNumberChange);
    });
}

Addbtn.addEventListener("click", () => {
    const mads = document.createElement('div');
    mads.classList.add('mads');
    mads.innerHTML = `<label for="madSelect">Select a mad</label>
        <select name="mad" class="madSelect">
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="other">other</option>
        </select>
        <label for="madName" class="madText-label" style="display:none;">Enter the mad name</label>
        <input type="text" class="madText" style="display:none;">
        <label for="nagadRashi">Nagad Rashi</label>
        <input type="number" class="madNumber">
        <label for="bankRashi">Bank Rashi</label>
        <input type="number" class="madNumber2">`;

    mad_form.insertBefore(mads, Addbtn);
    bindEventListeners();
});

function handleSelectChange(event) {
    const selectedValue = event.target.value;
    const parentDiv = event.target.closest('.mads');
    const textInput = parentDiv.querySelector('.madText');
    const textInput_label = parentDiv.querySelector('.madText-label');
    textInput_label.style.display = (selectedValue === 'other') ? 'inline-block' : 'none';
    textInput.style.display = (selectedValue === 'other') ? 'inline-block' : 'none';
}

function handleNumberChange(event) {
    updateTotals();
}

function updateTotals() {
    a = 0;
    a2 = 0;

    document.querySelectorAll('.mads').forEach((mad) => {
        const numberValue = mad.querySelector('.madNumber').value;
        const numberValue2 = mad.querySelector('.madNumber2').value;

        const parsedNumberValue = (numberValue === '') ? 0 : parseFloat(numberValue);
        const parsedNumberValue2 = (numberValue2 === '') ? 0 : parseFloat(numberValue2);

        a += parsedNumberValue;
        a2 += parsedNumberValue2;

    });

    console.log("a=" + a + " a2=" + a2);
    document.getElementById("Ntotal").value = a;
    document.getElementById("Btotal").value = a2;

    localStorage.setItem('Ntotalf', a);
    localStorage.setItem('Btotalf', a2);
}

mad_form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = [];

    document.querySelectorAll('.mads').forEach((mad) => {
        const selectValue = mad.querySelector('.madSelect').value;
        const textValue = mad.querySelector('.madText').value;
        const numberValue = mad.querySelector('.madNumber').value;
        const numberValue2 = mad.querySelector('.madNumber2').value;

        formData.push({
            textValue: (selectValue === 'other') ? textValue : selectValue,
            numberValue: (numberValue === '') ? 0 : numberValue,
            numberValue2: (numberValue2 === '') ? 0 : numberValue2,
        });
    });

    localStorage.setItem('madFormData', JSON.stringify(formData));
    mad_form.reset();

    saveData();
});


//////////////////////

// Function to save data to local storage
function saveData() {
    saveData2();
    // Get form values
    var panchayatName = document.getElementById('panchayat-name').value;
    var year = document.getElementById('year').value;
    var NpurvRashi = localStorage.getItem('Ntotalf');
    var purvRashi = localStorage.getItem('Btotalf');

    // Create an object to store the form data
    var formData = {
        'Panchayat Name': panchayatName,
        'Year': year,
        'Purv_Rashi': purvRashi,
        'NPurv_Rashi': NpurvRashi
    };

    // Convert the object to a JSON string
    var formDataJSON = JSON.stringify(formData);

    // Store the JSON string in local storage
    localStorage.setItem('karyalayData', formDataJSON);

    alert('Data saved to local storage!');
}

function saveData2() {
    // Get Rokad form values
    var rokadDate = document.getElementById('rokadDate').value;

    var NpurvRashi = localStorage.getItem('Ntotalf');
    var purvRashi = localStorage.getItem('Btotalf');

    // Get value from local storage for both forms
    var rbFormCount = localStorage.getItem("rbFormCount") || 0;
    rbFormCount = ++rbFormCount;

    // Create objects to store the form data
    var rbFormData = {
        'Date': rokadDate,
        // 'r_S.no': rokadSNo,
        'r_AKMMKP': "",
        'r_Particular': "पूर्व शेष",
        'r_Nagad Rashi': NpurvRashi,
        'r_Bank Rashi': purvRashi,
        'r_Bajt LS': "",
        'r_Signature': "",
        // 'b_S.no': bahiSNo,
        'b_AKMMKP': "",
        'b_E.P.N No.': "",
        'b_Particular': "शेष",
        'b_Nagad Rashi': "",
        'b_Bank Rashi': "",
        'b_Bajt LS': "",
        // 'b_Signature': bahiSignature
        'Form_Id': 'rbData1',
    };

    // Convert the objects to JSON strings
    var rbFormDataJSON = JSON.stringify(rbFormData);

    // Store the JSON strings and form counts in local storage
    localStorage.setItem('rbFormCount', rbFormCount);

    var rbDataKey = "rbData1";

    localStorage.setItem("rbData1", rbFormDataJSON);

    alert('Data saved to local storage!');

    saveData3();
}
function saveData3() {


    var rbFormCount = localStorage.getItem("rbFormCount") || 0;
    rbFormCount = ++rbFormCount;

    // Create objects to store the form data
    var rbFormData = {
        'Date': "3000-04-01",
        // 'r_S.no': rokadSNo,
        'r_AKMMKP': "",
        'r_Particular': "",
        'r_Nagad Rashi': "",
        'r_Bank Rashi': "",
        'r_Bajt LS': "",
        'r_Signature': "",
        // 'b_S.no': bahiSNo,
        'b_AKMMKP': "",
        'b_E.P.N No.': "",
        'b_Particular': "",
        'b_Nagad Rashi': "",
        'b_Bank Rashi': "",
        'b_Bajt LS': "",
        // 'b_Signature': bahiSignature
        'Form_Id': 'rbData' + rbFormCount,
    };

    // Convert the objects to JSON strings
    var rbFormDataJSON = JSON.stringify(rbFormData);

    localStorage.setItem('rbFormCount', rbFormCount);

    var rbDataKey = "rbData" + rbFormCount;

    localStorage.setItem(rbDataKey, rbFormDataJSON);

    alert('Data saved to local storage!');
    localStorage.setItem("reloadhome3", 0);
    loadwindow();
}

function loadwindow() {
    window.location.href = "../home.html";
}

////////////

bindEventListeners();