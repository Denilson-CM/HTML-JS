// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const ejercicio15 = (numero=undefined, base=undefined)=> {
    if (numero===undefined){
        return console.warn("No ingresaste el numero")
    }else{
        if (typeof numero!=="number"){
            return console.error(`El valor ingresado "${numero}", no es un numero`);
        }else{
            if (base=== undefined){
                return console.warn("No ingresaste la base a convertir");
            }else{
                if (typeof base!=="number"){
                    return console.error(`El valor ingresado ${base}", no es un numero`);
                }else{
                    if(base!==2 & base!==10){
                        return console.warn("Valor de unidad no reconocido");
                    }else{
                        if (base===2){
                            return console.info(`${numero} base ${base} = "${numero.toString(2)}`);
                
                        } else if(base===10){
                            return console.info(`${numero} base ${base} = "${(parseInt(numero,2))}"`);
                        } 
                    }
                }
            }
        } 
    }              
}
    // ejercicio15();// No ingresaste el numero
    // ejercicio15("e");//El valor ingresado "e", no es un numero
    // ejercicio15(100);// ingresaste la base a convertir
    // ejercicio15(100, "e");// El valor ingresado e", no es un numero
    // ejercicio15(100,4);//Valor de unidad no reconocido
    // ejercicio15(125,2);//decimal a binario
    // ejercicio15(33,2);//decimal a binario
    // ejercicio15(11001,10);//binario a decimal


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const ejercicio16 = (numero=undefined, desc=undefined)=> {
    if (numero===undefined){
        return console.warn("No ingresaste la cantidad")
    }else{
        if (typeof numero!=="number"){
            return console.error(`El valor ingresado "${numero}", no es un numero`);
        }else{
            if (desc=== undefined){
                return console.warn("No ingresaste el descuento");
            }else{
                if (typeof desc!=="number"){
                    return console.error(`El valor ingresado ${desc}", no es un numero`);
                }else{
                    let r = numero - desc;
                    return console.info(`la cantidad de: ${numero} - ${desc} = ${r}`);
                }
            }
        } 
    }              
}

// ejercicio16(10,5);
// ejercicio16(5,2);
// ejercicio16(2,5);
// ejercicio16("5",5);
// ejercicio16("t");
// ejercicio16(10,'de');
// ejercicio16("d","d");
// ejercicio16();

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


const ejercicio17 = (fecha = undefined) => {
    if (!fecha) return console.warn("No se ha ingresado una fecha");
    if (!(fecha instanceof Date) ) return console.error("El valor ingresado no es una fecha");
    
    let operacion = new Date().getTime() - fecha.getTime(),
        resultado = Math.floor(operacion / (1000 * 60 * 60 * 24 * 365));//los milesegundos que tiene un año
    
    return (Math.sign(resultado) === -1)
        ? console.info(`Faltan ${Math.abs(resultado)} años para el ${fecha.toLocaleDateString()}`)
        : (Math.sign(resultado) === 1)
            ? console.info(`Desde ${fecha.toLocaleDateString()} han pasado ${resultado} años`)
            : console.info(`Esta en el año actual de ${fecha.toLocaleDateString()}`)
}

// ejercicio17();
// ejercicio17(true);
// ejercicio17(1984, 4, 23);
// ejercicio17(new Date(1984, 4, 23));
// ejercicio17(new Date());
// ejercicio17(new Date(2130, 0, 5));
