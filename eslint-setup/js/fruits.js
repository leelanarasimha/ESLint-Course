import lodash from 'lodash';

var arr = ['apples', 'grapes', 'oranges'];

lodash.findIndex(arr, 'grapes');


function checkEven(number) {
    if (number % 2  === 0) {
        return true;
    }
    return false;
}

checkEven(4);
