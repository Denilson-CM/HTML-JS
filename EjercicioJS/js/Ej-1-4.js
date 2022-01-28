

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function ejercicio1(cadena) {
    
    return `El texto ${cadena} contiene 
    ${cadena.length} caracteres`;
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function ejercicio2(cadena,n) {
    let texto = "";
    
    for(let i = 0; i < n; i++){
        texto += cadena[i];
    }
    return `El texto ${cadena} se recortó en ${n}. 
    = ${texto}`;
}

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function ejercicio3(cadena){

    let array = cadena.split(' ')
    return array;
  }
  
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function ejercicio4(cadena,n){
    let texto = "";
      for (let i = 0; i < n; i++) {
        texto += ` ${cadena}`;
      }
      console.log();
      return texto;
}


// Función para validar texto
const texS = (cadena)=>{
    if(typeof cadena === 'string') {
            console.log(ejercicio1(cadena));
            console.log(ejercicio3(cadena));
    }else{
        console.error (`${cadena} No es un texto `); 
    }
}

// Función para validar longitud
const texL = (cadena, n) =>{
    if(typeof cadena !== 'string') {

        console.error (`${cadena} No es un texto `); 
            
    }else{
        if(typeof n === 'string'){

            console.error (`${n} No es un numero `); 

        }else{
            console.log(ejercicio2(cadena,n));
            console.log(ejercicio4(cadena,n));
        }
    }
}


// texS(`Denilson Uriel`);
// texL(`Denilson`,4)

