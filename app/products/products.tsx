import getProducts from '../../api/get-products';
import { Grid } from '@mui/material';
import Product from '@/app/products/product';

export default async function Products() {

  const products = await getProducts();

  return (
    <Grid container spacing={2} sx={{ height: '85vh', overflow: 'auto' }}>
      {!!products?.length && products.map((product) => (
        <Grid key={product.id} size={{ lg: 4, sm: 6, xs: 12 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}