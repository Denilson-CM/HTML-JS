// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ejercicio24 = (arr=undefined)=> {
    
    if (arr===undefined) return console.warn("No ingresaste un arreglo de numeros");

    if(!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}", no es un arreglo`);

    if (arr.length===0) return console.error(`El arreglo ingresado  esta vacio`);
    
    for(let num of arr){
            if (typeof num!=="number") 
                return console.error(`Dentro de los elementos ingresados"${num}", NO es un numero`);

    }
    console.log("//**************************************************************");
    return console.info(`Arreglo original "${arr}"\nlos numeros en orden son`,{
        asc:arr.map(el=>el).sort(),
        des:arr.map(el=>el).sort().reverse()});
}   

// ejercicio24();
// ejercicio24("");
// ejercicio24(4,2,3,"a",4);
// ejercicio24(4,2,3,2,4);
// ejercicio24([1,2,3,4,5,6,7,8,9,0]);
// ejercicio24([7,5,7,8,6]);


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const ejercicio25 = (arreglo=undefined)=> {
    
    if (arreglo===undefined) return console.warn("No ingresaste un arreglo de numeros");

    if(!(arreglo instanceof Array)) return console.error(`El valor ingresado "${arreglo}", no es un arreglo`);

    if (arreglo.length===0) return console.error(`El arreglo ingresado  esta vacio`);
    
    if (arreglo.length===1) return console.error(`El arreglo ingresado "${arreglo}",  debe tener minimo dos elementos`);
    
    console.log("//**************************************************************");
    return console.info(`Arreglo original "${arreglo}"\nlos numeros en orden son`,
    {sinduplicados:arreglo.filter((value,index,self)=>self.indexOf(value)===index)});
//sinduplicados:[...vew Set(arreglo)]
}   

// ejercicio25();
// ejercicio25("");
// ejercicio25(4,2,3,"a",4);
// ejercicio25(4,2,3,2,4);
// ejercicio25([4]);
// ejercicio25([1,2,2,3,3,4,5,6,7,8,9,0]);
// ejercicio25(["a","a",2,2,3,3,4,5,6,7,8,9,0]); 
// ejercicio25(["x",10,"x",2,"10",10,true,true]);    

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const ejercicio26 = (arr=undefined)=> {
    
    if (arr===undefined) return console.warn("No ingresaste un arreglo de numeros");

    if(!(arr instanceof Array)) return console.error(`El valor ingresado "${arr}", no es un arreglo`);

    if (arr.length===0) return console.error(`El arreglo ingresado  esta vacio`);

    if (arr.length===1) return console.error(`El arreglo ingresado "${arr}",  debe tener minimo dos elementos`);
    
    for(let num of arr){
            if (typeof num!=="number") 
                return console.error(`Dentro de los elementos ingresados"${num}", NO es un numero`);
        }
        
        const promedio=(arr.reduce((acumulador, valor)=> acumulador+valor))/arr.length

        console.info(`El arreglo ingresado "${arr}", su promedio es igual a : ${promedio}`);    
}   

// ejercicio26();
// ejercicio26("");
// ejercicio26(4,2,3,"a",4);
// ejercicio26(4,2,3,2,4);
// ejercicio26([1]);
// ejercicio26([]);
// ejercicio26([9,8,7,6,5,4,3,2,1,0]);
