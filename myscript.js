const myName = document.querySelector("#myName");
const btnName = document.querySelector("#btnName");
//even listener on button click
btnName.addEventListener("click", displayName);
function displayName() {
  myName.value = "Cecilia";
}
// lights on mouse over
let imageOff = document.querySelector("#imageOff");
//imageOff.addEventListener("mouseover",switchlights)
imageOff.addEventListener("mouseover", lightsOn);

function lightsOn() {
  imageOff.src = "images/lighton.png";
}
imageOff.addEventListener("mouseout", lightsOff);
function lightsOff() {
  imageOff.src = "images/lightoff.png";
}
let btndbName = document.querySelector("#btndbName");
btndbName.addEventListener("dblclick", displayContent);
btndbName.addEventListener("mouseout", removeContent);

function displayContent() {
  const displayPara = document.querySelector("#displayPara");
  displayPara.innerHTML = `<img src="images/smileyface.png">`;
}
function removeContent() {
  const displayPara1 = document.querySelector("#displayPara");
  displayPara1.innerHTML = "";
}
//traffic lights
//const btnStop = document.querySelector("btnStop");
//const btnReady = document.querySelector("btnReady");
//const btnGo = document.querySelector("btnGo");
stopDiv = document.querySelector("#stopDiv");
readyDiv = document.querySelector("#readyDiv");
goDiv = document.querySelector("#goDiv");
btnStop = document.querySelector("#btnStop");
btnReady = document.querySelector("#btnReady");
btnGo = document.querySelector("#btnGo");
btnStop.addEventListener("click", stopTraffic);
//btnStop.addEventListener("click", stopTraffic);
function stopTraffic() {
  stopDiv.style.backgroundColor = "red";
  readyDiv.style.backgroundColor = "black";
  goDiv.style.backgroundColor = "black";
}
btnReady.addEventListener("click", goTraffic);
function goTraffic() {
  readyDiv.style.backgroundColor = "green";
  stopDiv.style.backgroundColor = "black";
  goDiv.style.backgroundColor = "black";
}
btnGo.addEventListener("click", waitTraffic);
function waitTraffic() {
  readyDiv.style.backgroundColor = "black";
  stopDiv.style.backgroundColor = "black";
  goDiv.style.backgroundColor = "orange";
}
firstName = document.querySelector("#firstName");
//change border color
btn2Name = document.querySelector("#btn2Name");
btn2Name.addEventListener("click", changeBordercolor);
function changeBordercolor() {
  firstName.style.borderColor = "red";
}
let myName2 = document.querySelector("#myName2");
let btnSub2 = document.querySelector("#btnSub2");
let errMsg = document.querySelector("#errMsg");

btnSub2.addEventListener("click", validate);
function validate() {
  let value = myName2.value.length;
  if (value < 8) {
    errMsg.innerHTML = "length of the string should be greater than 8";
    errMsg.style.color = "red";
  } else errMsg.innerHTML = "";
}

let btnProfile = document.querySelector("#btnProfile");
let displayCard = document.querySelector("#displayCard");
//let errMsg = document.querySelector("#errMsg");

btnProfile.addEventListener("click", profile);
function profile() {
  const profileCard = {
    name: "Cecilia",
    location: "Sydney",
    role: "Web developer",
    image: "./Images/smileyface.png",
  };
  for (let property in profileCard) {
    displayCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="img/smileyface.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${profileCard.name}</h5>
    <p class="card-text">${profileCard.role}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  }
}
//display key code on key press
let myKey = document.querySelector("#myKey");
myKey.addEventListener("keydown", alertKey);
function alertKey(event) {
  var char = event.keyCode;
  document.querySelector("#myKeyCode").innerHTML = char;
}
//digital clock
let myclock = document.querySelector("#myClock");
function showTime() {
  var d = new Date();
  var s = d.getSeconds();
  //var s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  myClock.textContent = h + ":" + m + ":" + s;
}
setInterval(showTime,1000);
//captcha
function generateRandomString(length) {
  var result = "";
  var newcaptcha = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
newcaptcha = generateRandomString(5);
let captchaText = document.querySelector("#myCaptcha");
document.querySelector("#myCaptcha").innerHTML = newcaptcha;
let btnCheckCaptcha = document.querySelector("#btnCheckCaptcha");
btnCheckCaptcha.addEventListener("click", checkCaptcha);

function checkCaptcha() {
  if (document.querySelector("#cpatchaTextBox").value === newcaptcha) {
    alert("Entered correctly");
  } else {
    alert("wrong");
  }
}
//rotate image
const myRImage = document.querySelector("#myRImage");
myRImage.addEventListener("click", rotateImg);
function rotateImg() {
  if (myRImage.className === "normal") {
    myRImage.className = "rotate";
  } else if (myRImage.className === "rotate") {
    myRImage.className = "normal";
  }
}
//palindrome
const btnSubP = document.querySelector("#btnSubP");
const myTextBox = document.querySelector("#myText");
myTextBox.addEventListener("blur", palindrome);
function palindrome() {
  const myText = document.querySelector("#myText").value;
  alert(myText.split("").reverse().join(""));
  if (myText == myText.split("").reverse().join("")) {
    document.querySelector("#displayP").innerHTML = "Palindrome";
  } else {
    document.querySelector("#displayP").innerHTML = "Not palindrome";
  }
}
//hobbies list
let  btnHobbies = document.querySelector("#btnHobbies");
btnHobbies.addEventListener("click",addHobbies);
function addHobbies()
{
  for (i=0;i<3;i++){
 let hobbies = document.querySelector("#hobbies > ul");
  let li=document.createElement('li')
  let hobby=prompt("List your Hobbies");
  li.innerHTML = hobby;
  hobbies.appendChild(li);
  }
}
//Remove Event Listener
let myRBtn = document.querySelector("#myRBtn");

let myRDiv = document.querySelector("#myRDiv");
let demo = document.querySelector("#demo");
//let myRBtn = document.querySelector("#myRBtn");
function randomNumbers()
{
 demo.innerHTML= Math.random()
}
myRDiv.addEventListener("mousemove", randomNumbers);
myRBtn.addEventListener("click", removeListener);
function removeListener()
{
  myRDiv.removeEventListener("mousemove", randomNumbers);
}
//validation
const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", validate);
//
var auth = [
  {
    username: "superadmin",
    password: "tiger",
  },
  {
    username: "admin",
    password: "bear",
  },
  {
    username: "lavina",
    password: "wolf",
  },
  {
    username: "john",
    password: "deer",
  },
];

