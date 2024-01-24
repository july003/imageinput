import React from 'react';
import { ImageInput, useStore } from 'react-admin';

export const CustomImageInput = () => {
  const [tempImage, setTempImage] = useStore<string>('image', '');

  const onDropHandler = (files: any) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onabort = () => console.log('error');
    reader.onerror = () => console.log('error');
    reader.onload = event => {
      setTempImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <ImageInput source="image" label="" options={ { onDrop: onDropHandler } } accept="image/*">
         <img src={ tempImage }/>
      </ImageInput>
    </>
  );
};
