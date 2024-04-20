<template>
  <div class="bg-gray-75 rounded-3xl  flex-ic-jc min-h-[40px] px-5 py-2 clamp">
      <div v-if="!text" class="dot-typing "></div>
      <div v-else >{{ text }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';



defineProps({
    text: String
});

</script>

<style scoped>
.clamp{
  font-size: clamp(14px, 4vw, 16px);
}
.dot-typing {
  position: relative;
  left: -9999px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #4299e1;
  box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  animation: dot-typing 1.5s infinite linear;
}

@keyframes dot-typing {
  0% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
  16.667% {
    box-shadow: 9989px -5px 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
  33.333% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
  50% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px -5px 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
  66.667% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
  83.333% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px -5px 0 0 #4299e1;
  }
  100% {
    box-shadow: 9989px 0 0 0 #4299e1, 9999px 0 0 0 #4299e1, 10009px 0 0 0 #4299e1;
  }
}
</style>
