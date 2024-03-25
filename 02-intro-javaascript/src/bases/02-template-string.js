const nombre = "Fernando";
const apellido = "Herrera";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return "Hola " + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`);