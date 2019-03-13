<template>
  <div id="app">
    <transition name="appear" mode="in-out">
      <div v-if="started" id="nav">
        <router-link to="/">
          <img alt="" src="./assets/img/logo.png" />
        </router-link>
        <div class="nav-right">
          <router-link to="/test">Cities</router-link>
          <router-link to="/about">Contact</router-link>
        </div>
      </div>
    </transition>
    <router-view />
    <footer>
      <p>&copy; 2019 Aika</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import "assets/scss/Home";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}
html,body{
  overflow: hidden;
}
.nav-right {
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#nav {
  width: 65vw;
  max-width: 65vw;
  position: absolute;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  a {
    font-weight: 500;
    font-size: 18px;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  img {
    height: 50px;
    margin-left: 44px;
  }
}
a {
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  &:hover,
  &:active,
  &:link,
  &:visited {
    text-decoration: none;
  }
}
footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
<script>
export default {
  name: "app",
  computed: {
    started() {
      return this.$store.state.started;
    }
  }
};
</script>
