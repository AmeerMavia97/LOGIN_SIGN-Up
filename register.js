import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


const names = document.querySelector("#name")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const country = document.querySelector("#country")
const password = document.querySelector("#password")
const registerbtn = document.querySelector("#btn")
const emailused = document.querySelector("#email-used")

let arr = [];

registerbtn.addEventListener("submit" , (e)=>{
  e.preventDefault();
  const obj = {
    names: names.value,
    lastname: lastname.value,
    email: email.value,
    country: country.value,
    password: password,
  }
  arr.push(obj)
  console.log(arr);
createUserWithEmailAndPassword(auth, email.value , password.value )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'REGISTER SUCCESSFULLY',
      showConfirmButton: false,
      timer: 1500
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Swal.fire({
      title: errorCode,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  })
  email.value = "";
  names.value = "";
  lastname.value = "";
  password.value = "";
  country.value = "";
})











// let rightNow = new Date().getTime();
// console.log(rightNow);
// console.log('date' , rightNow);
// console.log('date' , rightNow.getDate());
// console.log('day' , rightNow.getDay());
// console.log('hours' , rightNow.getHours());
// console.log('minutes' , rightNow.getMinutes());
// console.log('seconds' , rightNow.getSeconds());
// console.log('millisecond' , rightNow.getMilliseconds());
// console.log('month' , rightNow.getMonth());
// console.log('full year' , rightNow.getFullYear());
// console.log('time' , rightNow.getTime());









// let today = new Date().getTime();
// let birthDate = new Date('july 12, 2006').getTime();
// let remainingMilliSeconds = today - birthDate;
// let remainingDays = remainingMilliSeconds / 1000 / 60 /60 / 24 / 7 / 4.5 / 12 
// // / 60 / 60 / 24 / 7 / 4.5 / 12

// console.log('today===>' , today)
// console.log('birthDate ===>' , birthDate)
// console.log('remainingMilliSeconds ===>' , remainingMilliSeconds)
// console.log('remainingDays ===>', Math.ceil(remainingDays))



// const date = new Date('January 25, 2022');
// date.setHours(5);
// date.setMinutes(50);
// date.setSeconds(40)
// console.log(date);