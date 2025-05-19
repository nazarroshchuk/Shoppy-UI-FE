import { Product as IProduct } from '@/interfaces/product';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <Typography variant="h4" color="textSecondary">{product.name}</Typography>
      <Typography variant="body1" color="textSecondary">{product.description}</Typography>
      <Typography variant="body2" color="textSecondary">${product.price}</Typography>
    </Card>
  );
}