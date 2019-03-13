<template>
  <div class="card">
    <h1>Phone Verification</h1>
    <p>We'll send you an SMS to confirm your number</p>
    <div class="form">
      <input id="phone" @blur="focus = true" :class="{ focused: focus }" type="number" />
      <label for="phone">
        <img :src="image" alt="" />
        +234 -
      </label>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import img from "@/assets/img/flag.jpg";
export default {
  name: "Verification",
  data() {
    return {
      image: img,
      focus: false,
    };
  },
  methods: {
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

.form {
  display: flex;
  align-items: center;
}
label {
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
  order: 1;
}

img {
  width: 30px;
  margin-right: 10px;
}
p {
  margin-bottom: 20px;
}

label:before {
  content: "Phone Number";
  background: #ffffff;
  position: absolute;
  font-size: 20px;
  bottom: -3px;
  width: 135px;
  left: 115px;
  color: #888;
  transition: 0.6s;
  z-index: 0;
}

input:focus ~ label:before,
input.focused ~ label:before {
  bottom: 30px;
  left: 119px;
  font-size: 16px;
  width: 115px;
  text-align: center;
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
</style>
