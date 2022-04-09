function verifnom(x){
    test=1;
for(var  i=0; i <x.value.length;i++){
if((x.value.charAt(i)<"A"||x.value.charAt(i)>"Z")&&(x.value.charAt(i)<"a"|| x.value.charAt(i)>"z")){
             test=0
    }
    else {
        test=1
    }
}
return test;
}
function verifage(x){
    test=1;
for(var  i=0; i <x.value.length;i++){
if(x.value.charAt(i)<"0"||x.value.charAt(i)>"9"){
             test=0
    }
    else {
        test=1
    }
}
return test;
}

function verifemail(x){
    test=1;
    if(x.value.indexOf("@")==-1 && x.value.indexOf(".")==-1){
        test=0
    }
    else{
        test=1
    }
    return test
}

function verif(){
    //verif nom 

    var nom = document.getElementById("nom");
    var nom1=document.querySelector("#nom");
    var nom2=document.querySelector("#erreur1");
    if(nom.value==""){
        alert("veuillez saisir votre nom")
        document.getElementById("erreur1").innerHTML="veuillez saisir votre nom"
        nom1.style.borderColor="red"
        nom1.style.backgroundColor="red"
         nom2.style.color="red"
    }
   else if(verifnom(nom)==0){
       alert("caractere seulement")
        document.getElementById("erreur1").innerHTML="caractere sulement !"
         nom2.style.color="red"
         nom1.style.borderColor="red"
         nom1.style.backgroundColor="red"
    }
    else {
        document.getElementById("erreur1").innerHTML=""
         nom1.style.borderColor="green"
         nom1.style.backgroundColor="transparent"
    }
    //verif age
    var age = document.getElementById("age");
    var age1=document.querySelector("#age");
    var age2=document.querySelector("#erreur2");
    if(age.value==""){
        alert("veuillez saisir votre age")
        document.getElementById("erreur2").innerHTML="veuillez saisir votre age"
        age1.style.borderColor="red"
        age1.style.backgroundColor="red"
         age2.style.color="red"
    }
   else if(verifage(age)==0){
       alert("nombre seulement")
        document.getElementById("erreur2").innerHTML="nombre sulement !"
         age2.style.color="red"
         age1.style.borderColor="red"
         age1.style.backgroundColor="red"
    }
    else {
        document.getElementById("erreur2").innerHTML=""
         age1.style.borderColor="green"
         age1.style.backgroundColor="transparent"
    }

//  verif email 

var email = document.getElementById("email");
var email1=document.querySelector("#email");
var email2=document.querySelector("#erreur3");
if(email.value==""){
    alert("veuillez saisir votre email")
    document.getElementById("erreur3").innerHTML="veuillez saisir votre email"
    email1.style.borderColor="red"
    email1.style.backgroundColor="red"
     email2.style.color="red"
}
else if(verifemail(age)==0){
    alert("manque @ et .")
    document.getElementById("erreur3").innerHTML="manque @ et ."
     email2.style.color="red"
     email1.style.borderColor="red"
     email1.style.backgroundColor="red"
}
else {
    document.getElementById("erreur3").innerHTML=""
         email1.style.borderColor="green"
         email1.style.backgroundColor="transparent"
}


}

