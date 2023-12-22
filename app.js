let pass = document.querySelector("#listenEye");

let password = document.querySelector("#password");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    pass.style.display = "block";
  } else {
    pass.style.display = "none";
  }
});

pass.addEventListener("click", () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    pass.src = "components/visible.png";
  } else {
    password.setAttribute("type", "password");
    pass.src = "components/hidden.png";
  }
});

let inputName = prompt("Enter your name?");
let inputUser = document.querySelector("#name");

inputUser.innerHTML = inputName;
