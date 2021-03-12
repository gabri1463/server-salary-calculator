$( document ).ready( renderDOM );

let inputData = '';

function renderDOM() {
    // click handlers
    $( '#nine' ).on( 'click', appendData );
    $( '#eight' ).on( 'click', appendData );
    $( '#seven' ).on( 'click', appendData );
    $( '#six' ).on( 'click', appendData );
    $( '#five' ).on( 'click', appendData );
    $( '#four' ).on( 'click', appendData );
    $( '#three' ).on( 'click', appendData );
    $( '#two' ).on( 'click', appendData );
    $( '#one' ).on( 'click', appendData );
    $( '#zero' ).on( 'click', appendData );
    $( '#add' ).on( 'click', appendData );
    $( '#minus' ).on( 'click', appendData );
    $( '#multiply' ).on( 'click', appendData );
    $( '#divide' ).on( 'click', appendData );
    $( '#dot' ).on( 'click', appendData );
    $( '#equals' ).on( 'click', addData);
    $( '#clear' ).on( 'click', clearData);

} // end renderDOM

function appendData() {
    console.log( 'in appendData' );
    // target input 
    let el = $( '#dataIn' );
    // empty input 
    el.empty();
    // push value into array
    inputData += ($( this ).data( 'value' ));
    console.log(inputData);
    // append to input
    el.append(`${inputData}`)
} // end appendData

function clearData() {
    // target element
    let el = $( '#dataIn' )
    // empty element
    el.empty();
    // empty array
    inputData = '';
} // end clearData

function addData() {
    console.log( 'in addData' );
    // make an AJAX call to server to send inputData via POST
    let objectToSend = {
        argument: inputData
    }
    $.ajax({
        type: "POST",
        url: '/calculate',
        data: objectToSend
    }).then( function( response ) {
        console.log( 'back from POST with:', response);
        // if successful update DOM
        getData();
    }).catch( function( err) {
        // catch any errors
        alert( 'error sending calculation');
        console.log( err );
    })
    // end AJAX 
}

function getData() {
    console.log( 'in getData' );
    // make an AJAX call to server to get calculations via GET
    $.ajax({
        type: "GET",
        url: '/calculate'
    }).then( function( response ){
        console.log( 'back from GET:', response);
        let el = $( '#dataOut' );
        el.empty();
        // if successful loop through response
        for( let i = 0; i < response.length; i++){
            $( '#dataOut' ).append(
                `
                <li class="list-group-item">${response[i].argument} = ${response[i].answer}</li>
                `
            );
            // append each to the DOM
        } // end for
        
    }).catch( function( err) {
        // catch any errors
        alert( 'error in getting calculations');
        console.log( err );
    })
} // end getData
