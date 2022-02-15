
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

  
</template>

<style>

</style>