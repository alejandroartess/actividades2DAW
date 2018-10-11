var malo1 = [3,4];
var malo2 = [6,7];

for (let i = 0; i < malo1.length; i++) {
  console.log('Esta es la distancia de los malos +i');
  ;
  
}
console.log(malo1);
console.log(malo2);

for (var i = 0; i < malo1.length; i++) {
  console.log(i);
}

function maximo(...args){
  let maxvalue = undefined;
  for (let value of args){
    if (!maxvalue || value > maxvalue) {
      maxvalue = value;
    }
  }
  return maxvalue;
}
console.log(maximo(5,1,89));
console.log(maximo(89,119,94));
