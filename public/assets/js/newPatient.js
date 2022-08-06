$(document).ready(() => {
    $("#addPatientBtn").on('click', event => {
        event.preventDefault();

        const newPatient = {
            firstName: $('#firstName')
            .val()
            .trim(),
            lastName: $('#lastName')
            .val()
            .trim(),
            dob: $('#dob')
            .val()
            .trim(),
            gender: $('#gender')
            .val()
            .trim(),
            postalCode: $('#postalCode')
            .val()
            .trim(),
            description: $('#description')
            .val()
            .trim(),
        };

        $.post('api/new', newPatient)
        .then(data => {
            console.log(data);
            alert('Adding new patient...');
        });

        $('#firstName').val("");
        $('#lastName').val("");
        $('#dob').val("");
        $('#gender').val("");
        $('#postalCode').val("");
        $('#description').val("");

        $.get('/userProfile', isAuthenticated, (req, res) => {
            res.render('userProfile', {});
        });
    });
});