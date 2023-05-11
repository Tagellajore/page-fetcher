const request = require('request');

const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// implement request functionality

request(url, function (error, response, body) {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  if (response.statusCode !== 200) {
    console.log(`Error : Received status code ${response.statusCode}`);
    return;
  }
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile(filePath, body, (error) => {
    // handle the error (if there was one)
    if (error) {
      console.log(`Error: ${error}`);
      return;
    }
    
    const fileSize = body.length;
    
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`)
  });
});


 



// callback function 



