/* function hello(){
    console.log('third');
} */
console.log('first');
console.log('second');
const skip = setTimeout(() => {
    console.log('third');
}, 3000);
clearTimeout(skip);
console.log('fourth');
console.log('fifth');
