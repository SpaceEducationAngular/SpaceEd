
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
  
</template>

<style>

</style>