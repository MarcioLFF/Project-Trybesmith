import express from 'express';
import productController from './controllers/Products';
import usersControler from './controllers/users';
import checkName from './midlewares/checkName';
import checkAmount from './midlewares/checkAmount';
import checkClasse from './midlewares/checkClasse';
import checkLevel from './midlewares/checkLevel';
import checkUsername from './midlewares/checkUsername';
import checkPassword from './midlewares/checkPassword';

const app = express();

app.use(express.json());

app.get('/products', productController.getProducts);

app.post('/products', checkName.checkName, checkAmount.checkAmount, productController.create);

app.post(
  '/users', 
  checkClasse.checkClasse, 
  checkLevel.checkLevel,
  checkUsername.checkUsername, 
  checkPassword.checkPassword, 
  usersControler.create,
);

export default app;
