<script>
import axios from "axios";

export default {
  props: ["change", "onchange", "search"],
  data() {
    return {
      datatype: [],
      input: "",
      posts: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/items/type").then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
    });

    axios.get("http://localhost:3001/api/items/homePosts").then((response) => {
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
<style scoped>

</style>