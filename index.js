var express = require(`express`);
var app = express();

app.get(`/`, (request, response) => {
  response.send(`Hello World`);
});

app.listen(8080, () => {
  console.log(`Server On!`);
});
