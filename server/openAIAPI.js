require('dotenv').config()
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function main() {
    // const myAssistant = await openai.beta.assistants.retrieve(
    //     process.env.ASSISTANT_ID
    // );
    const threadMessages = await openai.beta.threads.messages.list(process.env.THREAD_ID);
    // console.log(threadMessages);
    const messageContent = threadMessages.data.map(d => d.content).reduce((result, item) => result.concat(item) ).map(message => message.text.value);
    console.log( messageContent );
    const jsonContent = JSON.stringify(messageContent);
    fs.writeFile("./messages.json", jsonContent, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 

//   messages = client.beta.threads.messages.list(
//     thread_id=thread.id
//   )
//   console.log(completion.choices[0]);
}

main();