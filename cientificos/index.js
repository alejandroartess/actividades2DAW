const readline = require('readline-sync');

class articuloCientifico{
    constructor(
        tituloCientifico,autores,numeroPaginas,anoPublicacion,numeroMenciones
    ){
        this.tituloCientifico=tituloCientifico;
        this.autores=autores;
        this.numeroPaginas=numeroPaginas;
        this.anoPublicacion=anoPublicacion;
        this.numeroMenciones=numeroMenciones;
    }
    getTituloCientifico(){
        return this.tituloCientifico;
    }
    
}
class articuloRevista extends articuloCientifico{
    constructor(
        tituloRevista,editorial,numeroImpacto
    ){
        this.tituloRevista=tituloRevista;
        this.editorial=editorial;
        this.numeroImpacto=numeroImpacto;
    }
    getTituloRevista(){
        return this.tituloRevista;
    }
}

/*Artículos	en	conferencia:	Esta	producción científica es	publicada	en	
el	libro	de	una	conferencia,	la cual	tiene	un	nombre	(la	
conferencia),	y	un	lugar	de	celebración.*/

class articuloConferencia extends articuloCientifico{
    constructor(
        nombre,lugar
    ){
        this.nombre=nombre;
        this.lugar=lugar;
    }
    getNombre(){
        return this.nombre;
    }
}

/*Patentes	científicas:	Una	patente	científica es	patentada	por	uno	o	más	
autores,	tiene	un	año	de	publicación,	y	un	año	de	vencimiento	de	la	
patente.*/

class patenteCientifico{
    constructor(
        autores,anoPublicacion,anoVencimiento
    ){
        this.autores=autores;
        this.anoPublicacion=anoPublicacion;
        this.anoVencimiento=anoVencimiento;
    }
    getAutores(){
        return this.autores;
    }
}

let listaArticulos = [];
let salir = false;

while (!salir) {
    console.log('Bienvenidos al sistema de gestión para científicos'); 
    console.log('1) Introducir articulo científico');
    console.log('2) Introducir articulo revista');
    console.log('3) Introducir articulo conferencia');
    console.log('4) Introducir patente cientifica');
    console.log('5) Quitar articulo');
    console.log('6) Buscar un articulo y mostrar informacion');
    console.log('-1) Salir del sistema');
    let opcion=readline.questionInt('Por favor,seleccione una de estas opciones: ');
if (opcion===1) {
    //Introducir articulo cientifico
        let tituloCientifico=readline.question('Por favor,introduce un titulo científico: ');
        let autores=readline.question('Introduce autores: ');
        let numeroPaginas=readline.question('Introduce un numero de páginas: ');
        let anoPublicacion=readline.question('Introduce un año de publicación: ');
        let numeroMenciones=readline.question('Introduce un numero de menciones: ');
        let nuevoArticulo = new articuloCientifico(tituloCientifico,autores,numeroPaginas,anoPublicacion,numeroMenciones);
        listaArticulos.push(nuevoArticulo);
        console.log(listaArticulos);
    }else if (opcion===2) {
        //Introducir articulo revista
            let tituloCientifico=readline.question('Por favor,introduce un titulo científico: ');
            let autores=readline.question('Introduce autores: ');
            let numeroPaginas=readline.question('Introduce un numero de páginas: ');
            let anoPublicacion=readline.question('Introduce un año de publicación: ');
            let numeroMenciones=readline.question('Introduce un numero de menciones: ');
            let nuevoArticulo = new articuloCientifico(tituloCientifico,autores,numeroPaginas,anoPublicacion,numeroMenciones);
            listaArticulos.push(nuevoArticulo);
            console.log(listaArticulos);
    }else if (opcion===3) {
        //Buscar un coche
        let matricula = readline.question('Por favor,introduce una matricula: ');
        for(let coche of listaCoches){
            if (coche.matricula===matricula) {
                console.log(coche);
                break;
            }
        }
        /**
         * let arrayCoche = listaCoches.filter( c => c.matricula===matricula)
         * console.log(arrayCoche[0])
         */
    }else if (opcion===-1) {
        salir=true;
    }

}