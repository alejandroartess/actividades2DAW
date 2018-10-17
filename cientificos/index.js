const readline = require('readline-sync');

class articuloCientifico {
    constructor(tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones) {
        this.tituloCientifico = tituloCientifico;
        this.autores = autores;
        this.numeroPaginas = numeroPaginas;
        this.anoPublicacion = anoPublicacion;
        this.numeroMenciones = numeroMenciones;
    }

}
class articuloRevista extends articuloCientifico {
    constructor(tituloRevista, editorial, numeroImpacto, tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones) {
        super(tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones);
        this.tituloRevista = tituloRevista;
        this.editorial = editorial;
        this.numeroImpacto = numeroImpacto;
    }
}

/*Artículos	en	conferencia:	Esta	producción científica es	publicada	en
el	libro	de	una	conferencia,	la cual	tiene	un	nombre	(la
conferencia),	y	un	lugar	de	celebración.*/

class articuloConferencia extends articuloCientifico {
    constructor(nombre, lugar, tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones) {
        super(tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones);
        this.nombre = nombre;
        this.lugar = lugar;
    }
}

/*Patentes	científicas:	Una	patente	científica es	patentada	por	uno	o	más
autores,	tiene	un	año	de	publicación,	y	un	año	de	vencimiento	de	la
patente.*/

class patenteCientifica {
    constructor(
        autores, anoPublicacion, anoVencimiento
    ) {
        this.autores = autores;
        this.anoPublicacion = anoPublicacion;
        this.anoVencimiento = anoVencimiento;
    }
}
let listaArticulos = [];
let listaArticulosrevista = [];
let listaArticulosconferencia = [];
let listaPatentecientifica = [];
let salir = false;

while (!salir) {
    console.log('Bienvenidos al sistema de gestión para científicos');
    console.log('1) Introducir articulo cientifico');
    console.log('2) Introducir patente cientifica');
    console.log('3) Modificar un articulo');
    console.log('4) Quitar articulo');
    console.log('5) Buscar un articulo y mostrar informacion');
    console.log('-1) Salir del sistema');
    let opcion = readline.questionInt('Por favor,seleccione una de estas opciones: ');
    if (opcion === 1) {
        //Introducir articulo cientifico
        let tituloCientifico = readline.question('Por favor,introduce un articulo científico: ');
        let autores = readline.question('Introduce autores: ');
        let numeroPaginas = readline.question('Introduce un numero de páginas: ');
        let anoPublicacion = readline.question('Introduce un año de publicación: ');
        let numeroMenciones = readline.question('Introduce un numero de menciones: ');
        let nuevoArticulo = new articuloCientifico(tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones);
        listaArticulos.push(nuevoArticulo);
        console.log('Que quiere introducir: ');
        console.log('1)Articulo de revista ');
        console.log('2)Articulo conferencia ');
        let opcionintroducir = readline.questionInt('Por favor,seleccione una de estas opciones: ');
  if (opcionintroducir === 1) {
      //Introducir articulo revista
      let tituloRevista = readline.question('Por favor,introduce un articulo de revista: ');
      let editorial = readline.question('Introduce autores: ');
      let numeroImpacto = readline.question('Introduce un numero de páginas: ');
      let nuevoArticulorevista = new articuloRevista(tituloRevista, editorial, numeroImpacto);
      listaArticulosrevista.push(nuevoArticulorevista);
  } else if (opcionintroducir === 2) {
      //Introducir articulo conferencia
      let nombre = readline.question('Por favor,introduce un articulo de conferencia: ');
      let lugar = readline.question('Introduce lugar: ');
      let nuevoArticuloconferencia = new articuloConferencia(nombre, lugar);
      listaArticulosconferencia.push(nuevoArticuloconferencia);

  }} else if (opcion === 2) {
      //Introducir patente cientifica
      let autores = readline.question('Por favor,introduce una patente cientifica: ');
      let anoPublicacion = readline.question('Introduce un año de publicacion: ');
      let anoVencimiento = readline.question('Introduce un año de vencimiento: ');
      let nuevoPatentecientifica = new patenteCientifica(autores, anoPublicacion, anoVencimiento);
      listaPatentecientifica.push(nuevoPatentecientifica);
  } else if (opcion === 3) {
      //Modificacion articulo
      let opcionmodificar = readline.question('Que desea modificar: 1)Revista 2)Conferencia 3)Patente Cientifica ');
      if (opcionmodificar === '1') {
          let tituloRevista = readline.question('Por favor introduzca un titulo de revista: ');
          let tituloEncontrado = undefined;
          //for(let coche of listaCoches){
          for (let i = 0; i < listaArticulosrevista.length; i++) {
              let revista = listaArticulosrevista[i];
              if (revista.tituloRevista === tituloRevista) {
                  tituloEncontrado = revista;
                  break;
              }
          }
          if (tituloEncontrado) {
              //Coche encontrado
              let newtituloRevista = readline.questionInt('Introduce nuevo titulo (Actual: ' + tituloEncontrado.tituloRevista + ' )');
              tituloEncontrado.tituloRevista = newtituloRevista;
              console.log('Valor modificado');
          } else {
              //Coche no ha sido encontrado
              console.log('Titulo no encontrado');
          }
      }

  } else if (opcion === 5) {
      //Buscar un articulo
      console.log('Bienvenidos al sistema de gestión para científicos,que desea buscar?');
      console.log('1) Articulo revista');
      console.log('2) Articulo conferencia');
      console.log('3) Patente cientifica');
      console.log('-1) Salir del sistema');
      let buscar = readline.questionInt('Por favor,seleccione una de estas opciones: ');
      if (buscar === 1) {
          //Buscar articulo revista
          let tituloRevista = readline.question('Por favor,introduce un articulo revista: ');
          for (let articuloRevista of listaArticulosrevista) {
              if (articuloRevista.tituloRevista === tituloRevista) {
                  console.log(articuloRevista);
                  break;
              }
          }
      }else if (buscar === 2) {
        //Buscar articulo conferencia
        let nombre = readline.question('Por favor,introduce un articulo conferencia: ');
        for (let articuloConferencia  of listaArticulosconferencia) {
            if (articuloConferencia.nombre === nombre) {
                console.log(articuloConferencia);
                break;
            }
        }
      }
      else if (buscar === 3) {
        //Buscar patente cientifica
        let autores = readline.question('Por favor,introduce autores: ');
        for (let patenteCientifica  of listaPatentecientifica) {
            if (patenteCientifica.autores === autores) {
                console.log(patenteCientifica);
                break;
            }
        }
      }
       else if (buscar === -1) {
          salir = true;
      }
  } else if (opcion === -1) {
      salir = true;
  }
}
