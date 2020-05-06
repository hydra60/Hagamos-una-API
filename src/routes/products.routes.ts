import {Router} from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

// lista de productos
productsRouter.get('/', productsController.productList);
// obtener un producto por su id
productsRouter.get('/:id', productsController.getProductById);
// crea un nuevo producto
productsRouter.post('/', productsController.createProduct);
// actualiza un producto
productsRouter.put('/:id', productsController.updateProduct);
// actualiza un producto
productsRouter.delete('/:id', productsController.deleteProduct);

export default productsRouter;