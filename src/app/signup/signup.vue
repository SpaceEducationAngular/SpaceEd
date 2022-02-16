
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
  <section class="vh-100" style="background-color: rgb(238, 238, 238)">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          name="firstName"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example1c"
                          >First Name</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          name="lastName"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Last Name</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          name="email"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Email</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          name="password"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                          name="confirmPassword"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example4cd"
                          >Confirm Password</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="date"
                          id="form3Example1c"
                          class="form-control"
                          name="dob"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Date of Birth</label
                        >
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          id="form3Example1c"
                          class="form-control"
                          name="phone"
                          @input="change"
                        />
                        <label class="form-label" for="form3Example1c"
                        >Phone number</label
                        >
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="file"
                          id="form3Example1c"
                          class="form-control"
                          name="image_user"
                          @input="changefile"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Image</label
                        >
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <a href="/"><button type="button" class="btn btn-primary btn-lg" v-on:click="add();">
                        Register
                      </button></a>
                    </div>
                  </form>
                </div>
                <div
                  class="
                    col-md-10 col-lg-6 col-xl-7
                    d-flex
                    align-items-center
                    order-1 order-lg-2
                  "
                >
                  <img
                    src="../img/edu.png"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>