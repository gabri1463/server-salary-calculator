// create function that accepts an array
// filter through the array to find +, -, *, and / 
// do the multiplication and division 
// do the addition and subtraction
// return the value to the server

function tabulate( string ) {
    let workingTotal = 0;
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
    return string;
}

console.log(tabulate('20*5+10/5'));