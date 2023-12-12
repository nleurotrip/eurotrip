require('dotenv').config()
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function listMessages() {

    const threadMessages = await openai.beta.threads.messages.list(process.env.THREAD_ID, {limit: 10, order: 'asc'});
    // console.log(threadMessages.data[0]);
    const messageData = threadMessages.data.map(m => ({role: m.role, content: m.content[0].text.value, createdAt: m.created_at}) );
    console.log(messageData);
    return messageData;
   

    // const jsonContent = JSON.stringify(messageContent);
    // fs.writeFile("./messages.json", jsonContent, 'utf8', function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    
    //     console.log("The file was saved!");
    // }); 
};

// listMessages();

module.exports.listMessages = listMessages;