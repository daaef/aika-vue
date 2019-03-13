<template>
  <div class="card">
    <h1>Profile Completion</h1>
    <p>Complete your Details</p>
    <div class="form">
      <input
        id="email"
        @blur="focus = true"
        :class="{ focused: focus }"
        type="email"
      />
      <label for="email"> </label>
    </div>
    <div class="form mt-30px">
      <input
        id="fname"
        @blur="focus2 = true"
        :class="{ focused: focus2 }"
        type="text"
      />
      <label for="fname"> </label>
    </div>
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

.mt-30px{
  margin-top: 30px;
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
 input#email.focused ~ label:before{
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
</style>
