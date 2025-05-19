'use client';

import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import { FormResponse } from '@/common/form-response.interface';
import { useState } from 'react';
import createProduct from '@/app/products/create-product';

interface CreateProductModal {
  open: boolean;
  handleClose: () => void;
}

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
export default function CreateProductModal({ open, handleClose }: CreateProductModal) {
  const [response, setResponse] = useState<FormResponse>();

  const onClose = () => {
    setResponse(undefined);
    handleClose();
  };

  const onSubmitHandler = async (data: FormData) => {
    const response = await createProduct(data);
    setResponse(response);

    if (!response.error) {
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form
          className="w-full max-w-xs"
          action={onSubmitHandler}
        >
          <Stack spacing={2}>
            <TextField
              label="Name"
              placeholder="Name"
              variant="outlined"
              name="name"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              label="Description"
              placeholder="Description"
              variant="outlined"
              name="description"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              label="Price"
              placeholder="Price"
              variant="outlined"
              name="price"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Create product
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}