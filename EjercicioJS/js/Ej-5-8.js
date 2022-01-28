// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const ejercicio5 = (cadena = "") =>{
    return (!cadena)
    ? console.warn("Cadena vacía")
    : (typeof cadena === "string")
        ? console.info(cadena.split(``).reverse().join(``))  
        : console.warn("No es una cadena")
}
// ejercicio5("Denilson");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const ejercicio6 = (cadena = "", buscarP = "") =>{
    // let val = cadena.includes(buscarP);
    if(!cadena || !buscarP){
        console.warn("Cadena vacía");
    }else{
        if(typeof cadena === "string" && typeof buscarP === "string"){
            let tex = cadena.split(' ');
            let texR = [];
            for (let i = 0; i < tex.length; i++) {
                if (buscarP === tex[i])
                    texR.push(buscarP);
            }
            if (!texR.length){
                return console.warn(`La palabra "${buscarP}", no está en el texto`);
            }else{
                console.log("La palabra", buscarP, "se encontró:", texR.length, "veces");
            }

        }else{
            console.warn("No es una cadena")
        }
    }       
}

let lorem = "cuando denilson camina denilson";

// ejercicio6(lorem,"denilson");


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const ejercicio7 = (cadena = "")=>{
    if(!cadena){
        console.warn("Cadena vacía");
    }else{
        if(typeof cadena === "string"){
            /*Quita todos los espacios, signos de puntuación y las marcas diacríticas (el normalize() en especifico nos ayuda con las marcas diacrítas) usando una expRegular.
            luego convierte todo a minúscula; asi se asegura una buena identificación de los palindromos.*/
            let cadenaSinEspacios = cadena.normalize('NFD').replace(/[.,;\s\u0300-\u036f]/g, "").toLowerCase();
            let p = cadenaSinEspacios.split('').reverse().join('');
            let v = p === cadenaSinEspacios;
            console.log(cadenaSinEspacios);
            console.log(p);
            console.log(v);
        }else{
            console.warn("No es una cadena")
        }
    }       
}
// ejercicio7("salas");
// ejercicio7("sala");
// ejercicio7("Así Ramona va, no Marisa")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const ejercicio8 = (texto = "", patron = "", signos = "") => {
    return (!texto)
    ? console.warn("no has ingresado ningun texto")
    : (!patron) 
        ? console.warn("No has ingreso patron de caracteres a eliminar")
        : (patron && signos) 
            // Documentacion MDN
            ? console.info(texto.replace(new RegExp(`[${patron}\\${signos}]`, "ig"), ""))
            : console.info(texto.replace(new RegExp(patron, "ig"), ""))
}

// ejercicio8() //-> no has ingresado ningun texto
// ejercicio8("hola1!, hola2!, hola3!, hola4!, hola5!") //-> No has ingreaso patron de caracteres a eliminar
// ejercicio8("hola1!, hola2!, hola3!, hola4!, hola5!", "hola") //-> 1!, 2!, 3!, 4!, 5!

// //si también quieres eliminar signos de puntuación usas el tercer parametro
// ejercicio8("hola1!, hola2!, hola3!, hola4!, hola5!", "hola", "!,") //-> 1 2 3 4 5

