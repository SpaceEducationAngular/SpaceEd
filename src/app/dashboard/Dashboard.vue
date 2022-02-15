
<script>
import App from "../app/App.vue"
import axios from 'axios';
export default {

  data() {
    return {
      title: "",
      description: "",
      datatype: JSON.parse(localStorage.getItem('type')),
      id_type: null,
      url: 'http://localhost:3001/api/items/getdata'
    }

  },
  methods: {


    change(event) {
      this.title = event.target.value
      console.log(this.datatype)
    },
    change1(event) {
      this.id_type = event.target.value
      console.log(this.id_type)
    },
    change2(event) {
      this.description = event.target.value
      console.log(this.description)
    },
    add() {
      var option = {
        id_type: this.id_type,
        title: this.title,
        description: this.description
      }
      console.log(option)
      axios.post('http://localhost:3001/api/items/lecture', option).then((response) => {
        console.log(response)

      }).catch((error) => {
        console.log(error)
      })
    }

  }
}


</script>


<template>


</template>

<style>

</style>