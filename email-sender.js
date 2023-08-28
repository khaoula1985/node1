const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khaoula.kaddachi@esprit.tn',
    pass: 'cezqqiarpsjspzqm',
  },
});

const mailOptions = {
  from: 'khaoula.kaddachi@esprit.tn',
  to: 'khaoula.kaddachi@esprit.tn',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
