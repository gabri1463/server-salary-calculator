// create function that accepts an string
function tabulate( object ) {
    let string = object.argument;
    // filter through the string to find +, -, *, and / 
    if( string.includes('/')) {
        string = string.replace(/(\d+)(\/)(\d+)/, ( _ , x , y , z) => (Number(x) / Number(z)));
    }
    if( string.includes('*')) {
        string = string.replace(/(\d+)(\*)(\d+)/, ( _ , x , y , z) => (Number(x) * Number(z)));
    }
    if( string.includes('+')) {
        string = string.replace(/(\d+)(\+)(\d+)/, ( _ , x , y , z) => (Number(x) + Number(z)));
    }
    if( string.includes('-')) {
        string = string.replace(/(\d+)(\-)(\d+)/, ( _ , x , y , z) => (Number(x) - Number(z)));
    }
    // return the value to the server

    let objectToReturn = {
        argument: object.argument,
        answer: string
    }
    return objectToReturn;
}

module.exports = tabulate;