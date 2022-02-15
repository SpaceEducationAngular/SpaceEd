<script>
import axios from "axios";
import NavBar from "../navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      posts: [],
      user: {},
      key: 0,
    };
  },
  mounted() {
    this.key = localStorage.getItem("key");
    if (this.key == 1) {
      this.user = JSON.parse(localStorage.getItem("profil"))[0];
    } else {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    console.log(this.user);
    axios
      .get(`http://localhost:3001/api/items/profilPosts/${this.user.id}`)
      .then((response) => {
        this.posts = response.data;
        console.log(this.posts);
        // location.reload();
        // localStorage.setItem("posts", JSON.stringify(this.posts));
      });
  },
  methods: {},
};
</script>

<template>
  
</template>

<style>

</style>