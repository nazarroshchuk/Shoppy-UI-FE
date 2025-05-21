import getProducts from '../../api/get-products';
import ProductsGrid from '@/app/products/products-grid';

export default async function Products() {

  const products = await getProducts();

  return (
    <ProductsGrid products={products} />
  );
}