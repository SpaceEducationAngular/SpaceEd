<script>
import axios from "axios";
import NavBar from './NavBar.vue'
import PostLecture from "./PostLecture.vue"
import Search from "./Serach.vue"

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
<br> <br>
        <Search :change="change" :onchange="onchange" :search="search" />
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-sm-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.discordapp.net/attachments/940527989765046312/941934461807886406/carrouselle.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.discordapp.net/attachments/940527989765046312/941934462248304640/carrouselle2.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.discordapp.net/attachments/940527989765046312/941934462726451200/carrouselle3.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>-->
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="parent">
    <div class="Lecture" v-for="elem in this.posts" :key="elem">
      <img :src="elem.image_post" style="width: 100%" />
      <h1>{{ elem.title }}</h1>
      <a href="/Profil" @click="savePerson(elem.id_user)">{{ elem.firstName }} {{ elem.lastName }}</a>
      <p>{{ elem.description }}</p>
      <h3>{{ elem.label_type }}</h3>
      <img style="width: 10%" :src="elem.image_type" />

      <p>
        <button>Contact</button>
      </p>
    </div>
  </div> -->
  <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
    <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div class="col" v-for="elem in this.posts" :key="elem">
        <div class="card h-100 shadow-sm">
          <img :src="elem.image_post" style="width: 100%" class="card-img-top" />
          <div class="card-body text-center my-4">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-primary price-hp"> <a
                  href="/Profil"
                  @click="savePerson(elem.id_user)"
                >{{ elem.firstName }} {{ elem.lastName }}</a></span>
              <span class="float-end ">
                {{ elem.title }}
              </span>
            </div>
            <!-- <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5> -->
            <p>{{ elem.description }}</p>
            <img style="width: 80%" :src="elem.image_type" />

            <h5 class="card-title">{{ elem.label_type }}</h5>

            <div class="text-center my-4">
              <a href="Booked" @click="booking(user.id_user,elem.id_post)" class="btn btn-warning">Booking</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Lecture {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  align-items: start;
  align-self: start;
}
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 0px;
  left: 7cm;
  position: absolute;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
/* @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); */

:root {
  --font1: "Heebo", sans-serif;
  --font2: "Fira Sans Extra Condensed", sans-serif;
  --font3: "Roboto", sans-serif;
}

body {
  font-family: var(--font3);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

h2 {
  font-weight: 900;
}

.container-fluid {
  max-width: 1200px;
}

.card {
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  border: 0;
  border-radius: 1rem;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(1rem - 1px);
  border-top-right-radius: calc(1rem - 1px);
}

.card h5 {
  overflow: hidden;
  height: 56px;
  font-weight: 900;
  font-size: 1rem;
}

.card-img-top {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  padding: 30px;
}

.card h2 {
  font-size: 1rem;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.label-top {
  position: absolute;
  background-color: #8bc34a;
  color: #fff;
  top: 8px;
  right: 8px;
  padding: 5px 10px 5px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 3px;
  text-transform: uppercase;
}

.top-right {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  background: #ff5722;
  line-height: 90px;
  text-align: center;
  color: white;
}

.top-right span {
  display: inline-block;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .card-img-top {
    max-height: 250px;
  }
}

.over-bg {
  background: rgba(53, 53, 53, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
}

.btn {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 50px 5px 50px;
}

.box .btn {
  font-size: 1.5rem;
}

@media (max-width: 1025px) {
  .btn {
    padding: 5px 40px 5px 40px;
  }
}

@media (max-width: 250px) {
  .btn {
    padding: 5px 30px 5px 30px;
  }
}

.btn-warning {
  background: none #f7810a;
  color: #ffffff;
  fill: #ffffff;
  border: none;
  text-decoration: none;
  outline: 0;
  box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
  border-radius: 100px;
}

.btn-warning:hover {
  background: none #ff962b;
  color: #ffffff;
  box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35);
}

.bg-success {
  font-size: 1rem;
  background-color: #f7810a !important;
}

.bg-danger {
  font-size: 1rem;
}

.price-hp {
  font-size: 1rem;
  font-weight: 600;
  color: darkgray;
}

.amz-hp {
  font-size: 0.7rem;
  font-weight: 600;
  color: darkgray;
}

.fa-question-circle:before {
  color: darkgray;
}

.fa-plus:before {
  color: darkgray;
}

.box {
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
}

.box-img {
  max-width: 300px;
}

.thumb-sec {
  max-width: 300px;
}

@media (max-width: 576px) {
  .box-img {
    max-width: 200px;
  }

  .thumb-sec {
    max-width: 200px;
  }
}

.inner-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 1px;
  display: inline-block;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
}

@media (max-width: 370px) {
  .box .btn {
    padding: 5px 40px 5px 40px;
    font-size: 1rem;
  }
}

.disclaimer {
  font-size: 0.9rem;
  color: darkgray;
}

.related h3 {
  font-weight: 900;
}

footer {
  background: #212529;
  height: 80px;
  color: #fff;
}
</style>