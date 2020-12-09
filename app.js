const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

// https://codeburst.io/creating-custom-url-shortener-with-nodejs-de10bbbb89c7
// https://expressjs.com/en/starter/generator.html
// https://cloud.mongodb.com/v2/5fd05ab9962dfe326838326f#clusters
// https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/