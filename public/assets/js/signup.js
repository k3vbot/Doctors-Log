$(document).ready(() => {
    const signUpform = $("form.signup");
    const firstNameInput = $("input#first-name-input");
    const lastNameInput = $("input#last-name-input");
    const usernameInput = $("input#username-input");
    const passwordInput = $("input#password-input");

    signUpform.on("submit", event => {
        event.preventDefault();
        const userData = {
            first_name: firstNameInput.val().trim(),
            last_name: lastNameInput.val().trim(),
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.first_name || !userData.last_name || !userData.username || !userData.password) {
            return;
        }

        signUpUser(userData.first_name, userData.last_name, userData.username, userData.password);
        firstNameInput.val("");
        lastNameInput.val("");
        usernameInput.val("");
        passwordInput.val("");
    });

    function signUpUser(first_name, last_name, username, password) {
        $.post("/api/signup", {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password
        }).then(() => {
            window.location.replace("/patientList");
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").test(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});