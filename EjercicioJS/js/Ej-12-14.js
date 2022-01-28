// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const ejercicio12 = (numero = undefined)=>{
    if(!numero){
        console.warn('Dato no definido');
    }else{
        if(typeof numero === "string"){
            console.warn('Tipo de dato no valido');
            
        }else{
            console.log("-------------------------------------");
            console.log("Has pasado el numero: " + numero);
            console.log("Inicio bucle desde 2 hasta " + (numero - 1));

            for (var i = 2; i < numero; i++) {

                console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

                if (numero % i === 0) {
                    console.log(i + " es un multiplo de " + numero);
                    console.log(numero + " no es un numero primo porque " + i + " es un multiplo");
                    return false;
                }
            }
            if (numero === 1) {
                console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
            } else {
                console.log("Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo.");
            }

            console.log("-------------------------------------");
        }
    }       
}
  
// ejercicio12(19);
// ejercicio12(5);
// ejercicio12(10);
// ejercicio12(4);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const ejercicio13 = (numero = undefined)=>{
    return (!numero)
       ? console.warn('Dato no definido')
       :(typeof cadena === "string")
            ?console.warn('Tipo de dato no valido')
            : (numero%2 == 0)
            ? `${numero} = PAR`
            : `${numero} = IMPAR`
}

// console.log(ejercicio13(2));
// console.log(ejercicio13(3));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const ejercicio14 = (grado = undefined, unidad = "") => {
    if (!grado){
        return console.warn("Inserte un número válido.");
    }else{
        if (!unidad){
            return console.warn("Inserte una unidad termométrica válida Ej. C o F");
        }else{
            if (typeof !unidad === "string"){
                return console.error("Ingresastes un numero, objeto o array, ingresa un texto válido Ej C o F.");
            }else{
                
                let farenheit = grado * (9 / 5) + 32;
                let celsius = (grado - 32) * (5 / 9);
                // Conversor de temperatura
                //Hacemos los datos de unidad termométrica en minuscula.
                unidad = unidad.toLowerCase();
                //Celsius a Farenheit
                if (unidad === "c") {
                    let unidadF = unidad.replace("c", "F");
                    return console.log(
                    `${grado}°${unidad} representan ${farenheit}°${unidadF}.`
                    );
                }
                //Farenheit a Celsius
                if (unidad === "f") {
                    let unidadC = unidad.replace("f", "C");
                 return console.log(`${grado}°${unidad} representan ${celsius}°${unidadC}.`);
                }  
            }
        }
    }
} 
    
// ejercicio14(5, "F");
// ejercicio14(5, "C");



// const ejercicio = (number = undefined)=>{
//     if(!number){
//         console.warn('Dato no definido');
//     }else{
//         if(typeof cadena === "string"){
//             console.warn('Tipo de dato no valido');
            
//         }else{
            
//         }
//     }       
// }

// if (Math.sign(numero) === -1)
//     return console.error(
//       "Ingresastes un número negativo, ingresa uno positivo."
//     );