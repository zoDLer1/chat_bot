<template>
    <div :class="[from === 'me' ? 'flex-row-reverse':  'flex-row', 'flex gap-4']">
        <div class="w-9 h-9 shadow-10_30 rounded-full flex-ic-jc text-base mt-[1px]">
            <font-awesome-icon v-if="from === 'bot'" :icon="['fas', 'robot']" color="#4299e1" />
            <font-awesome-icon v-else :icon="['fas', 'user']" color="#4299e1" />
        </div>
        <div :class="[from === 'me' ? 'items-end': 'items-start', 'flex-vertical gap-3 flex-1']">
            <Message v-for="{id, text, answerTemplate} in messages" :key="id" :text="text" @sended="() => emit('sended', {answerTemplate, text, from})" />
        </div>
        <div class="w-9"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Message from './Message.vue';



const emit = defineEmits(['sended']);

const { from } = defineProps({
    messages: Array,
    from: {
        type: String
    },
});

</script>


