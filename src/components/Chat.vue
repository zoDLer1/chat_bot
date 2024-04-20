<template>
  <div class="border-gray-75 border rounded-lg overflow-hidden w-[450px]">
    <div class="bg-primary-300 text-white p-4 text-center">
      <h4 class="text-lg font-semibold">Chat Bot</h4>
    </div>
    <div class="p-6 h-80 overflow-y-auto" ref="scrollContainer">
      <div class="flex-vertical gap-4">
        <UsersMessages
          :from="from"
          :messages="messages"
          v-for="{ id, from, messages } in usersMessages"
          :key="id"
        />
      </div>
    </div>
    <div></div>
    <div id="chat-input" class="p-4 border-t border-gray-75">
      <div class="flex gap-3 flex-wrap justify-center">
        <Action
          :disabled="messageTyping"
          @click="(message) => sendMessage('me', message, 1)"
          text="Привет"
        />
        <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 5)" text="Сколько время?" />
        <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 2)" text="Как дела?" />
        <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 3)" text="Установить будильник" />
        <Action :disabled="messageTyping" @click="(message)=>sendMessage('me', message, 4)" text="Какая погода?" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, onUpdated } from 'vue';
import UsersMessages from './UsersMessages.vue';
import Action from './Action.vue';;

const scrollContainer = ref(null);

const scrollToBottom = () => {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
};

const botAnswersTemplates = {
    1: ['Добро пожаловать!', 'Чем я могу вам помочь?'],
    2: ['Хорошо!', 'В чем я могу вам помочь сегодня?'],
    3: ['Будильник установлен на 7:00', 'Чем я ещё могу вам помочь?'],
    4: ['-5°C. Облачно и слабый снег, ветер полный штиль, северо-западный 0.0 м/с ', 'Чем я ещё могу вам помочь?'],
    5: ['21:34 Москва – 29 ноября, UTC +3 ', 'Чем я ещё могу вам помочь?']
};


const usersMessages = reactive([]);

let messageTyping = ref(false);

const setNewUserMessage = (id, from, ...messages) => {
    return usersMessages.push({
        id: `userMessage-${id}`,
        from,
        messages
    }) - 1
}

const setNewMessage = (userMessage, message, index) => {
    if (index) {
        userMessage.messages[index] = message
    }
    else {
        return userMessage.messages.push(message) - 1
    }
}

const getLastUserMessage = () => {
    return usersMessages.length ? usersMessages[usersMessages.length - 1] : null;
}

const sendMessage = async (from, text, botAnswer) => {

    return await new Promise((resolve, reject)=>{
        messageTyping.value = true;
        const id = Date.now();
        let newMessageIndex = 0

        const lastUserMessage = getLastUserMessage()
        if (lastUserMessage && lastUserMessage.from === from) {
            newMessageIndex = setNewMessage(lastUserMessage, {})
        }
        else {
            setNewUserMessage(id, from, {})
        }

        setTimeout(async () => {
            usersMessages[usersMessages.length - 1].messages[newMessageIndex] = {id: `message-${id}`, text};
            messageTyping.value = false
            if (botAnswer){
                for (const answer of botAnswersTemplates[botAnswer]) {
                    await sendMessage('bot', answer);
                }
                resolve()
            }
            else{
                resolve()
            }
        }, 1000)

    })
    
}

onMounted(async ()=>{
    await sendMessage('bot', 'Добро пожаловать!');
    await sendMessage('bot', 'Чем я могу вам помочь?');
})

onUpdated(()=>{
    scrollToBottom();
})

</script>
