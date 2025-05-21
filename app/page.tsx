import CreateProductFab from '@/app/products/create-product-fab';
import getProducts from '../api/get-products';
import Products from '@/app/products/products';

export default async function Home() {
  return (
    <div>
      <Products />
      <CreateProductFab />
    </div>
  );
}
