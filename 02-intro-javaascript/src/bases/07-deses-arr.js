const personajes = ["Goku", "Vegetta", "Trunks"];

const [ , , personaje3 ] = personajes

console.log(personaje3);


const retornaArreglo = () => {
    return [ "ABC", 123 ];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const funcion = (valor) => {return [valor, ()=>{console.log("Hola, Mundo");}]};

const [nombre, setNombre] = funcion("Goku");

console.log( nombre );
setNombre();