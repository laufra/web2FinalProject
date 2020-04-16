function openLogIn(){
    document.getElementById("logInTable").style.display="block";
    document.getElementById("logInButtons").style.display="block";
    document.getElementById("signUpTable").style.display="none";
    document.getElementById("signUpButtons").style.display="none";
}

function openSignUp(){
    document.getElementById("signUpTable").style.display="block";
    document.getElementById("signUpButtons").style.display="block";
    document.getElementById("logInTable").style.display="none";
    document.getElementById("logInButtons").style.display="none";
}

function closeLogIn(){
    document.getElementById("logInTable").style.display="none";
    document.getElementById("logInButtons").style.display="block";
}

function closeSignUp(){
    document.getElementById("signUpTable").style.display="none";
    document.getElementById("signUpButtons").style.display="none";
}