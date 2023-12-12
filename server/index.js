const express = require('express')
const app = express()
const port = 3000
const { listMessages, sendMessage, runAssistant } = require('./openAIAPI');

app.use(express.json());
app.get('/messages/list', async (req, res) => {
  //get all messages in the thread.
  let resp;
  try {
    resp = await listMessages();
    console.log('RESP', resp);
  } catch (e) {
    throw new Error('Error listing messages in this thread.');
  }
  
  res.send(resp);
})


app.post('/messages/send', async (req, res) => {
  let content = req.body.content;
  console.log(content);
  try {
    const sendResp = await sendMessage(content);
    console.log('RESP', sendResp);
  } catch (e) {
    throw new Error('Error sending message');
  };

  try {
    let runResp = await runAssistant();
    res.send(runResp);
  } catch (e) {
    throw new Error('Error running Assistant');
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})