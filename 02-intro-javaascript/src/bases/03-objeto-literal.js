const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 6575432,
        lat: 14.34242,
        lng: 35.2352
    }
};

console.table( persona );

const persona2 = {...persona};
console.table( persona2 );
