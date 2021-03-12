$( document ).ready( renderDOM );

let inputData = [];

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
    let el = $( '#dataOut' );
    // empty input 
    el.empty();
    // push value into array
    inputData.push($( this ).data( 'value' ));
    console.log(inputData);
    // append to input
    for( let i = 0; i < inputData.length; i++) {
        el.append(`${inputData[i]}`)
    }
} // end appendData

function clearData() {
    // target element
    let el = $( '#dataOut' )
    // empty element
    el.empty();
    // empty array
    inputData.splice(0, inputData.length)
} // end clearData

function addData() {

}

