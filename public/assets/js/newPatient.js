const addPatientBtn = document.getElementById('addPatientBtn');
const first_nameInput = document.getElementById('first_name');
const last_nameInput = document.getElementById('last_name');
const DOBInput = document.getElementById('DOB');
const genderInput = document.getElementById('gender');
const postal_codeInput = document.getElementById('postal_code');
const descriptionInput = document.getElementById('Description');
const appointment_dateInput = document.getElementById('appointment_date');




//$(document).ready(() => {
 //  $("#addPatientBtn").on('click', event => {
   addPatientBtn.addEventListener('click', async (event) => {
    event.preventDefault();
        const first_name = first_nameInput.value;
        const last_name = last_nameInput.value;
      const DOB = DOBInput.value;
        const gender = genderInput.value;
        const postal_code = postal_codeInput.value;
       const Description = descriptionInput.value;
        const Appointment_Date = appointment_dateInput.value;

   if(first_name.trim().length === 0){
    alert('Please enter a valid first name');
    return;
}    
 /*       
        const newPatient = {

            fist_name: first_nameInput
            ,
            last_name: last_nameInput
            ,
            DOB: DOBInput
            ,
            gender: genderInput
            ,
            postal_code: postal_codeInput
            ,
            Description: descriptionInput,
            Appointment_Date: appointment_dateInput
            ,

        };
        console.log(newPatient);
        */


        try {
            const response = await fetch('/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    DOB,
                    gender,
                    postal_code,
                    Description,
                    Appointment_Date,
                })
            });

            await response.json();
            // change user window to the /users endpoint
           window.location.href = '/patientList';
        } catch (error) {
            alert(error);
        }



    
 //   });
  });