import { registerService } from '../../services/Auth/authService.mjs';

export const registerController = async (req, res, next) => {

  try {

    const { name, lastName, nid, age, phoneNumber, email, password  } = req.body;

    const result = await registerService({ name, lastName, nid, age, phoneNumber, email, password });

    res.status(201).json({
      message: 'User successfully registered.',
      usuario: result
    });

  } catch (error) {

    next(error); 

  };

};