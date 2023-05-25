console.log('first');
console.log('second');
let number = 0;
const interval = setInterval(() => {
    console.log(++number);
    if(number === 10){
        clearInterval(interval);
    }
})
console.log('four');
console.log('fifth');