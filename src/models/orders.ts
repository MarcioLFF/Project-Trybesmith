import Iorders from '../interfaces/ordersInterface';
import connection from './connection';

/* const getOrders = async () => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  console.log(result);
  return result;
};
  
const getProductsIds = async () => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result;
}; */

const getOrdersProducts = async ():Promise<Iorders[]> => {
  const [result] = await connection.execute(
    `SELECT ord.id, ord.userId, group_concat(Products.id) as productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products ON ord.id = Products.orderId
      group by ord.id
      order by ord.userId;`,
  );
  return result as Iorders[];
};

export default {
  getOrdersProducts,
};