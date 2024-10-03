let users = [
    {password: "deepfake" },
    {password: "DEEPFAKE" },
    {password: "Deepfake" },
    {password: "DeepFake" }
  ];
  
  function performLogin() {
    let passwordInput = document.getElementById("password").value;
    let loginMessageContainer = document.getElementById("login-message");
  
    
    let user = users.find(u => u.password === passwordInput);
    console.log(user)
    
    
    if (user) {
      window.location.href = 'runnerup.html';
    } else {
      loginMessageContainer.innerHTML = `Oops! Looks like you didn't catch the Killer yet! <br> 
      (Hint:The Killer is not a human...)`;
        loginMessageContainer.style.color = "#D73F40"; // Red color for failure
    }
  }