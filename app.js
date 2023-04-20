require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const nodemailer = require('nodemailer')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {

  // res.send("hello world from express!")
  res.render('index', {
    userName : "BaRrY",

  })

})

app.post('/gmail', (req, res) => {

  console.log(req.body.pwd); 

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'barrycumbie@gmail.com',
      pass: process.env.APP_PWD
    }
  });

  var mailOptions = {
    from: 'barrycumbie@gmail.com',
    to: 'barrycumbie@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect('/');
})



app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});
