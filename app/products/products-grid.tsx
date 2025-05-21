'use client';

import { ProductInterface as IProduct } from '@/interfaces/product.interface';
import { Grid } from '@mui/material';
import Product from '@/app/products/product';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { API_URL } from '@/constants/api';
import revalidateProducts from '@/api/revalidate-products';
import getAuthentication from '@/api/get-authentication';

interface ProductsGridProps {
  products: IProduct[] | undefined;
}

export default function ProductsGrid({ products }: ProductsGridProps) {


  useEffect(() => {
    let socket: any;

    const createSocket = async () => {
      const socket = io(API_URL!, {
        auth: {
          Authentication: await getAuthentication()
        }
      });
      console.log('connected');

      socket.on('productUpdated', () => {
        revalidateProducts();
      });


    };


    createSocket();

    return () => {
      console.log('disconnecting');
      socket?.disconnect();
    };
  }, []);

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