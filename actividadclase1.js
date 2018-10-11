var texto = 'Hola me llamo Pepe';
var text2 = 'Hola me llamo Juan';
 let wordsIn1 = new Set();
for(let palabra of texto.split(' ')){
wordsIn1.add(palabra);
}
let wordsIn2 = new Set();
for (let palabra of text2.split(' ')) {
wordsIn2.add(palabra);
}
console.log(wordsIn1);
console.log(wordsIn2);

if (wordsIn1 == wordsIn2) {
  alert("Son iguales ")
}
