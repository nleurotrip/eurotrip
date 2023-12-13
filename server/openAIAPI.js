require('dotenv').config()
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function listMessages(limit=100, order='desc') {
    try {
        const threadMessages = await openai.beta.threads.messages.list(process.env.THREAD_ID, {limit: limit, order: order});
        // console.log(threadMessages.data[0]);
        const messageData = threadMessages.data.map(m => ({role: m.role, content: m.content[0].text.value, createdAt: m.created_at}) );
        return messageData;
    } catch (e) {
        throw new Error(e.message);
    }
};  


async function sendMessage(content) {
    try {
        const newMessage = await openai.beta.threads.messages.create(
            process.env.THREAD_ID,
            {
                role: 'user',
                content: content
            }
        );
        return newMessage;
    } catch (e) {
        throw new Error(e.message);
    }
};

async function runAssistant() {
    try {
        const runResult = await openai.beta.threads.runs.create(
            process.env.THREAD_ID,
            { assistant_id: process.env.ASSISTANT_ID }
        );
        const runId = runResult.id;
        return runId;
    } catch (e) {
        throw new Error(e.message);
    }
};




async function pollEndpoint(runId) {
    while (true) {
        try {
            // Make a request to the endpoint
            const response = await openai.beta.threads.runs.retrieve(
                process.env.THREAD_ID,
                runId
            );
            let messageAndResponse;
            // Check if the status is completed
            if (response.status === 'completed') {
                messageAndResponse = await listMessages(2, 'desc');
                return messageAndResponse;
                
            }

            // If the status is not completed, wait for 1 second before the next attempt
            await new Promise(resolve => setTimeout(resolve, 1500));
        } catch (error) {
            console.error('Error:', error.message);
            throw new Error(error.message);
        }
    }
};


module.exports.listMessages = listMessages;
module.exports.sendMessage = sendMessage;
module.exports.runAssistant = runAssistant;
module.exports.pollEndpoint = pollEndpoint;