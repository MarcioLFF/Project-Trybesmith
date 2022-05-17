import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Iproduct from '../interfaces/productInterface';

const getProductsModel = async ():Promise<Iproduct[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as Iproduct[];
};

const createProduct = async (name:string, amount:string):Promise<Iproduct> => {
  const [product] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)', 
    [name, amount],
  );
  return {
    id: product.insertId,
    name,
    amount,
  };
};

export default {
  getProductsModel,
  createProduct,
};