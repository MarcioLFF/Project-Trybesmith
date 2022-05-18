import { Request, Response, NextFunction } from 'express';

const checkPassword = (req:Request, res:Response, next:NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(422).send({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(422)
      .send({ message: '"password" length must be at least 8 characters long' });
  }
  next();
};

export default {
  checkPassword,
};