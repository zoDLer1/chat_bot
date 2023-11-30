<script setup>
import { onMounted, ref, defineEmits } from 'vue';

let isTyping = ref(true);

const emit = defineEmits(['sended']);

onMounted(()=>{
    setTimeout(()=>{
        isTyping.value = false;
        emit('sended');
    }, 1000);
})

defineProps({
    text: String
});

</script>


<template>
    <div class="bg-[#e1f1ff] rounded-3xl  flex-ic-jc min-h-[40px] px-5 py-2">
        <div v-if="isTyping" class="dot-typing "></div>
        <div v-else >{{ text }}</div>
    </div>
</template>

<style scoped>
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
