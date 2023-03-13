const jsonServer = require( "json-server" ); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router( "db.json" );
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use( middleWares );
server.use( router );

server.listen( port );