let navbar=document.getElementById("navBar");

function togglebtn(){
    navbar.classList.toggle("hideMenu");
}
<<<<<<< HEAD
function UserLogin(){
    let findYour=document.getElementsByClassName("find-your")[0];
    findYour.style.display="none";
    let userLogin=document.getElementsByClassName("user-login")[0];
    userLogin.style.display="block";
}
function cancelBtn(){
    let userLogin=document.getElementsByClassName("user-login")[0];
    userLogin.style.display="none";
    let findYour=document.getElementsByClassName("find-your")[0];
    findYour.style.display="block";
}
=======
let minimize=document.getElementById("mini");
var loginBox=document.getElementById("miss");
minimize.addEventListener("click", function(){
    loginBox.style.display="none";
});
let registerBtn=document.getElementById("trigger");
registerBtn.addEventListener("click", function(){
    loginBox.style.display="block";
});
>>>>>>> 7c16f7921ec93bd623bd4d65108a43a5d857c9a3
