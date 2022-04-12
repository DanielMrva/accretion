const loginContainer = document.getElementById("login");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const square = document.querySelector(".square");
const squareOne = document.querySelector(".square-1");
const squareTwo = document.querySelector(".square-2");
const expandArrow = document.getElementById("expandArrow");
const sideNav = document.getElementById("sideNav");


// loginBtn.onclick = function () {
//     if (loginContainer.style.display !== "none") {
//         loginContainer.style.display = "flex";
//         loginBtn.style.display = "none";
//         signUpBtn.style.display = "none";
//         square.style.display = "none";
//         squareOne.style.display = "none";
//         squareTwo.style.display = "none";
//     }
// };

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
    document.getElementById('rightMain').style.marginLeft = '130px';
    document.getElementById('expandArrow').style.marginLeft = "320px";
};


function closeNav () {
  document.getElementById('sideNav').style.marginLeft = '-320px';
  document.getElementById('rightMain').style.marginLeft = '0';
  document.getElementById('expandArrow').style.marginLeft = '0';
};

function navMove () {
    if (sideNav.style.marginLeft === "-320px") {
        openNav();
    } else {
        closeNav();
    }
}

