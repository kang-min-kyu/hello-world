var express = require(`express`);
var app = express();

/*
* express에서 views path는 기본으로 현재경로/views 로 설정
* ex) app.set('views', __dirname + '/views');
* 바꾸고 싶으면 app.set("views", **PATH**); 를 넣으면 됨
* ex) app.set('views', __dirname + '/admin/views');
*/
app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + `/public`));

app.get(`/hello`, (request, response) => {
  response.render(`hello`, {
    name: request.query.nameQuery
  });
});
 
app.get(`/hello/:nameParam`, (request, response) => {
  response.render(`hello`, {
    name: request.params.nameParam
  });
});

app.listen(8080, () => {
  console.log(`Server On!`);
});
