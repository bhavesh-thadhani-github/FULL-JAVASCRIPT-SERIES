/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const month = 3 //you can also write another datatype here & match it by writing the cases with that datatype only| EXAMPLE IS SHOWN FROM LINE 32

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('March');
        break;                //imp: Agar break keyword nhi lagaya to uske baad ka saara code execute hoga except default
    case 4:
        console.log('April');
        break;

    default:
        console.log('default case');
        break;
}

const month_2 = 'feb' //(caution) CASE-SENSITIVITY 

switch (month_2) {
    case 'jan':
        console.log('January');
        break;
    case 'feb':
        console.log('February');
        break;
    case 'march':
        console.log('March');
        break;                //imp: Agar break keyword nhi lagaya to uske baad ka saara code execute hoga except default
    case 'april':
        console.log('April');
        break;

    default:
        console.log('default case');
        break;
}