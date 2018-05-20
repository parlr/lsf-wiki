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
import data from "./assets/mock-videos.json"; // dev purpose

export default {
  name: "app",
  components: {
    Article
  },
  data: function() {
    return {
      videos: []
    };
  },

  created: function() {
    debugger;
    api
      .get(`${resource.rootUrl}?${resource.videos("Appetit")}`)
      .then(response => {
        console.log(response.data);

        this.videos = response.data.query.pages.map(page => {
          return {
            url: page.imageinfo[0].url,
            word: page.title
          };
        });
        console.log("videos", this.videos);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
