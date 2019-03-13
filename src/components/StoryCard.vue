<template>
  <div class="card">
    <div class="card-blur"></div>
    <div v-if="image" class="img">
      <img :src="image" alt="" />
    </div>
    <h1 v-if="msg">{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "StoryCard",
  props: {
    msg: String,
    text: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 94%;
  margin: 0 auto;
  position: relative;
}

img {
  height: 100%;
  left: -9px;
}

.img {
  height: 70px;
}

h1{
  font-weight: 200;
}

.img:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -35px;
  background: #37bf68;
  height: 5px;
  width: 35px;
}

.card-blur {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, .72);
  filter: blur(25px);
  z-index: 0;
}
h1 {
  position: relative;
  z-index: 1;
}
</style>
