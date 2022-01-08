let navbar=document.getElementById("navBar");

function togglebtn(){
    navbar.classList.toggle("hideMenu");
}
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