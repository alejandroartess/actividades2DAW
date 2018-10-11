let text1 = "Hola me llamo John y tengo 14 años";
let text2 = "Hola me llamo John y tengo 14 años";

let wordsIn1 = new Set();
for( let word of text1.split(' ') ){
    wordsIn1.add(word);
}
let wordsIn2 = new Set();
for(let word of text2.split(' ')){
    wordsIn2.add(word);
}

let setToIterate = null;
let setToCheck = null;

if( wordsIn1.size < wordsIn2 ){
    setToIterate = wordsIn1;
    setToCheck = wordsIn2;
} else {
    setToIterate = wordsIn2;
    setToCheck = wordsIn1;
}

let counter = 0;
for(let word of setToIterate){
    if(setToCheck.has(word)){
        counter++;
    }
}
console.log(counter);