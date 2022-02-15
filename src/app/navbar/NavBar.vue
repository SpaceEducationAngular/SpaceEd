<script>
import axios from "axios";

export default {
  props:["change"],
  data() {
    return {
      datatype: [],
      key:0,
      user:{},
      id_category:0
      
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/type").then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
    });
    this.user=JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
    if(this.user!==null){
      this.id_category=this.user.id_category
      this.index=1
    }
  },
  methods: {
    changeKey(){
      localStorage.setItem('key',this.key)
      location.reload();
    },
    logout(){
      localStorage.removeItem("user")
      localStorage.setItem('key',this.key)
      localStorage.removeItem('profil')
      location.reload();
    }
  }
};
</script>
<template>
  <div>
    <ul>
      <div className="centerReste">
        <li>
          <router-link to="/"> <img src="https://media.discordapp.net/attachments/940527646540972052/941874057379455006/spaceeducationblanc.png?width=1313&height=671" alt="" class="img"> </router-link>
        </li>
        <li>
          <a> <router-link to="/"> Home </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/AboutUs"> AboutUs </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Booked" v-if="this.id_category!==0" > Booked </router-link> </a>
        </li>
        <li>
          <a> <router-link to="/Lectures" v-if="this.id_category!==0&&this.id_category !==3 " > Lectures </router-link> </a>
        </li>
        <li>
          <a> <router-link v-if="this.id_category!==0&&this.id_category !==3 "  to="/Post" > Post </router-link> </a>
        </li>
        
        <!-- <li>
          <a> <router-link to="/Payment"> Payment </router-link> </a>
        </li> -->
        <li>
          <a> <router-link v-if="this.id_category===1" to="/ListUser"> List User </router-link> </a>
        </li>
        <li>
          <a> <router-link v-if="this.id_category===1" to="/AddType"> Add Type </router-link> </a>
        </li>
      </div>
      <div className="center">
        <li>
          <a> <router-link v-if="this.id_category===0" to="/Login"> Login </router-link> </a>
        </li>
        <li>
          <a> <router-link v-if="this.id_category===0" to="/Signup"> Signup </router-link> </a>
        </li>
        <li>
          <a @click="changeKey"> <router-link v-if="this.id_category!==0" to="/Profil"> Profil </router-link> </a>
        </li>
        <li>
          <a @click="logout"> <router-link v-if="this.id_category!==0" to="/"> Logout </router-link> </a>
        </li>
      </div>
    </ul>
  </div>
  


</template>

<style>
/* body {
  font-size: 28px;
} */

</style>
