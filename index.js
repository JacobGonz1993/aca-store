let express = require("express");
const app = express();

app.use(express.static('public'))

app.listen(3000);

//day 8 express code
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// app.listen(3002, (err) => {
//  if (err) {
//    return console.log("Error", err);
//  }
//  console.log("Web server is now listening for messages", err);
// });

