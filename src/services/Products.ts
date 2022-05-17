import model from '../models/Products';
import Iproduct from '../interfaces/productInterface';

const getProductsService = async ():Promise<Iproduct[]> => {
  const products = await model.getProductsModel();
  return products;
};

const create = async (name:string, amount:string):Promise<Iproduct> => {
  const createdProduct = await model.createProduct(name, amount);
  return createdProduct;
};

export default {
  getProductsService,
  create,
};