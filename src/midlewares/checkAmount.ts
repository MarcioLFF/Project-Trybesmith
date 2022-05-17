import { Request, Response, NextFunction } from 'express';

const checkAmount = (req:Request, res:Response, next:NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).send({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).send({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(422).send({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

export default {
  checkAmount,
};