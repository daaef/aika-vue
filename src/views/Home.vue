<!--suppress ALL -->
<template>
  <div class="home">
    <div class="leftBg">
      <transition name="appear" mode="in-out">
        <StoryCard v-if="message" class="abs-center" :msg="message" />
      </transition>
    </div>
    <div class="rightNav">
      <transition name="appear" mode="out-in">
        <StoryCard
          key="status_down"
          v-if="welcome"
          msg="Package Delivery, Fast & Easy"
          :image="image">
          <button class="btn" @click="start">Get Started</button>
        </StoryCard>
        <Verification v-if="verify">
          <button class="btn" @click="nextVerify">NEXT</button>
        </Verification>
        <Confirm v-if="confirm">
          <button class="btn" @click="nextConfirm">NEXT</button>
        </Confirm>
        <Complete v-if="complete">
          <button class="btn" @click="completeIt">Complete</button>
        </Complete>
      </transition>

      <!--<button class="btn btn-primary" @click="status = !status">Toggle STATUS</button>

      <transition name="appear" mode="out-in">
        <div class="p-3 mb-2 bg-success text-white" v-if="!status" key="status_down">STATUS IS FALSE</div>
        <div class="p-3 mb-2 bg-success text-white" v-else key="status_up">STATUS IS TRUE</div>
      </transition>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoryCard from "@/components/StoryCard.vue";
import img from "@/assets/img/logo.png";
import Verification from "@/components/Verification";
import Confirm from "@/components/Confirm";
import Complete from "@/components/Complete";

export default {
  name: "home",
  components: {
    StoryCard,
    Verification,
    Confirm,
    Complete
  },
  props: {
    text: String
  },
  data() {
    return {
      status: false,
      image: img
    };
  },
  computed: {
    welcome() {
      return this.$store.state.welcome;
    },
    message() {
      return this.$store.state.message;
    },
    verify() {
      return this.$store.state.verify;
    },
    confirm() {
      return this.$store.state.confirm;
    },
    complete() {
      return this.$store.state.complete;
    }
  },
  methods: {
    start() {
      this.$store.commit("getStarted");
    },
    nextVerify() {
      this.$store.commit("nextVerify");
    },
    nextConfirm() {
      this.$store.commit("nextConfirm");
    },
    completeIt() {
      this.$store.commit("complete");
    }
  }
};
</script>
