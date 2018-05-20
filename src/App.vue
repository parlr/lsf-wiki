<template>
  <div id="app">
    <Article msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Article from "./components/Article.vue";
import api from "axios";
import parser from "./parser";
import resource from "./resource";
import data from "./assets/mock-videos.json";

export default {
  name: "app",
  components: {
    Article
  },
  created: function() {
    debugger;
    api
      .get(`${resource.rootUrl}?${resource.videos()}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
