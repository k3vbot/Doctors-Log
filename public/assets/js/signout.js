function signout() {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/");
      })
      .catch(err => console.log(err));
  }
  
  document.querySelector("#signout-link").addEventListener("click", signout);