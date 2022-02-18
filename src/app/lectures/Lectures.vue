
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      id_user: null,
      id_category: null,
      users: [],
      dataCategory: [],
      user: JSON.parse(localStorage.getItem("user")),
      posts:[],
      
      // url: 'http://localhost:3001/api/items/getdata'
    };
  },
  mounted() {
    axios.get(`http://localhost:3001/api/items/profilPosts/${this.user.id_user}`).then((response) => {
      this.posts = response.data;
      console.log(this.posts);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
    axios.get("http://localhost:3001/api/items/category").then((res) => {
      this.dataCategory = res.data;
      console.log(this.dataCategory);
    });
  },
  methods: {
    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
    add() {
      var option = {
        id_category: this.id_category,
        // id_user: this.id_user,
      };
      console.log(option);
      axios
        .put(`http://localhost:3001/api/items/user/${this.id_user}`, option)
        .then((response) => {
          location.reload();
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
  <div class="formbg">
    <div class="formbg-inner padding-horizontal--48">
      <span class="padding-bottom--15">Users List </span>
      <!-- <form id="stripe-login"> -->
      <div class="field padding-bottom--24">
        <table>
          <td><h5>title</h5></td>
          <td><h5>category</h5></td>
          <!-- <td><h5>description</h5></td> -->
          <td><h5>Picture</h5></td>
          
          <td><h5>Create room</h5></td>
          <tr v-for="elem in this.posts" :key="elem">
            <td>{{ elem.title }}</td>
            <td>{{ elem.label_type }} <img class="img" :src="elem.image_type" alt="" /></td>
            <!-- <td>{{ elem.description }}</td> -->
            <td><img class="img" :src="elem.image_post" alt="" /></td>
            
            <td><a href="http://localhost:8080/">Create</a></td>
          </tr>
        </table>
        <!-- <hr />
        <h4>change category of User</h4>
        <div class="flex-flex">
          <label>Users</label>
          <select name="id_user" @input="change">
            <option value="">select User</option>

            <option
              v-for="elem in this.users"
              :key="elem"
              :value="elem.id_user"
            >
              {{ elem.firstName }} {{ elem.firstName }}
            </option>
          </select>
          <label>select User</label>
          <select name="id_category" @input="change">
            <option value="">select Category</option>

            <option
              v-for="elem in this.dataCategory"
              :key="elem"
              :value="elem.id_category"
            >
              {{ elem.label_category }}
            </option>
          </select>
          <button v-on:click="add()">Submit</button>
        </div> -->

        
      </div>
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
table,
th,
td {
  border: 1px solid black;
}
table {
  width: 100%;
}
.img {
  width: 1cm;
  height: 1cm;
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