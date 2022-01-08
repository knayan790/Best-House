let navbar=document.getElementById("navBar");

function togglebtn(){
    navbar.classList.toggle("hideMenu");
}
let minimize=document.getElementById("mini");
var loginBox=document.getElementById("miss");
minimize.addEventListener("click", function(){
    loginBox.style.display="none";
});
let registerBtn=document.getElementById("trigger");
registerBtn.addEventListener("click", function(){
    loginBox.style.display="block";
});