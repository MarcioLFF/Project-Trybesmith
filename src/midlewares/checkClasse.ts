import { Request, Response, NextFunction } from 'express';

const checkClasse = (req:Request, res:Response, next:NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).send({ message: '"classe" is required' });
  }
  if (typeof classe !== 'string') {
    return res.status(422).send({ message: '"classe" must be a string' });
  }
  if (classe.length < 3) {
    return res.status(422).send({ message: '"classe" length must be at least 3 characters long' });
  }
  next();
};

export default {
  checkClasse,
};