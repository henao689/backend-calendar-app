const { Router } = require("express");
const { check } = require("express-validator");
const { login, register, renewToken } = require("../controllers/auth");
const { validatorFields } = require("../middlewares/validatorFields");
const router = Router();

router.get(
  "/",
  [
    //middlewares validations
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password no es correcto').isLength({min: 6}),
    validatorFields,
  ],
  login
);
router.post(
  "/new",
  [
    //middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').trim().isLength({min: 6}),
    validatorFields,
  ],
  register
);
router.post("/renew", renewToken);

module.exports = router;
