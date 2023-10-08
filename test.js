var firstName = 'ABD';
const obj = {
    firstName: 'Onkar',
    call: () => {
        console.log(this);
        console.log(this.firstName);
    }
}

console.log(obj.call());

console.log(A);
console.log(B);
var A = 'Onkar';
let B = 'Tejas';