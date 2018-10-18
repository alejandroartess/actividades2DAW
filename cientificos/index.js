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
class autoresmundo {
  constructor(
    nombreautor
  ) {
    this.nombreautor = nombreautor;
  }
}
let listaArticulos = [];
let listaPatentecientifica = [];
let listaAutores = [];
let salir = false;

while (!salir) {
  console.log('Bienvenidos al sistema de gestión para científicos');
  console.log('1) Introducir articulo cientifico');
  console.log('2) Introducir patente cientifica');
  console.log('4) Modificar un articulo');
  console.log('5) Quitar articulo');
  console.log('6) Buscar un articulo y mostrar informacion');
  console.log('7) Sacar autores');
  console.log('-1) Salir del sistema');
  let opcion = readline.questionInt('Por favor,seleccione una de estas opciones: ');
  if (opcion === 1) {
    //Introducir articulo cientifico
    let tituloCientifico = readline.question('Por favor,introduce un titulo científico: ');
    let autores = readline.question('Introduce autores: ');
    let numeroPaginas = readline.question('Introduce un numero de páginas: ');
    let anoPublicacion = readline.question('Introduce un año de publicación: ');
    let numeroMenciones = readline.question('Introduce un numero de menciones: ');
    console.log('Que quiere introducir: ');
    console.log('1)Articulo de revista ');
    console.log('2)Articulo conferencia ');
    console.log('3)Autor ');
    let opcionintroducir = readline.questionInt('Por favor,seleccione una de estas opciones: ');
    if (opcionintroducir === 1) {
      //Introducir articulo revista
      let tituloRevista = readline.question('Por favor,introduce un titulo de revista: ');
      let editorial = readline.question('Introduce editorial: ');
      let numeroImpacto = readline.question('Introduce un numero de impacto: ');
      let nuevoArticulorevista = new articuloRevista(tituloRevista, editorial, numeroImpacto, tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones);
      listaArticulos.push(nuevoArticulorevista);
    } else if (opcionintroducir === 2) {
      //Introducir articulo conferencia
      let nombre = readline.question('Por favor,introduce un articulo de conferencia: ');
      let lugar = readline.question('Introduce lugar: ');
      let nuevoArticuloconferencia = new articuloConferencia(nombre, lugar, tituloCientifico, autores, numeroPaginas, anoPublicacion, numeroMenciones);
      listaArticulos.push(nuevoArticuloconferencia);
    } else if (opcionintroducir === 3) {
      //Introducir autor
      let nombreautor = readline.question('Por favor,introduce un autor: ');
      let nuevoAutor = new autoresmundo(nombreautor);
      listaAutores.push(nuevoAutor);
    }
  } else if (opcion === 2) {
    //Introducir patente cientifica
    let autores = readline.question('Por favor,introduce autor patente cientifica: ');
    let anoPublicacion = readline.question('Introduce un año de publicacion: ');
    let anoVencimiento = readline.question('Introduce un año de vencimiento: ');
    let nuevoPatentecientifica = new patenteCientifica(autores, anoPublicacion, anoVencimiento);
    listaPatentecientifica.push(nuevoPatentecientifica);
  } else if (opcion === 4) {
    //Modificacion articulo
    let opcionmodificar = readline.question('Que desea modificar: 1)Revista 2)Conferencia 3)Patente Cientifica 4)Autor ');
    if (opcionmodificar === '1') {
      let tituloRevista = readline.question('Por favor introduzca un titulo de revista: ');
      let tituloEncontrado = undefined;
      //for(let articulo of listaArticulos){
      for (let i = 0; i < listaArticulos.length; i++) {
        let revista = listaArticulos[i];
        if (revista.tituloRevista === tituloRevista) {
          tituloEncontrado = revista;
          break;
        }
      }
      if (tituloEncontrado) {
        //Titulo encontrado
        let newtituloRevista = readline.question('Introduce nuevo titulo (Actual: ' + tituloEncontrado.tituloRevista + ' )');
        tituloEncontrado.tituloRevista = newtituloRevista;
        let neweditorial = readline.question('Introduce nuevo editorial (Actual: ' + tituloEncontrado.editorial + ' )');
        tituloEncontrado.editorial = neweditorial;
        let newimpacto = readline.question('Introduce un nuevo numero de impacto (Actual: ' + tituloEncontrado.numeroImpacto + ' )');
        tituloEncontrado.numeroImpacto = newimpacto;
        console.log('Valores modificados');
      } else {
        //Articulo no ha sido encontrado
        console.log('Titulo no encontrado');
      }
    } else if (opcionmodificar === '2') {
      let tituloConferencia = readline.question('Por favor introduzca un articulo de conferencia: ');
      let tituloEncontrado = undefined;
      //for(let articulo of listaArticulos){
      for (let i = 0; i < listaArticulos.length; i++) {
        let conferencias = listaArticulos[i];
        if (conferencias.nombre === tituloConferencia) {
          tituloEncontrado = conferencias;
          break;
        }
      }
      if (tituloEncontrado) {
        //Titulo encontrado
        let newtituloConferencia = readline.question('Introduce nuevo titulo (Actual: ' + tituloEncontrado.tituloConferencia + ' )');
        tituloEncontrado.tituloConferencia = newtituloConferencia;
        let newlugar = readline.question('Introduce nuevo lugar (Actual: ' + tituloEncontrado.lugar + ' )');
        tituloEncontrado.lugar = newlugar;
        console.log('Valores modificados');
      } else {
        //Articulo no ha sido encontrado
        console.log('Titulo no encontrado');
      }

    } else if (opcionmodificar === '3') {
      let tituloPatente = readline.question('Por favor introduzca una patente cientifica: ');
      let tituloEncontrado = undefined;
      //for(let articulo of listaArticulos){
      for (let i = 0; i < listaPatentecientifica.length; i++) {
        let patentes = listaPatentecientifica[i];
        if (patentes.autores === tituloPatente) {
          tituloEncontrado = patentes;
          break;
        }
      }
      if (tituloEncontrado) {
        //Titulo encontrado
        let newtituloPatente = readline.question('Introduce autores de la patente (Actual: ' + tituloEncontrado.autores + ' )');
        tituloEncontrado.autores = newtituloPatente;
        let newaño = readline.question('Introduce nuevo año publicacion (Actual: ' + tituloEncontrado.anoPublicacion + ' )');
        tituloEncontrado.anoPublicacion = newaño;
        let newvencimiento = readline.question('Introduce nuevo año vencimiento (Actual: ' + tituloEncontrado.anoVencimiento + ' )');
        tituloEncontrado.anoVencimiento = newvencimiento;
        console.log('Valores modificados');
      } else {
        //Articulo no ha sido encontrado
        console.log('Titulo no encontrado');
      }

    } else if (opcionmodificar === '4') {
      let nombreAutor = readline.question('Por favor introduzca un autor: ');
      let autorEncontrado = undefined;
      //for(let articulo of listaArticulos){
      for (let i = 0; i < listaAutores.length; i++) {
        let autorin = listaAutores[i];
        if (autorin.autores === nombreAutor) {
          autorEncontrado = autorin;
          break;
        }
      }
      if (autorEncontrado) {
        //Autor encontrado
        let newnombreautor = readline.question('Introduce nuevo nombre autor (Actual: ' + autorEncontrado.nombreAutor + ' )');
        autorEncontrado.nombreAutor = newnombreautor;
        console.log('Autor modificado');
      } else {
        //Autor no ha sido encontrado
        console.log('Autor no encontrado');
      }
  }} else if (opcion === 5) {
    //Dar de baja un articulo
    let opcionborrar = readline.question('Que desea borrar: 1)Revista 2)Conferencia 3)Patente Cientifica ');
    if (opcionborrar === '1') {
      let revista = readline.question('Por favor introduce un articulo de revista: ');
      let encontrado = false;
      for (let i = 0; i < listaArticulos.length; i++) {
        let articulo = listaArticulos[i];
        if (articulo.tituloRevista === revista) {
          listaArticulos.splice(i, 1);
          encontrado = true;
          break;
        }
      }
      if (encontrado) {
        console.log('Articulo encontrado y borrado del sistema'); +
        console.log(listaArticulos);
      } else {
        console.log('Articulo no encontrado en el sistema');
      }
    }
    if (opcionborrar === '2') {
      let conferencia = readline.question('Por favor introduce un articulo de conferencia: ');
      let encontrado = false;
      for (let i = 0; i < listaArticulos.length; i++) {
        let articuloconferencia = listaArticulos[i];
        if (articulo.tituloRevista === revista) {
          listaArticulos.splice(i, 1);
          encontrado = true;
          break;
        }
      }
      if (encontrado) {
        console.log('Articulo encontrado y borrado del sistema'); +
        console.log(listaArticulos);
      } else {
        console.log('Articulo no encontrado en el sistema');
      }
    }
    if (opcionborrar === '3') {
      let patente = readline.question('Por favor introduce una patente cientifica: ');
      let encontrado = false;
      for (let i = 0; i < listaPatentecientifica.length; i++) {
        let patentecientifica = listaPatentecientifica[i];
        if (articulo.tituloRevista === patentecientifica) {
          listaPatentecientifica.splice(i, 1);
          encontrado = true;
          break;
        }
      }
      if (encontrado) {
        console.log('Articulo encontrado y borrado del sistema'); +
        console.log(listaPatentecientifica);
      } else {
        console.log('Articulo no encontrado en el sistema');
      }
    }
    if (opcionborrar === '4') {
      let nombreautor = readline.question('Por favor introduce un autor: ');
      let encontrado = false;
      for (let i = 0; i < listaAutores.length; i++) {
        let autores = listaAutores[i];
        if (autores.nombreAutor === nombreautor) {
          listaAutores.splice(i, 1);
          encontrado = true;
          break;
        }
      }
      if (encontrado) {
        console.log('Autor encontrado y borrado del sistema'); +
        console.log(listaAutores);
      } else {
        console.log('Autor no encontrado en el sistema');
      }
    }
  } else if (opcion === 6) {
    //Buscar un articulo
    console.log('Bienvenidos al sistema de gestión para científicos,que desea buscar?');
    console.log('1) Articulo revista');
    console.log('2) Articulo conferencia');
    console.log('3) Patente cientifica');
    console.log('-1) Salir del sistema');
    let buscar = readline.questionInt('Por favor,seleccione una de estas opciones: ');
    if (buscar === 1) {
      //Buscar articulo revista
      let titulo = readline.question('Por favor,introduce un articulo revista: ');
      for (let articuloRevista of listaArticulos) {
        if (articuloRevista.tituloRevista === titulo) {
          console.log(articuloRevista);
          break;
        }
      }
    } else if (buscar === 2) {
      //Buscar articulo conferencia
      let conferencia = readline.question('Por favor,introduce un nombre de  conferencia: ');
      for (let articuloConferencia of listaArticulos) {
        if (articuloConferencia.nombre === conferencia) {
          console.log(articuloConferencia);
          break;
        }
      }
    } else if (buscar === 3) {
      //Buscar patente cientifica
      let patente = readline.question('Por favor,introduce autores: ');
      for (let patenteCientifica of listaPatentecientifica) {
        if (patenteCientifica.autores === patente) {
          console.log(patenteCientifica);
          break;
        }
      }
    } else if (buscar === -1) {
      salir = true;
    }
  } else if (opcion === 7) {
    //Buscar autor
    let autorarray = readline.question('Por favor,introduce autores: ');
    for (let autoresin of listaAutores) {
      if (autoresin.nombreautor === autorarray) {
     console.log(autoresin.length);
      }
    }
  } else if (opcion === -1) {
    salir = true;
  }
}
