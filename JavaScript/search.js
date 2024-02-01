// search.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const tdElements = document.querySelectorAll("td");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        tdElements.forEach((td) => {
            const tdText = td.innerText.toLowerCase();

            // Check if the search term is found in the text content of the td
            if (tdText.includes(searchTerm)) {
                // Highlight the row containing the matching td
                td.parentElement.classList.add("highlight");
            } else {
                // Check if the search term is a number and matches the content of the td
                const tdNumber = parseFloat(tdText.replace(/[^\d.-]/g, ""));
                if (!isNaN(tdNumber) && tdNumber.toString().includes(searchTerm)) {
                    td.parentElement.classList.add("highlight");
                } else {
                    // Check if the search term is a date and matches the content of the td
                    const tdDate = Date.parse(tdText);
                    if (!isNaN(tdDate)) {
                        const formattedDate = new Date(tdDate).toLocaleDateString();
                        if (formattedDate.includes(searchTerm)) {
                            td.parentElement.classList.add("highlight");
                        } else {
                            td.parentElement.classList.remove("highlight");
                        }
                    } else {
                        td.parentElement.classList.remove("highlight");
                    }
                }
            }
        });
    });
});
