'use client';

import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import { FormResponse } from '@/interfaces/form-response.interface';
import { ChangeEvent, CSSProperties, useState } from 'react';
import createProduct from '../../api/create-product';
import { CloudUpload, DeleteOutline } from '@mui/icons-material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

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
  p: 4,
};

const fileInputStyles: CSSProperties = {
  position: 'absolute',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
};
export default function CreateProductModal({
  open,
  handleClose,
}: CreateProductModal) {
  const [response, setResponse] = useState<FormResponse>();
  const [file, setFile] = useState<File | null>(null);

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

  const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form className="w-full max-w-xs" action={onSubmitHandler}>
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
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
            >
              Upload File (Jpeg)
              <input
                type="file"
                style={fileInputStyles}
                name="image"
                onChange={onUploadImage}
              />
            </Button>
            {file && (
              <Box display={'flex'} gap={4} alignItems="center">
                <Image
                  src={URL.createObjectURL(file)}
                  alt="file image"
                  width={40}
                  height={40}
                />
                <Typography variant="h6">{file.name}</Typography>
                <Button onClick={() => setFile(null)}>
                  <DeleteOutline />
                </Button>
              </Box>
            )}
            <Button type="submit" variant="contained" color="primary">
              Create product
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
