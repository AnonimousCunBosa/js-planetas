let peso_tierra = 60 ;
let peso_mercurio = peso_tierra * 0.38 ;
let peso_venus = peso_tierra * 0.91 ;
let peso_marte = peso_tierra * 0.38 ;
let peso_jupiter = peso_tierra * 2.53 ;
let peso_saturno = peso_tierra * 1.06 ;
let peso_urano = peso_tierra * 0.89 ;
let peso_neptuno = peso_tierra * 1.14 ;
let nombre = 'Joan'//


//console.log(' El peso de ' + nombre + ' en mercurio es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en venus es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en marte es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en jupiter es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en saturno es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en urano es ' + peso_tierra + ' kg ');
//console.log(' El peso de ' + nombre + ' en neptuno es ' + peso_tierra + ' kg ');


//CONDICIONAL PARA MOSTRAR EL PESO SEGUN EL PLANETA ELEGIDO

//VARIABLE MERCURIO
let peso_escogido = peso_mercurio ;
let planeta_escogido = 'mercurio' ;


if (peso_escogido === peso_tierra) {
    console.log('su peso es el mismo, no cambia porque esta en el mismo planeta que es la tierra ' );
} else if (peso_escogido === peso_mercurio) {
    console.log('Su peso en Mercurio es : ' + peso_mercurio + ' kg ');
} else if (peso_escogido === peso_venus) {
    console.log('Su peso en Venus es : ' + peso_venus + ' kg ');
} else if (peso_escogido === peso_marte) {
    console.log('Su peso en Marte es : ' + peso_marte + ' kg ');
} else if (peso_escogido === peso_jupiter) {
    console.log('Su peso en Júpiter es : ' + peso_jupiter + ' kg ');
} else if (peso_escogido === peso_saturno) {
    console.log('Su peso en Saturno es : ' + peso_saturno + ' kg ');
} else if (peso_escogido === peso_urano) {
    console.log('Su peso en Urano es : ' + peso_urano + ' kg ');
} else if (peso_escogido === peso_neptuno) {
    console.log('Su peso en Neptuno es : ' + peso_neptuno + ' kg ');
} else {
    console.log('El planeta ' + planeta_escogido + ' no existe');
}