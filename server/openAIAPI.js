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
    console.log('sent message: ', newMessage);
    return newMessage;
};

async function runAssistant() {
    const runResult = await openai.beta.threads.runs.create(
        process.env.THREAD_ID,
        { assistant_id: process.env.ASSISTANT_ID }
    );
    const runId = runResult.id;
    return runId;
};

const sendAndRun = async (content) => {
    console.log('incoming content', content)
    return openai.beta.threads.messages.create(
        process.env.THREAD_ID,
        {
            role: 'user',
            content: content
        }
    ).then(() => {
        //create run
        console.log('creating run');
        return openai.beta.threads.runs.create(
            process.env.THREAD_ID,
            { assistant_id: process.env.ASSISTANT_ID }
        );
    }).then(async runResult => {
        //poll it the initial time
        let runId = runResult.id;
        let runResp = await openai.beta.threads.runs.retrieve(
            process.env.THREAD_ID,
            runId
        );
        let status = runResp.status;
        console.log('intial polling status', status);
        return {runId, status};
    })
    .then(() => listMessages(2, 'desc'));
}



async function pollEndpoint(runId) {
    while (true) {
        console.log('polling for response');
        try {
            // Make a request to the endpoint
            const response = await openai.beta.threads.runs.retrieve(
                process.env.THREAD_ID,
                runId
            );
            let messageAndResponse;
            // Check if the status is completed
            if (response.status === 'completed') {
                console.log('Status is completed!');
                messageAndResponse = await listMessages(2, 'desc');
                console.log('Message and response: ', messageAndResponse);
                return messageAndResponse;
                
            }

            // If the status is not completed, wait for 1 second before the next attempt
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error('Error:', error.message);
            // Handle the error as needed
            break; // Exit the loop on error, you may choose to retry or handle differently
        }
    }
}

// sendMessage("what bars are cool in shoreditch?")
//     .then(() => runAssistant() )
//     .then( runId => pollEndpoint(runId));


module.exports.listMessages = listMessages;
module.exports.sendMessage = sendMessage;
module.exports.runAssistant = runAssistant;
module.exports.pollEndpoint = pollEndpoint;