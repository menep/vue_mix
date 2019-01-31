<template>
  <div class="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./views/AppHeader.vue";
import AppFooter from "./views/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  font-weight: 300;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--font-color-primary);
}

:root {
  --header-height: 5rem;
  --footer-height: 5rem;
  --font-color-primary: #132350;
}

a {
  text-decoration: none;
  color: inherit;
}

.app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #4865bd;
}
</style>
