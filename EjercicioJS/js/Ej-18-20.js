
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const ejercicio18 =(cadena=undefined)=> {
    if(!cadena || !(typeof cadena=== "string")){
        return console.error("intrtoduce un texto por favor");
    }else{
        //eliminar espa
        let text2 = cadena.replace(/\s+/g, '');

        let expRegular1=/[^aeiou]/ig;
        let totalLetras=text2.match(expRegular1);
        
        
        let vocales=/[aeiou]/ig;
        const totalVocales=text2.match(vocales);
    
        if(totalLetras===null){
            return console.info(`el total de vocales que hay son ${totalVocales.length} y el total de consonantes son 0`);
        }else{
            if(totalVocales===null){
                return console.info(`no hay vocales y hay ${totalLetras.length} consonantes`);
            }else{
                if(vocales!=null){
                    return console.info(`el total de vocales que hay son ${totalVocales.length} y el total de consonantes son ${totalLetras.length}`);
                }
            }
        }
    } 
}
// ejercicio18("Hola Mundo");


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const ejercicio19 = (nom=undefined)=> {
    if(!nom){
        return console.warn("introduce un nombre y apellido");
    }else{
        if(typeof(nom)==="number"){
            return console.error("Tipo de dato invalido");
        }
        let RegExp=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        let resultadoE=RegExp.test(nom);
        (resultadoE===true)
        ?console.info(`El nombre y apellido:${nom} valido`)
        :console.info("el dato introducido no es válido, el nombre y el apellido deberían iniciar en mayúsculas")
    }
    

}
// ejercicio19("Jorge Almiros");

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const ejercicio20 = (correo=undefined)=> {

    if(!correo){
        return console.log("Introduce un correo valido por favor");
    }else{
        let compCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;;
        let resCorreo=compCorreo.test(correo);
        console.log(resCorreo)
        if(resCorreo==true){
            return console.log("Correo validado!!!!!");
        }else{
            return console.log("el correo introducido no es valido, revisalo por favor");
        }
    }
}
// ejercicio20("jonmircha@gmail.com");
