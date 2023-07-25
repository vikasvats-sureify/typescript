import "./style.css";
import userlogin from "./classes/userLogin";
// import typescriptLogo from "./typescript.svg";

// const root = document.querySelector<HTMLDivElement>("#app");
// import userlogin from "../classes/userLogin";

let newAccountLink= document.getElementById("new-account-link") as HTMLElement ;
let loginForm = document.getElementById("login-page") as HTMLElement;
let newAccountForm = document.getElementById("new-account-form") as HTMLElement;
let createAccountBtn = document.getElementById("create-account") as HTMLElement;
let loginBtn = document.getElementById("login") as HTMLElement;
let registerName = document.getElementById("register-name") as HTMLInputElement;
let registerUsername = document.getElementById("register-username") as HTMLInputElement;
let registerPassword = document.getElementById("register-password") as HTMLInputElement;
let registerPasswordAgain = document.getElementById("register-password-again") as HTMLInputElement;
let registerEmail = document.getElementById("register-email") as HTMLInputElement;
let notification = document.getElementById("alarm-msg") as HTMLElement;
let accountNotification = document.getElementById("account-notification") as HTMLElement;
let username = document.getElementById("username")  as HTMLInputElement;
let password = document.getElementById("password") as HTMLInputElement;

let container = document.getElementById("model-container") as HTMLElement;
let closeButton =  document.getElementById("close-button") as HTMLElement; 
let blockButton =  document.getElementById("block-user") as HTMLElement; 

let tableName = document.getElementById("table-name") as HTMLElement;
let tableUsername =  document.getElementById("table-username") as HTMLElement;
let tableEmail =  document.getElementById("table-email") as HTMLElement;

newAccountLink.onclick = function(){
  newAccountForm.classList.remove('close');
  loginForm.classList.add("close");
}

createAccountBtn.onclick= function(){
  if(registerName.value == "" || registerUsername.value  == "" || registerPassword.value == "" || registerEmail.value  == "" )
    {
      accountNotification.innerHTML = "Invalid or Empty Field";   
      accountNotification.classList.add('error'); 
      disappearNotifiction()
      return false;
    }
    if(registerPassword.value != registerPasswordAgain.value )
    {
      accountNotification.innerHTML = "Password Field Missmatch";   
      accountNotification.classList.add('error'); 
      disappearNotifiction()
      return false;
    }

  let user:NewUser = {
    name :registerName.value,
    username:registerUsername.value,
    password:registerPassword.value,
    email:registerEmail.value,
  }
  userlogin.Register(user)
  newAccountForm.classList.add('close');
  loginForm.classList.remove("close");

  notification.innerHTML = "User Created, Try login Now";
  disappearNotifiction()
}

loginBtn.onclick= function(){
    if(username.value == "" || password.value  == "" )
    {
      notification.innerHTML = "Invalid Field";   
      notification.classList.add('error'); 
      disappearNotifiction()
      return false;
    }
   

  if( userlogin.Login(username.value,password.value)) {
      notification.innerHTML = "Successfully Login";
      togglecontainer()
      insertUserInfo()
  } else {
      notification.innerHTML = "Login Failed";   
      notification.classList.add('error'); 
  }
  disappearNotifiction()
}

function disappearNotifiction() {
  setTimeout(function(){
    notification.innerHTML = '';
    notification.classList.remove('error'); 
  }, 4000);
} 

function togglecontainer() {
  container.classList.toggle("show-container");
}

function insertUserInfo(){
  let info = userlogin.RetriveUser()
  tableName.innerHTML =info.name;
  tableUsername.innerHTML =info.username;
  tableEmail.innerHTML =info.email;
}

function blockUser(){
  userlogin.BlockUser();
  togglecontainer();
  notification.innerHTML = "User Blocked";
  disappearNotifiction()
}

closeButton.addEventListener("click", togglecontainer);
blockButton.addEventListener("click", blockUser);

