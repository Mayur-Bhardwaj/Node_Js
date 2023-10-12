//Port no. of https is 443.
//Make our first web server using node js.
const http = require('http');
const { constrainedMemory } = require('process');

//Make a server

const server = http.createServer( (req, res)=>{
    console.log("Server Started");
} )
server.listen(8080);