<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
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
  <div class="container">
    <div class="main-body">
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <h1 class="breadcrumb-item active" aria-current="page">Profile</h1>
        </ol>
      </nav>
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  :src="this.user.image_user"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ this.user.firstName }} {{ this.user.lastName }}</h4>
                  <!-- <p class="text-secondary mb-1">Full Stack Developer</p> -->
                  <!-- <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> -->
                  <!-- <button class="btn btn-primary">Follow</button> -->
                  <!-- <button class="btn btn-outline-primary">Message</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ this.user.firstName }} {{ this.user.lastName }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ this.user.email }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ this.user.phone }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Date Of Birth</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ this.user.dob }}
                </div>
              </div>
              <hr />
              <!-- <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Category</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                   </div>   -->
              <!-- <hr> -->
              <div class="row">
                <div class="col-sm-12">
                  <!-- <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>