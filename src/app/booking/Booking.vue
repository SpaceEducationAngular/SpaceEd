
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
      booked:[],
      
      // url: 'http://localhost:3001/api/items/getdata'
    };
  },
  mounted() {
    axios.get(`http://localhost:3001/api/items/booking/${this.user.id_user}`).then((response) => {
      this.booked = response.data;
      console.log(this.booked);
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