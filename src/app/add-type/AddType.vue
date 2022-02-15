
<script>
import axios from "axios";
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
    change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
    add() {
      var option = {
        label_type: this.label_type,
        image_type: this.image_type,
      };
      console.log(option);
      axios
        .post("http://localhost:3001/api/items/type", option)
        .then((response) => {
          console.log(response);
          location.reload();
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