$(document).ready(() => {
    $("#newPatientBtn").on('click', event => {
        event.preventDefault();

        const newPatient = {
            first_name: $('#first_name')
            .val()
            .trim(),
            last_name: $('#last_name')
            .val()
            .trim(),
            DOB: $('#DOB')
            .val()
            .trim(),
            gender: $('#gender')
            .val()
            .trim(),
            postal_code: $('#postal_code')
            .val()
            .trim(),
            Description: $('#Description')
            .val()
            .trim(),
        };

        $.post('api/newPatient', newPatient)
        .then(data => {
            console.log(data);
            alert('Adding new patient...');
        });

        $('#first_name').val("");
        $('#last_name').val("");
        $('#DOB').val("");
        $('#gender').val("");
        $('#postal_code').val("");
        $('#Description').val("");

        $.get('/patientList', isAuthenticated, (req, res) => {
            res.render('patientList', {});
        });
    });
});