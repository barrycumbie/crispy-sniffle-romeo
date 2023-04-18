const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/',  (req, res) => {

  res.send("hello world from express!")
 
})

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});