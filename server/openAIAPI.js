require('dotenv').config()
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function listMessages(limit=10) {

    const threadMessages = await openai.beta.threads.messages.list(process.env.THREAD_ID, {limit: limit, order: 'asc'});
    // console.log(threadMessages.data[0]);
    const messageData = threadMessages.data.map(m => ({role: m.role, content: m.content[0].text.value, createdAt: m.created_at}) );
    console.log(messageData);
    return messageData;
};

async function sendMessage(content) {
    const newMessage = await openai.beta.threads.messages.create(
        process.env.THREAD_ID,
        {
            role: 'user',
            content: content
        }
    );
    console.log('new message', newMessage);
    return newMessage;
};

module.exports.listMessages = listMessages;
module.exports.sendMessage = sendMessage;