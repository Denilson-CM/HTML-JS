// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const ejercicio9 = (min = undefined, max = undefined)=>{
    if(min >= max){

        console.warn('El rango inicial es mayor al rango final');
    }else{
        if(!min || !max){
            console.warn('Rangos no definidos'); 
        }else{
            // Retorna un entero aleatorio entre min (incluido) y max (excluido)
            // ¡Usando Math.round() te dará una distribución no-uniforme!
            console.log(Math.round(Math.random()*(max - min) + min));
        }

    }       
}

// ejercicio9(500,600);


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const ejercicio10 = (number = undefined)=>{
    if(!number){
        console.warn('Dato no definido');
    }else{
        if(typeof number === "string"){
            console.warn('Tipo de dato no valido');
            
        }else{
            let convertString = number.toString();
            let p = convertString.split('').reverse().join('');
            let convertInt = Number(p);
            let v = convertInt === number;
            console.log(number);
            console.log(p);
            console.log(v);
        }
    }       
}

// ejercicio10(91019);
// ejercicio10(5005);
// ejercicio10(123);
// ejercicio10(1245);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const ejercicio11 = (numero = undefined)=>{
    if(!numero){
        console.warn('Dato no definido');
    }else{
        if(typeof numero === "string"){
            console.warn('Tipo de dato no valido');
            
        }else{
            let resultado = 1;
            for (let i = 1 ; i <= numero; i++) {
            resultado *= i;
            }
            return `${numero} = ${resultado}`;
        }
    }       
}

// console.log(ejercicio11(1));
// console.log(ejercicio11(2));
// console.log(ejercicio11(3));
// console.log(ejercicio11(4));
// console.log(ejercicio11(5));
// console.log(ejercicio11(6));
// console.log(ejercicio11(7));
// console.log(ejercicio11(8));
// console.log(ejercicio11(9));
// console.log(ejercicio11(10));
// console.log(ejercicio11(11));
// console.log(ejercicio11(12));