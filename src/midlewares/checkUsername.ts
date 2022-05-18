import { Request, Response, NextFunction } from 'express';

const checkUsername = (req:Request, res:Response, next:NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(422).send({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(422)
      .send({ message: '"username" length must be at least 3 characters long' });
  }
  next();
};

export default {
  checkUsername,
};