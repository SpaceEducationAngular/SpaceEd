<script>
import NavBar from "../navbar/NavBar.vue";
import Feed from "../feed/Feed.vue";
import axios from 'axios'
export default {
  data(){
    return{
      index:'',
      posts:[]
    }
  },
  components: {
    Feed, 
    NavBar 
  },
  methods:{
    change(e){
      this.index=e
      console.log(this.index);
      axios.get(`http://localhost:3001/api/items/homePosts/${this.index}`)
      .then(res=>{
        this.posts=res.data
        console.log(this.posts)})
    }
  }
  
  
};
</script>
<template>
  <NavBar :change="change"/>
  <!-- <Feed :post="posts"/> -->
</template>