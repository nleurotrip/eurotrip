require('dotenv').config()
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function listMessages(limit=100, order='desc') {

    const threadMessages = await openai.beta.threads.messages.list(process.env.THREAD_ID, {limit: limit, order: order});
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

async function runAssistant() {
    const runResult = await openai.beta.threads.runs.create(
        process.env.THREAD_ID,
        { assistant_id: process.env.ASSISTANT_ID }
    );
    const runId = runResult.id;
    let status='queued';
    while(status==='queued' || status==='in_progress') {
        const run = await openai.beta.threads.runs.retrieve(
            process.env.THREAD_ID,
            runId
        );
        status = run.status
        setTimeout(function(){
            console.log('RUN STATUS', status);
        }, 1000);
    }
    let messages = await listMessages(2, 'asc');
    return messages;

};

module.exports.listMessages = listMessages;
module.exports.sendMessage = sendMessage;
module.exports.runAssistant = runAssistant;