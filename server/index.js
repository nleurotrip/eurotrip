const express = require('express')
const app = express()
const port = 3000
const { listMessages, sendMessage } = require('./openAIAPI');

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
  let resp;
  let content = req.body.content;
  console.log(content);
  try {
    resp = await sendMessage(content);
    console.log('RESP', resp);
  } catch (e) {
    throw new Error('Error sending message');
  };
  res.send(resp);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})