const fs = require('fs');

fs.readFileSync('welcome.txt', (err, data)  => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
   
    console.log('File read successfully.');
  }
});
