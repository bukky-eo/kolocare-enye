<template>
  <div>
    <div>
      <div></div>
      <div class="form-box">
          <input type="text" name="" id="" class="form-input" aria-label="Username" placeholder="Username">
          <input type="email" name="" id="" class="form-input" aria-label="Email" placeholder="Email">
          <input type="password" name="password" id="" class="form-input" aria-label="Password" placeholder="Password">
          <button class="btn">Sign Up</button>

          <div class="or-box">
              <hr class="hr-or">
              <span class="or">Or</span>              
          </div>
      </div>
    </div>
  </div>
</template>



<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
</script>

<style scoped>
.form-input {
    /* border: 1px solid ; */
    border-radius: 5px;
    border: none;
    font-size: 18px;
    box-shadow: 0 0 1px rgba(0, 0, 0, .5);
    padding: 8px 10px;
    width: 100%;
    margin: 10px auto;
}
.btn{
    width: 100%;
    margin: 10px auto;
    padding:8px 30px;
    background-color: white;
    border:2px solid #44B1C0;
    font-size: 20px;
    font-weight: 100;
    border-radius: 5px;
    color:#44B1C0;
}
.btn:hover{
    background-image: linear-gradient( #44B1C0,#44B1C0,#5479D2);
    color:white;
    cursor: pointer;
}
.or-box {
    position: relative;
}
.hr-or {
    border: none;
    background: black;
    height: 1px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
}
.or {
    display: inline-block;
    background: #ffffff;
    position: relative;
    z-index: 2;
    padding: 2px 5px;
}
</style>
