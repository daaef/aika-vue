<template>
  <div class="card">
    <h1>Confirmation</h1>
    <p>Enter the code sent to you via SMS</p>
    <div class="form">
      <input id="phone" @blur="focus = true" :class="{ focused: focus }" type="number" />
      <label for="phone">
        <!--&nbsp;-->
      </label>
    </div>
    <span class="below">Didn't receive an SMS? <a href="#">Try Again</a></span>
    <slot></slot>
  </div>
</template>

<script>
import img from "@/assets/img/flag.jpg";
export default {
  name: "Confirm",
  data() {
    return {
      image: img,
      focus: false,
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

span{
  display: block;
  margin-top: 50px;
}

.form {
  display: flex;
  align-items: center;
}
label {
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  order: 1;
}

img {
  width: 30px;
  margin-right: 10px;
}
p {
  margin-bottom: 40px;
}

label:before {
  content: "Enter Code";
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
