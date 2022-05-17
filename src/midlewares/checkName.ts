import { Request, Response, NextFunction } from 'express';

const checkName = (req:Request, res:Response, next:NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).send({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(422).send({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export default {
  checkName,
};