/*
    Rutas de usuarios / auth
    host = /api/auth
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  crearUsuario,
  iniciarSesion,
  revalidarToken ,
} = require("../controllers/auth.js");
// router.get("/", (resp, res) => {
//   res.json({ ok: true });
// });

router.post("/new", crearUsuario);
router.post("/", iniciarSesion);
router.post("/renew", revalidarToken);
module.exports = router;
