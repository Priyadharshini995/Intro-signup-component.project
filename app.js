let exclamation = document.getElementsByClassName("error");
let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let formError = document.getElementsByClassName("form_error");
let input = document.getElementsByTagName("input");


function formValidation(event) {
  
    for (i = 0; i < 4; i++){
      
      input[i].classList.remove("error");
      formError[i].style.display = "none";
      
      
      if (!email.validity.valid) {
        formError[2].style.display = "block";
        email.classList.add("error");
        event.preventDefault();
      }

      
    }

  }

  
  form.addEventListener("submit", formValidation, false)