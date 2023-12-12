const express = require('express')
const app = express()
const port = 3000
const { listMessages } = require('./openAIAPI');

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


app.post('/messages/send', (req, res) => {
  //send
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})