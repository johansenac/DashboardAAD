
const inputs = document.querySelectorAll(".input-wrap input");
const formBtn = document.querySelector("#form-open-btn");
const form = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close");
const video = document.querySelector('.sign-up video');
const formulaireConnexion = document.getElementById("formulaire-connexion");
const boutonConnexion = document.getElementById("bouton-connexion");
const loginErrorMsg = document.getElementById("login-error-msg");
const email = document.getElementById("email");
const password = document.getElementById("password");


inputs.forEach(input => {
  input.addEventListener('focus', e => {
    input.previousElementSibling.classList.add('input-focused');
  });
  input.addEventListener('blur', () => {
    if(input.value === "" || input.value === null) {
      input.previousElementSibling.classList.remove('input-focused');
    }
  });
});

formBtn.addEventListener('click', () => {
  form.classList.add('form-show');
  formBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
  form.classList.remove('form-show');
  formBtn.style.display = "block";
});

function checkID() {
    var emailCheck = email.value;
    var passwordCheck = password.value;
    var connexionJohan = false;
    var connexionBouba = false;
    if (emailCheck === "johansenac9@gmail.com" && passwordCheck === "mdp") {
      connexionJohan = true;
    } else if (emailCheck === "bbacarkansaghi@gmail.com" && passwordCheck === "mdp") {
      connexionBouba = true;
    }
    if (connexionJohan) {
      window.localStorage.setItem("idConnexion", "johan")
      location.href="index.html";
    } else if (connexionBouba) {
      window.localStorage.setItem("idConnexion", "booba")
      location.href="index.html";
    } 
      else {
          loginErrorMsg.style.opacity = 1;
      }
}