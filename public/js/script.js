const loginContainer = document.getElementById("login");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const expandArrow = document.getElementById("expandArrow");
const sideNav = document.getElementById("sideNav");


function displayLogin () {
    if (loginContainer.style.display !== "none") {
        loginContainer.style.display = "flex";
        loginBtn.style.display = "none";
        signUpBtn.style.display = "none";
        square.style.display = "none";
        squareOne.style.display = "none";
        squareTwo.style.display = "none";
    }
};

function openNav () {
    document.getElementById('sideNav').style.marginLeft = '0';
    document.getElementById('rightMain').style.marginLeft = '320px';
    document.getElementById('expandArrow').style.marginLeft = "320px";
};

function closeNav () {
  document.getElementById('sideNav').style.marginLeft = '-320px';
  document.getElementById('rightMain').style.marginLeft = '0';
  document.getElementById('expandArrow').style.marginLeft = '320';
};

function navMove () {
    if (sideNav.style.marginLeft === "-320px") {
        openNav();
    } else {
        closeNav();
    }
}

