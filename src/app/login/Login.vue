
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
    add() {
      var option = {
        email: this.email,
        password: this.password,
      };
      console.log(option);
      axios
        .post("http://localhost:3001/api/items/userlogin", option)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data[0]));
          // location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<!-- <template>
  <div>
    <h1>Email</h1>
    <input name="email" @input="change" />
    <h1>Password</h1>
    <input name="password" @input="change" />
    <button v-on:click="add()">Submit</button>
    
  </div>
</template>
<style scoped>
.mat-dialog-container {
    display: block;
    padding: 24px;
    border-radius: 4px;
    box-sizing: border-box;
    overflow: auto;
    outline: 0;
    width: 100%;
    height: 100%;
    min-height: inherit;
    max-height: inherit;
}
.mat-dialog-container {
    box-shadow: 0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f;
    background: #fff;
    color: #000000de;
}
.mat-body, .mat-body-1, .mat-typography {
    font: 400 14px/20px Inter;
    letter-spacing: .0179em;
} -->
<!-- /* body {
    --primary-color: #ee493a;
    --primary-lighter-color: #fac8c4;
    --primary-darker-color: #e73125;
    --text-primary-color: #fff;
    --text-primary-lighter-color: #000000de;
    --text-primary-darker-color: #fff;
    --accent-color: #feca1d;
    --accent-lighter-color: #ffefbb;
    --accent-darker-color: #feb711;
    --text-accent-color: #000000de;
    --text-accent-lighter-color: #000000de;
    --text-accent-darker-color: #000000de;
    --warn-color: red;
    --warn-lighter-color: #ffb3b3;
    --warn-darker-color: red;
    --text-warn-color: #fff;
    --text-warn-lighter-color: #000000de;
    --text-warn-darker-color: #fff;
} */
</style> -->

<template>
<div class="all">
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
          alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <!-- <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button> -->

            <!-- <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button> -->

            <!-- <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button> -->
          </div>

          <!-- <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div> -->

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email" @input="change" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" name="password" @input="change"  />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
          
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
           <a href="http://localhost:3000"> <button   type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;" v-on:click="add()">Login  </button></a>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="http://localhost:3000/Signup"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-light">
    <!-- Copyright -->
    <div class="text-black mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    <!-- Copyright -->

    <!-- Right -->
    <!-- <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div> -->
    <!-- Right -->
  </div>
</section>
</div>
</template>
<style>
/* .all {
  position: absolute;
  height: 50px;
} */
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: rgb(238, 238, 238);
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>