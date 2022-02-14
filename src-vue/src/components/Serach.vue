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
  <!-- <div class=search>
    <label>categories</label>
    <select name="id_type" @input="change">
      <option value="">select type of lecture</option>

      <option v-for="elem in this.datatype" :key="elem" :value="elem.id_type">
        {{ elem.label_type }}
      </option>
    </select>
    <label>search</label>
    <input type="text" @input="onchange" name="search" />
    <button @click="search">Search</button>
  </div>
  <br><br> --> 
  <!-- new -->
  <div class="formbg">
    <div class="formbg-inner padding-horizontal--48">
    <h4>Here you can have whatever you want</h4>
      <div class="row">
        <div class="col">
          <!-- Name input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example2"
              >What categorie you want?</label
            >

            <select
              class="form-select"
              aria-label="Default select example"
              name="id_type"
              @input="change"
            >
              <option value="">select type of lecture</option>

              <option
                v-for="elem in this.datatype"
                :key="elem"
                :value="elem.id_type"
              >
                {{ elem.label_type }}
              </option>
            </select>
          </div>
        </div>
        <div class="col">
          <!-- Name input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example4"
              >What do you want to search?</label
            >
            <input
              
              id="form8Example4"
              class="form-control"
              type="text" @input="onchange" name="search"
            />
          </div>
        </div>
        <div class="col">
          <!-- Email input -->
          <div class="form-outline">
            <label class="form-label" for="form8Example4">Click to :</label>

            <button class="btn btn-primary btn-block mb-4" @click="search" >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
<style scoped>
.search {
  position: relative;
  right: -800px;
}
</style>