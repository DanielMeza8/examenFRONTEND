/**
 * 
 * Crear una funcion reciba un arreglo en caso de no recibir nada 
 * mostrar un valor por defecto
 * dentro de esa misma funcion determinar si el parametro recibido es 
 * un arreglo 
 * si es asi mostar los datos de lo contrario mostrar el valor por defecto
 * 
 */




const miFuncion = (datos = [8]) => {
    if (datos === null) {
        datos.map(dato => {
            console.log(dato);
        });
    } else if (Array.isArray(datos)) {
        datos.map(dato => {
            console.log(dato);
        });
    }
}

miFuncion([7,8,9,0]);