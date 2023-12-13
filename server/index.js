const express = require('express')
const app = express()
const port = 3000
const { listMessages, sendMessage, runAssistant, pollEndpoint } = require('./openAIAPI');

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
  sendMessage(content)
    .then(() => runAssistant())
    .then((runId) => pollEndpoint(runId))
    .then(messageAndResponse => {
      res.send({sent: messageAndResponse[1], received: messageAndResponse[0]});
    })
    .catch(e => {
      res.send(e.message);
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})