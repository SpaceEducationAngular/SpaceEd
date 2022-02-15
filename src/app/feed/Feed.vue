<script>
import axios from "axios";
import NavBar from '../navbar/NavBar.vue'
import PostLecture from "../post-lecture/PostLecture.vue"
import Search from "../search/Serach.vue"

export default {

  components: {
    NavBar,
    PostLecture,
    Search
  },
  data() {
    return {
      posts: [],
      allposts: [],
      index: '',
      value: '',
      profil: {},
      user:{},
    };
  },
  mounted() {
    this.user=JSON.parse(localStorage.getItem('user'))
    axios.get("http://localhost:3001/api/items/homePosts").then((response) => {
      this.posts = response.data;
      this.allposts = response.data
      console.log(this.posts);
      // location.reload();
      // localStorage.setItem("posts", JSON.stringify(this.posts));
    });
  },
  methods: {
    booking(id1,id2){
      var option={
        id_user:id1,
        id_post:id2
      }
      axios.post("http://localhost:3001/api/items/booking",option)
    },
    
    change(e) {
      this.index = e.target.value
      console.log(this.index);
      axios.get(`http://localhost:3001/api/items/homePosts/${this.index}`)
        .then(res => {
          this.posts = res.data
          console.log(this.posts)
        })
    },
    onchange(e) {
      this.value = e.target.value;
      console.log(this.value);
    },
    search() {
     
      var newArray = []
      this.posts = []
      for (var i = 0; i < this.allposts.length; i++) {
        if (this.allposts[i].firstName.includes(this.value) || this.allposts[i].label_type.includes(this.value) || this.allposts[i].lastName.includes(this.value)) {
          console.log(this.allposts[i]) 
          newArray.push(this.allposts[i])
        }
      }
      this.posts = newArray;
    },
    savePerson(id) {
      axios.get(`http://localhost:3001/api/items/user/${id}`).then(res => {
        this.profil = res.data
        this.profil.user_id = id
        console.log(this.profil);
        localStorage.setItem("profil", JSON.stringify(this.profil));
        localStorage.setItem("key", 1)
      })
    }
  },
};
</script>

<template>

</template>
<style scoped>

</style>