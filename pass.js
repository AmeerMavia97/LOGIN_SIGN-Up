import {updatePassword  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const password = document.querySelector("#password");
const confirmpass = document.querySelector("#confirmpass");

const btn = document.querySelector("#btn")
const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

btn.addEventListener("submit" , (e)=>{
    e.preventDefault();
    if(password.value === confirmpass.value){
        updatePassword(user, newPassword).then(() => {
            // Update successful.
          }).catch((error) => {

          });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'PASSWORD NOT SAME',
            text: errorCode,
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
})