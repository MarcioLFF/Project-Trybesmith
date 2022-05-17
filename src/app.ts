import express from 'express';
import productController from './controllers/Products';
import checkName from './midlewares/checkName';
import checkAmount from './midlewares/checkAmount';

const app = express();

app.use(express.json());

app.get('/products', productController.getProducts);

app.post('/products', checkName.checkName, checkAmount.checkAmount, productController.create);

export default app;
