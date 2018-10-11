let array = [1,2,3,4,5,6];
var longitud =  array.length;

function suma(a,b){
    return a+b;
}
var media= array.reduce(suma,0)/array.length;

let restaYcuadrado = array.map(x=>(x-media)**2);
let sumatorio = restaYcuadrado.reduce(suma);
let result = Math.sqrt(sumatorio/array.length);
console.log(result);
