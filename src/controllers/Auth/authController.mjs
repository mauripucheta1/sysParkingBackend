import { registerService, loginService } from '../../services/Auth/authService.mjs';

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

export const loginController = async (req, res, next) => {

  try {

    const { email, password  } = req.body;

    const result = await loginService({  email, password });

    res.status(200).json({
      message: 'User successfully authenticated.',
      usuario: result
    });

  } catch (error) {

    next(error); 

  };

};