<template>
    <button
        @click="emit('click', text)"
        :class="['bg-blue-500 text-white px-4 py-1 rounded-full cursor-pointer', {'bg-gray-400 cursor-default': disabled}]"
        :disabled="disabled"
    >
        {{ text }}
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['click']);

defineProps({
    text: String,
    disabled: {
        default: false,
        type: Boolean
    },
});

</script>


