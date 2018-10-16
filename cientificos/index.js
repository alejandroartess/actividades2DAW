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
    
}
class articuloRevista extends articuloCientifico{
    constructorRevista(tituloRevista,editorial,numeroImpacto){
        this.tituloCientifico;
        this.autores;
        this.numeroPaginas;
        this.anoPublicacion;
        this.numeroMenciones;
        this.tituloRevista=tituloRevista;
        this.editorial=editorial;
        this.numeroImpacto=numeroImpacto;
        super();
    }
}

/*Artículos	en	conferencia:	Esta	producción científica es	publicada	en	
el	libro	de	una	conferencia,	la cual	tiene	un	nombre	(la	
conferencia),	y	un	lugar	de	celebración.*/

class articuloConferencia extends articuloCientifico{
    constructorConferencia(
        nombre,lugar
    ){
        super(tituloCientifico,autores,numeroPaginas,anoPublicacion,numeroMenciones);        
        this.nombre=nombre;
        this.lugar=lugar;
    }
}

/*Patentes	científicas:	Una	patente	científica es	patentada	por	uno	o	más	
autores,	tiene	un	año	de	publicación,	y	un	año	de	vencimiento	de	la	
patente.*/

class patenteCientifica{
    constructorPatente(
        autores,anoPublicacion,anoVencimiento
    ){
        this.autores=autores;
        this.anoPublicacion=anoPublicacion;
        this.anoVencimiento=anoVencimiento;
    }
}

let listaArticulos = [];
let listaArticulosrevista = [];
let listaArticulosconferencia = [];
let listaPatentecientifica = [];
let salir = false;

while (!salir) {
    console.log('Bienvenidos al sistema de gestión para científicos'); 
    console.log('1) Introducir articulo revista');
    console.log('2) Introducir articulo conferencia');
    console.log('3) Introducir patente cientifica');
    console.log('4) Quitar articulo');
    console.log('5) Buscar un articulo y mostrar informacion');
    console.log('-1) Salir del sistema');
    let opcion=readline.questionInt('Por favor,seleccione una de estas opciones: ');
if (opcion===1) {
    //Introducir articulo cientifico
        let tituloCientifico=readline.question('Por favor,introduce un articulo científico: ');
        let autores=readline.question('Introduce autores: ');
        let numeroPaginas=readline.question('Introduce un numero de páginas: ');
        let anoPublicacion=readline.question('Introduce un año de publicación: ');
        let numeroMenciones=readline.question('Introduce un numero de menciones: ');
        let nuevoArticulo = new articuloCientifico(tituloCientifico,autores,numeroPaginas,anoPublicacion,numeroMenciones);
        listaArticulos.push(nuevoArticulo);
        console.log(listaArticulos);
    }else if (opcion===1) {
        //Introducir articulo revista
            let tituloRevista=readline.question('Por favor,introduce un articulo de revista: ');
            let editorial=readline.question('Introduce autores: ');
            let numeroImpacto=readline.question('Introduce un numero de páginas: ');
            let nuevoArticulorevista = new articuloRevista(tituloRevista,editorial,numeroImpacto);
            listaArticulosrevista.push(nuevoArticulorevista);
            console.log(listaArticulosrevista);
    }else if (opcion===2) {
        //Introducir articulo conferencia
            let nombre=readline.question('Por favor,introduce un articulo de conferencia: ');
            let lugar=readline.question('Introduce lugar: ');
            let nuevoArticuloconferencia = new articuloConferencia(nombre,lugar);
            listaArticulosconferencia.push(nuevoArticuloconferencia);
            console.log(listaArticulosconferencia);
    }else if (opcion===3) {
        //Introducir patente cientifica
        let autores=readline.question('Por favor,introduce una patente cientifica: ');
        let anoPublicacion=readline.question('Introduce un año de publicacion: ');
        let anoVencimiento=readline.question('Introduce un año de vencimiento: ');
        let nuevoPatentecientifica = new patenteCientifica(autores,anoPublicacion,anoVencimiento);
        listaPatentecientifica.push(nuevoPatentecientifica);
        console.log(listaPatentecientifica);
    }else if (opcion===5) {
        //Buscar
            console.log('Bienvenidos al sistema de gestión para científicos,que desea buscar?'); 
            console.log('1) Articulo revista');
            console.log('2) Articulo conferencia');
            console.log('3) Patente cientifica');
            console.log('-1) Salir del sistema');
            let buscar=readline.questionInt('Por favor,seleccione una de estas opciones: ');
            if (buscar===1) {
                //Buscar articulo revista
                let tituloCientifico = readline.question('Por favor,introduce un articulo cientifico: ');
                for(let articuloCientifico of listaArticulos){
                    if (articuloCientifico.tituloCientifico===tituloCientifico) {
                        console.log(articuloCientifico);
                        break;
                    }
                }
        }else if (buscar===-1) {
            salir=true;}
    } else if (opcion===-1){
        salir=true;}
}