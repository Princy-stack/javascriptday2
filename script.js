// btn = document
// console.log(document.getElementById("btn"));
// btn.onclick = function(){
//     console.log("click");
//     alert("test");
// }
// btn.addEventListener("click",function(){
//     console.log("Hello");
// })

var text = document.getElementById("txt");
var text2 = document.getElementById("txt1");
var calcul = document.getElementById("btn");
var resultat = document.getElementById("result");
var signe = document.getElementById("select1");

calcul.onclick = function() {
// parseInt (a.value) + parseInt (b.value); raha anao plus sur js   
//console.log(text.value * text2.value);
var tout = text.value * text2.value;

    if (signe.value === "*") {
        tout = parseInt(text.value) * parseInt (text2.value)
        resultat.innerHTML = calcul ;
    }
    if (signe.value === "+") {
        tout = parseInt(text.value) + parseInt (text2.value)
        resultat.innerHTML = calcul ;
    }
    if (signe.value === "-") {
        tout = parseInt(text.value) - parseInt (text2.value)
        resultat.innerHTML = calcul ;
    }
    if (signe.value === "/") {
        tout = parseInt(text.value) / parseInt (text2.value)
        resultat.innerHTML = calcul ;
    }
 

    resultat.innerHTML = tout
}

