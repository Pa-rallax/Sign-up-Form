var container = document.querySelector(".main");
var signupButton = document.querySelector(".signup-button");

signupButton.addEventListener("click", () => { container.classList.toggle('change') });

//Signup Action
const signinAct = document.querySelector("#signup2")
signinAct.addEventListener("click", checkDet);
function checkDet() {
  var bannerHeading = document.querySelector(".banner h1");
  var bannerP = document.querySelector(".banner p");
  var welcomeText = document.getElementById("input1").value;
  var signupForm = document.querySelector(".signup-form");

  //funcs
  bannerHeading.innerHTML = "Welcome Aboard, " + welcomeText;
  bannerP.innerHTML = " ";
  signupButton.classList.remove("signup-button");
  signupButton.innerHTML = "";
  signupForm.classList.remove("signup-form");
  signupForm.classList.add("text");
  document.querySelector(".text").innerHTML = "<h1> Site's under construction 🚧</h1>";
}




//Excess
// bannerP.classList.add("clean")