// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const ejercicio21 = (arre=undefined)=> {
    
    if (arre===undefined){
        return console.warn("No ingresaste un arreglo de números");
    }else{
        if(!(arre instanceof Array)){
            return console.error(`El valor ingresado "${arre}", no es un arreglo`);
        }else{
            if (arre.length===0){
                return console.error(`El arreglo ingresado  esta vacío`);
            }else{
                for(let num of arre){
                    if (typeof num!=="number"){ 
                        return console.error(`El valor ingresado "${num}", NO es un número`);
                    }
                }
                const newArr=arre.map(el=>el*el);
        
                return console.info(`Arreglo original "${arre}, Arreglo elevado al cuadrado ${newArr}"`);
            } 
        } 
    }
}

// ejercicio21();
// ejercicio21(20);
// ejercicio21("");
// ejercicio21([]);
// ejercicio21([1,3,4,{}]);
// ejercicio21([1,4,5]);
// ejercicio21([1,3,4,8]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const ejercicio22 = (numero=undefined)=> {
    
    if (numero===undefined) return console.warn("No ingresaste un arreglo de numeros");

    if(!(numero instanceof Array)) return console.error(`El valor ingresado "${numero}", no es un arreglo`);

    if (numero.length===0) return console.error(`El arreglo ingresado  esta vacio`);

    for(let num of numero){
        if (typeof num!=="number") return console.error(`Dentro de los elementos ingresados "${num}", NO es un numero`);

    }
    return console.info(`[${numero}] = [${Math.max.apply(null, numero)}${Math.min(...numero)}]`);
}
// ejercicio22();
// ejercicio22("");
// ejercicio22(["a",4,6]);
// ejercicio22([4,6,"a"]);
// ejercicio22([4,"a",5]);
// ejercicio22([]);
// ejercicio22([-50,4,60]);
// ejercicio22([1,4,5,99,-60]);


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const ejercicio23 = (arre=undefined)=> {
    
    if (arre===undefined) return console.warn("No ingresaste un arreglo de numeros");

    if(!(arre instanceof Array)) return console.error(`El valor ingresado "${arre}", no es un arreglo`);

    if (arre.length===0) return console.error(`El arreglo ingresado  esta vacio`);
    
    for(let num of arre){
        if (typeof num!=="number") return console.error(`Dentro de los elementos ingresados"${num}", NO es un numero`);

        }

        return console.info(`Arreglo original "${arre}"\n`,{
            pares:arre.filter(num=>num%2===0),
            impares:arre.filter(num=>num%2===1)});
    }
 
// ejercicio23();
// ejercicio23([]);
// ejercicio23("a",30,40); 
// ejercicio23([1,2,3,4,5,6,7,8,9,0]);