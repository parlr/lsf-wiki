<template>
  <div id="app">
    <Article msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Article from "./components/Article.vue";
// import parser from "./parser";

export default {
  name: "app",
  components: {
    Article
  }
};
</script>
