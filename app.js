const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {

  // res.send("hello world from express!")
  res.render('index', {
    userName : "BaRrY",

  })
 
})

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});