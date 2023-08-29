const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaddachi.khaoula@gmail.com',
    pass: 'kuwacxmiymosmqfl',
  },
});

const mailOptions = {
  from: 'kaddachi.khaoula@gmail.com',
  to: 'kaddachi.khaoula@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

transporter.sendMail(mailOptions, (error, data) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', data.response);
  }
});


