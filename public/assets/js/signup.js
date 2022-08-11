    const signUpform = document.getElementById("signupBtn");
 
    const SigninusernameInput = document.getElementById("signupUsernameInput");
    const SigninpasswordInput = document.getElementById("signupPasswordInput");

    signUpform.addEventListener('click', async (event) => {

        event.preventDefault();
        const username = SigninusernameInput.value;
        const password = SigninpasswordInput.value;

        if(username.trim().length === 0){
            alert('Please enter a valid first name');
            return;
        }    

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            await response.json();
            // change user window to the /users endpoint
           window.location.href = '/signin';
        } catch (error) {
            alert(error);
        }
    });



  