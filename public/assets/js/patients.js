

$(document).ready(() => {
    $.get("/api/patients", results => {
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
        const row = $("<div>");
        row.addClass("allPatients").addClass("card");
        row.attr("id", "post-number-" + i);
        $("#patient-area").prepend(row);
        $("#post-number-" + i).append(
          "<h2 class='card-header'>Name: " + results[i].first_name + ' ' + results[i].last_name + "</h2>"
        );
        $("#post-number-" + i).append(
          "<p>Description: " + results[i].description + "</p>"
        );
        $("#post-number-" + i).append("<p>DOB: " + results[i].DOB + "</p>");
        $("#post-number-" + i).append("<p>Postl Code: " + results[i].postl_code + "</p>");
        $("#post-number-" + i).append("<p>Gender: " + results[i].gender + "</p>");
        $("#post-number-" + i).append(
          "<p>Appointment Date: " + results[i].appointment_date + "</p>"
        );
      

        }
    });
  });
/*
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');
const DOBInput = document.getElementById('DOBInput');
const genderInput = document.getElementById('genderInput');
const postal_codeInput = document.getElementById('postal_codeInput');
const DescriptionInput = document.getElementById('DescriptionInput');
const Appointment_DateInput = document.getElementById('Appointment_DateInput');

const addPatientBtn = document.getElementById('addPatientBtn');




addPatientBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if(firstnameInput.value.trim().length === 0){
        alert('name cannot be empty');
        return;
    }

    try {
        const response = await fetch('/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstnameInput.value,
                last_name: lastnameInput.value,
                DOB: DOBInput.value,
                gender: genderInput.value,
                postal_code: postal_codeInput.value,
                Description: DescriptionInput.value,
                Appointment_Date:  Appointment_DateInput.value          
            })
        });

        await response.json();
        window.location.reload();
    } catch (error) {
        alert(error);
    }
})
*/