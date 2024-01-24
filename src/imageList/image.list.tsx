import React from 'react';
import Button from '@mui/material/Button';
import { List, SimpleForm, useStore } from 'react-admin';
import { CustomImageInput } from "../imageInput/image.input";

export const ImageList = () => {
  const [tempImage, setTempImage] = useStore<string>('image', '');
  const handleSubmit = (formValues: any) => {
    // load image as raw file
  }

  return (
    <List>
      <SimpleForm toolbar={ false } onSubmit={ handleSubmit }>
        <CustomImageInput />
        <Button type="submit">Load image</Button>
      </SimpleForm>
    </List>
  )
}