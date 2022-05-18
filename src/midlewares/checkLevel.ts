import { Request, Response, NextFunction } from 'express';

const checkLevel = (req:Request, res:Response, next:NextFunction) => {
  const { level } = req.body;
  if (!level && level !== 0) {
    return res.status(400).send({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(422).send({ message: '"level" must be a number' });
  }
  if (level <= 0) {
    return res.status(422).send({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};

export default {
  checkLevel,
};