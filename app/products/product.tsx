import { Product as IProduct } from '@/interfaces/product';
import { Card, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { API_URL } from '@/constants/api';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <Stack spacing={4}>
        <Typography variant="h4" color="textSecondary">{product.name}</Typography>
        {product.imageExists &&
          (<Image
            width={0}
            height={0}
            alt="product image"
            className="w-full h-auto"
            src={`${API_URL}/products/${product.id}.jpeg`}
            sizes="100vw"
          />)
        }
        <Typography variant="body1" color="textSecondary">{product.description}</Typography>
        <Typography variant="body2" color="textSecondary">${product.price}</Typography>
      </Stack>
    </Card>
  );
}