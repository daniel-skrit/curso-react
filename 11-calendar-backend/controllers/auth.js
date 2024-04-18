const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;
  if (name.length < 5) {
    return res.json({
      ok: false,
      msg: "El nombre debe de tener mas de 5 caracteres"
    });
  }
   res.json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });

  console.log(req.body);
};

const iniciarSesion = (req, res = response) => {
  res.json({ ok: true, msg: "login" });
};

const revalidarToken = (req, res = response) => {
  res.json({ ok: true, msg: "renovar" });
};

module.exports = {
  crearUsuario: crearUsuario,
  iniciarSesion: iniciarSesion,
  revalidarToken: revalidarToken,
};
