import { Request, Response, NextFunction } from 'express';
import services from '../services/Products';

const getProducts = async (_req:Request, res:Response, _next:NextFunction):Promise<Response> => {
  const listAll = await services.getProductsService();
  return res.status(200).json(listAll);
};

const create = async (req:Request, res:Response, _next:NextFunction):Promise<Response> => {
  const { name, amount } = req.body;
  const created = await services.create(name, amount);
  return res.status(201).json(created);
};

export default {
  getProducts,
  create,
};
