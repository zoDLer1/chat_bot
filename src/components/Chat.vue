<script setup>
import { reactive, onMounted, ref, onUpdated } from 'vue';
import UsersMessages from './UsersMessages.vue';
import Action from './Action.vue';;

const scrollContainer = ref(null);

const scrollToBottom = () => {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
};

const BotAnswersTemplates = {
    1: ['Добро пожаловать!', 'Чем я могу вам помочь?'],
    2: ['Хорошо!', 'В чем я могу вам помочь сегодня?'],
    3: ['Дата: 29.12.2064', 'Чем я ещё могу вам помочь?'],
    4: ['-5°C. Облачно и слабый снег, ветер полный штиль, северо-западный 0.0 м/с ', 'Чем я ещё могу вам помочь?'],
    5: ['21:34 Москва – 29 ноября, UTC +3 ', 'Чем я ещё могу вам помочь?']
};


const usersMessages = reactive([]);
const postponedMessages = [];

let messageTyping = ref(false);

const sendMessage = (from, text, answerTemplate) => {
    if (!messageTyping.value) {
        const id = Date.now();
        const message = {id: `message-${id}`, text, answerTemplate};

        const lastUserMessage = usersMessages.length ? usersMessages[usersMessages.length - 1] : null;
        if (lastUserMessage && lastUserMessage.from === from) {
            usersMessages[usersMessages.length - 1].messages.push(message);
        }
        else {
            usersMessages.push({
                id: `userMessage-${id}`,
                from,
                messages: [message]
            })
        }
        messageTyping.value = true;
    }
    else{
        postponedMessages.push({ from, text, answerTemplate });
    }
}

onUpdated(()=>{
    scrollToBottom();
})

onMounted(()=>{
    sendMessage('bot', 'Добро пожаловать!');
    sendMessage('bot', 'Чем я могу вам помочь?');
})



const checkSendedMessage = ({ from, answerTemplate }) => {
    scrollToBottom();
    const isPostponedSended = sendPostponedMessage();
    if (!isPostponedSended && from !== 'bot') {
        for (const answer of BotAnswersTemplates[answerTemplate]) {
            sendMessage('bot', answer);
        }
    }
}

const sendPostponedMessage = () => {
    messageTyping.value = false;
    if (postponedMessages.length) {
        const { text, from, answerTemplate } = postponedMessages.shift();
        sendMessage(from, text, answerTemplate);
        return true;
    }
    return false;
}

</script>


<template>
<div class="border-[#e2e8f0] border rounded-lg overflow-hidden w-[450px]">
    <div class="bg-[#4299e1] text-white p-4 text-center">
      <h4 class="text-lg font-semibold">Chat Bot</h4>
    </div>
    <div class="p-6 h-80 overflow-y-auto" ref="scrollContainer">
        <div class="flex-vertical gap-4">
            <UsersMessages @sended="checkSendedMessage" :from="from" :messages="messages" v-for="{id, from, messages} in usersMessages" :key="id"/>
        </div>
    </div>
    <div id="chat-input" class="p-4 border-t border-[#e2e8f0]">
      <div class="flex-vertical gap-3">
        <div class="flex-ic-ja">
            <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 1)" text="Привет" />
            <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 2)" text="Как дела?" />
            <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 3)" text="Какой сегодня день?" />
        </div>
        <div class="flex-ic-ja">
            <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 4)" text="Какая сегодня погода?" />
            <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 5)" text="Сколько время?" />
        </div>
      </div>
    </div>
  </div>
</template>
