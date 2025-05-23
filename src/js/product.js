import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData('tents');
const productId = getParam('product');

console.log(dataSource.findProductById(productId));

if (productId) {
  const dataSource = new ProductData('tents');
  const product = new ProductDetails(productId, dataSource);
  product.init();
} else {
  console.error('Missing product ID in query string');
}