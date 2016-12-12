var express = require('express'),
app = express();

app.get("/", function(req, res) {
  res.send("Hello World 4");

});

app.get("/speak", function(req, res){
  res.send("Who is this?");
})

app.get("/speak/:id", function(req, res){
  var id = req.params.id;
  if (id == 1) {
    res.send("Hello One");
  } else if (id == 2) {
    res.send("Hello two");
  } else {
    res.send("Who is this?");
  }
})

app.get("/talk", function(req, res){
  res.send("Are you talking?")
})

app.get("/answer", function(req, res){
  res.send("This is the answer.")
})

app.listen(3000, function (){
  console.log("Starting a server on localhost:3000");
});
