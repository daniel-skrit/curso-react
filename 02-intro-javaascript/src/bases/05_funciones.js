const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

console.log(saludar3("Vegeta"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

// Tarea

const getUsuarioActivo = ( nombre ) => ({
    uid: "ABC567",
    username: nombre
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log( usuarioActivo );