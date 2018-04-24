const http = require ('http');

let PORTA = 7000;
let PORTB = 7500;

function handleRequestA(request, response) {

   
    response.end("Good Server: " + request.url);
  }

  function handleRequestB(request, response) {

    response.end("Bad Server: " + request.url);
  }

var serverA = http.createServer(handleRequestA);


serverA.listen(PORTA, function() {

  console.log("Good Server listening on: http://localhost:" + PORTA);
});

var serverB = http.createServer(handleRequestB);


serverB.listen(PORTB, function() {

  console.log("Bad Server listening on: http://localhost:" + PORTB);
});