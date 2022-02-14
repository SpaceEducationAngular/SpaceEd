
<script>
import axios from "axios";
import FormData from "form-data";
export default {
  components: {},
  data() {
    return {
      title: "",
      description: "",
      datatype: [],
      user: JSON.parse(localStorage.getItem("user")),
      id_type: null,
      // url: 'http://localhost:3001/api/items/getdata'
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/type").then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
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
          this.image_post = result.data.url;
        });
    },
    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
    add() {
      var option = {
        title: this.title,
        description: this.description,
        image_post: this.image_post,
        id_type: this.id_type,
        id_user: this.user.id_user,
      };
      console.log(option);
      axios
        .post("http://localhost:3001/api/items/posts", option)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<template>
<br>
  <div class="formbg">
    <div class="formbg-inner padding-horizontal--48">
      <h3>Post a lecture:</h3>
      <div class="row">
        <div class="col">
          <!-- Name input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example1">Title:</label>
            <input type="text" id="form8Example1" class="form-control" name="title" :value="title" @input="change"/>
          </div>
        </div>
        <div class="col">
          <!-- Email input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example2">Description:</label>
            <input type="email" id="form8Example2" name="description" @input="change2"  />
          </div>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col">
          <!-- Name input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example2"
              >select the categorie:</label
            >

            <select class="form-select" aria-label="Default select example" name="id_type" @input="change">
              <option value="">select type of lecture</option>

              <option
                v-for="elem in this.datatype"
                :key="elem"
                :value="elem.id_type"
              >
                {{ elem.label_type }}
              </option>
            </select>
          </div>
        </div>
        <div class="col">
          <!-- Name input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example4">Image:</label>
            <input type="file" id="form8Example4" class="form-control" name="image_post"  @input="changefile" />
          </div>
        </div>
        <div class="col">
          <!-- Email input -->
          <div class="form-outline">
                    <label class="form-label" for="form8Example4">Click to submit:</label>
    
                <button class="btn btn-primary btn-block mb-4" v-on:click="add()">Submit</button>
          </div>
        </div>
      </div>
      <!-- <span class="padding-bottom--15">Add a lecture</span>
              <div class="field padding-bottom--24">
                <label>Title</label>
                <input name="title" :value="title" @input="change" />
                
                <label>description</label>
                <input name="description" @input="change2" />
                <label>type of The Lecture</label>
                <select name="id_type" @input="change">
                  <option value="">select type of lecture</option>

                  <option
                    v-for="elem in this.datatype"
                    :key="elem"
                    :value="elem.id_type"
                  >
                    {{ elem.label_type }}
                  </option>
                </select>

                <label>image</label>
                <input name="image_post" type="text" @input="change"/>
                <br>
                <br>
                <button class="btn btn-primary btn-block mb-4" v-on:click="add()">Submit</button>
              </div> -->
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Ubuntu, sans-serif;
}

h1 {
  letter-spacing: -1px;
}
a {
  color: #5469d4;
  text-decoration: unset;
}
.login-root {
  background: #fff;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.loginbackground {
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
}
.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.center-center {
  align-items: center;
  justify-content: center;
}
.box-root {
  box-sizing: border-box;
}
.flex-direction--column {
  -ms-flex-direction: column;
  flex-direction: column;
}

.box-divider--light-all-2 {
  box-shadow: inset 0 0 0 2px #e3e8ee;
}
.box-background--blue {
  background-color: #5469d4;
}
/* .box-background--white {
  background-color: #ffffff;
} */
.box-background--blue800 {
  background-color: #212d63;
}
.box-background--gray100 {
  background-color: #e3e8ee;
}
.box-background--cyan200 {
  background-color: #7fd3ed;
}
.padding-top--64 {
  padding-top: 64px;
}
.padding-top--24 {
  padding-top: 24px;
}
.padding-top--48 {
  padding-top: 48px;
}
.padding-bottom--24 {
  padding-bottom: 24px;
}
.padding-horizontal--48 {
  padding: 48px;
}
.padding-bottom--15 {
  padding-bottom: 15px;
}

.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}

.formbg {
  margin: 0px auto;
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
}
span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}
label {
  margin-bottom: 10px;
}
.reset-pass a,
label {
  font-size: 14px;
  font-weight: 600;
  display: block;
}
.reset-pass > a {
  text-align: right;
  margin-bottom: 10px;
}
.grid--50-50 {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}
a.ssolink {
  display: block;
  text-align: center;
  font-weight: 600;
}

.listing a {
  color: #697386;
  font-weight: 600;
  margin: 0 10px;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}
.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}
.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}
.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}

@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>