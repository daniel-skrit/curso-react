// Desestructuracion
// Asignacion Destructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "El ironmen"
};

// const { edad, clave, nombre } = persona;

// console.log( edad, clave, nombre );

const useasadsaddas = ({clave, nombre, edad, rango = "Capitan"}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 15.124131,
        lng: -12.2332
    }
  }
};

const {nombreClave, anios, latlng:{lat, lng}} = useasadsaddas(persona);
console.log(nombreClave, anios);
console.log(lat, lng);