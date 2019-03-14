<template>
  <div class="bg">
  <div class="card">
    <!--<img :src="image" alt="" />-->
    <div class="form">
      <slot></slot>
    </div>
  </div>
  </div>
</template>

<script>
import img from "@/assets/img/logo.png";
export default {
  name: "Confirm",
  data() {
    return {
      image: img,
      focus: false,
      focus2: false
    };
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

.mt-30px {
  margin-top: 30px;
}
.form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
label {
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  order: 1;
}

img {
  height: 90px;
  margin-right: 10px;
  left: -9px;
}
p {
  margin-bottom: 40px;
}

label:before {
  content: "Email";
  background: #ffffff;
  position: absolute;
  font-size: 20px;
  bottom: -3px;
  width: 110px;
  left: 10px;
  color: #888;
  transition: 0.6s;
  z-index: 0;
}

input:focus ~ label:before,
input.focused ~ label:before {
  bottom: 30px;
  left: 20px;
  font-size: 16px;
  width: 85px;
  text-align: center;
}

#fname + label:before {
  content: "FullName";
}
input#email:focus ~ label:before,
input#email.focused ~ label:before {
  width: 55px;
}

input {
  background: transparent;
  height: 50px;
  outline: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: solid 1px grey;
  order: 2;
}

h1 {
  font-weight: 200;
  margin-bottom: 30px;
}

.bg{
  width: 100%;
  height: 100%;
  padding-left: 30px;
  background: url(../assets/img/bg2.png) right top;
}
</style>
