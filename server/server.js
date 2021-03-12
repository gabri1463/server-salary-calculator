// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser');

// uses
app.use( express.static( 'server/public' ) );

// globals
const port = 5000;

// spin up server
app.listen( port, ( req, res )=>{
    console.log( 'server is up on:', port);
})

// routes

app.post( '/tabulate', ( req, res )=>{
    console.log( 'in /tabulate POST', req.body);
    res.send( 'bleat' );
} )