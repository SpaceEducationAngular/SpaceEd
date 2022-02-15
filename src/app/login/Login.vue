
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

</template>
<style>
/* .all {
  position: absolute;
  height: 50px;
} */

</style>