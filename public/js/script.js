// const loginContainer = document.getElementById("login");
// const loginBtn = document.getElementById("loginBtn");

// loginBtn.onclick = function () {
//     if (loginContainer.style.display !== "none") {
//         loginContainer.style.display = "none";
//     } else {
//         loginContainer.style.display = "block";
//     }
// };

function openNav () {
    document.getElementById('sideNav').style.marginLeft = '0';
    document.getElementById('rightMain').style.marginLeft = '130px';
    document.getElementById('expandArrow').style.marginLeft = "300px";
};


function closeNav () {
  document.getElementById('sideNav').style.marginLeft = '-300px';
  document.getElementById('rightMain').style.marginLeft = '0';
  document.getElementById('expandArrow').style.marginLeft = "0";
};

