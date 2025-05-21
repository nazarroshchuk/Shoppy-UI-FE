'use client'
import { Product as IProduct } from '@/interfaces/product';
import { Card, CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { getProductImage } from './helpers';
import { redirect } from 'next/navigation';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <CardActionArea onClick={() => redirect(`products/${product.id}`)}>
    <Card className="p-4">
      <Stack spacing={4}>
        <Typography variant="h4" color="textSecondary">{product.name}</Typography>
        {product.imageExists &&
          (<Image
            width={0}
            height={0}
            alt="product image"
            className="w-full h-auto"
            src={getProductImage(product.id)}
            sizes="100vw"
          />)
        }
        <Typography variant="body1" color="textSecondary">{product.description}</Typography>
        <Typography variant="body2" color="textSecondary">${product.price}</Typography>
      </Stack>
    </Card>
    </CardActionArea>
  );
}