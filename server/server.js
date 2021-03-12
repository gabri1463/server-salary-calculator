// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const tabulate = require( './modules/tabulate')

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true} ) );

// globals
const port = 5000;
const calculations = [];

// spin up server
app.listen( port, ( req, res )=>{
    console.log( 'server is up on:', port);
})

// routes

app.get( '/calculate', ( req, res )=>{
    console.log( 'in /calculate GET');
    res.send( calculations );
})

app.post( '/calculate', ( req, res )=>{
    console.log( 'in /calculate POST', req.body);
    calculations.push( tabulate(req.body) );
    res.sendStatus( 201 );
} )