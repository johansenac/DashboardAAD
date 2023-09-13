const nom = document.getElementById("nom");
const nomTitre = document.getElementById("nomTitre");
const phoneFixe= document.getElementById("phoneFixe");
const phoneMobile= document.getElementById("phoneMobile");
const email= document.getElementById("email");
const adresse= document.getElementById("adresse");
const photo= document.getElementById("photo");
const job= document.getElementById("job");

window.onload = function() {
    var idConnexion = window.localStorage.getItem("idConnexion");
    if(idConnexion === "booba") {
        nom.innerHTML = "Boubacar Kansaghi Diallo";
        nomTitre.innerHTML = "Boubacar Kansaghi Diallo";
        phoneFixe.innerHTML = "05 36 13 74 83";
        phoneMobile.innerHTML = "06 36 13 74 83";
        email.innerHTML = "bbacarkansaghi@gmail.com";
        job.innerHTML = "Expert Business Intelligence";
        adresse.innerHTML = "159 Rue Louis Plana, Toulouse, Occitanie";
        photo.src= "assets/booba.jpg";
    }
    else if(idConnexion === "johan") {
        om.innerHTML = "Johan Senac";
        nomTitre.innerHTML = "Johan Senac";
        phoneFixe.innerHTML = "05 62 87 97 20";
        phoneMobile.innerHTML = "06 64 39 61 03";
        phoneFixe.innerHTML= "johansenac9@gmail.com";
        adresse.innerHTML = "110 Rue Fieux, 31100, Toulouse";
        photo.src = "assets/johan.jpg";
    }
}