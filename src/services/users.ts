import model from '../models/users';
import modelOrders from '../models/orders';
// import Iorders from '../interfaces/ordersInterface';

const create = async (username:string, classe:string, level:number, password:string) => {
  const created = await model.create(username, classe, level, password);
  return created;
};

const getOrders = async () => {
  const orders = await modelOrders.getOrdersProducts();
  console.log(orders);
  const newOrders = orders.map((v) => ({
    id: v.id,
    userId: v.userId,
    productsIds: v.productsIds.split(',').map((i:string) => Number(i)),
  }));
  return newOrders; 
};

export default {
  create,
  getOrders,
};