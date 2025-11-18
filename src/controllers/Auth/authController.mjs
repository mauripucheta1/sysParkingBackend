const { validationResult } = require('express-validator');
const userService = require('../services/userService');

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok:false, errors: errors.array() });
    }
    const { nombre, email, password } = req.body;
    const result = await userService.registerUser({ nombre, email, password });
    return res.status(201).json({ ok:true, user: result });
  } catch (err) {
    next(err);
  }
};