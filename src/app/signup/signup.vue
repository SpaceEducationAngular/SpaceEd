
<script>
import axios from "axios";
import FormData from "form-data";
export default {
  data() {
    return {
      // datatype: JSON.parse(localStorage.getItem('type')),
      user: {},
    };
  },
  methods: {
    changefile(e) {
      let image = e.target.files[0];
      console.log(image);

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "nt1uphup");

      axios
        .post("http://api.cloudinary.com/v1_1/magico/image/upload", formData)
        .then((result) => {
          console.log(result.data.url);
          this.image_user = result.data.url;
        });
    },

    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name],event.target.name);
    },

    add() {
      var option = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phone: this.phone,
        dob: this.dob,
        id_category: 3,
        image_user: this.image_user,
      };
      console.log(option);
      axios
        .post("http://localhost:3001/api/items/user", option)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(option));
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
        <h1>First Name</h1>
        <input name="firstName" @input="change" />
        <h1>Last Name</h1>
        <input name="lastName" @input="change" />
        <h1>Email</h1>
        <input name="email" @input="change" />
        <h1>Password</h1>
        <input name="password" @input="change" />
        <h1>Confirm Password</h1>
        <input name="confirmPassword" @input="change" />
        <h1>phone</h1>
        <input name="phone" @input="change" />
        <h1>date of birth</h1>
        <input type="date" name="dob" @input="change" />
        <h1>image </h1>
        <input type="text" name="image_user" @input="change" />
        <button v-on:click="add();">Submit</button>
    </div>
</template> -->
<template>
  
</template>