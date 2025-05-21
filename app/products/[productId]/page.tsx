import Typography from '@mui/material/Typography';
import getProduct from '@/app/products/[productId]/get-product';
import { Grid, Stack } from '@mui/material';
import { getProductImage } from '../helpers';
import Image from 'next/image';
import Checkout from '@/app/checkout/checkout';
import { ProductInterface } from '@/interfaces/product.interface';

interface SingleProductProps {
  params: { productId: string };
}

export default async function SingleProduct({ params }: SingleProductProps) {
  const { productId } = await params;
  const product = (await getProduct(productId)) as ProductInterface;

  return (
    <Grid container marginBottom="2rem" rowGap={3}>
      {product?.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product?.id)}
            width={0}
            height={0}
            alt="product image"
            className="w-full lg:w-5/6 sm:w-3/4 h-auto"
            sizes="100vw"
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack gap={3} marginBottom="2rem">
          <Typography variant="h2">{product?.name}</Typography>
          <Typography>{product?.description}</Typography>
          <Typography variant="h4">${product?.price}</Typography>
          <Checkout productId={product?.id} />
        </Stack>
      </Grid>
    </Grid>
  );
}
