import model from '../models/users';

const create = async (username:string, classe:string, level:number, password:string) => {
  const created = await model.create(username, classe, level, password);
  return created;
};

export default {
  create,
};