import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IToken from '../interfaces/tokenInterface';
import service from '../services/users';

const create = async (req:Request, res:Response, _next:NextFunction) => {
  const secret = 'meu_segredo';

  const jwtConfig:IToken = {
    expiresIn: '60m',
    algorithm: 'HS256',
  };
  const { username, classe, level, password } = req.body;
  await service.create(username, classe, level, password);
  const token = jwt.sign({ username }, secret, jwtConfig);
  return res.status(201).json({ token });
};

export default {
  create,
};