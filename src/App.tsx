import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ImageList } from '../src/imageList/image.list';
import jsonServerProvider from 'ra-data-json-server';

export const App = () => (
  <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
    <Resource name="photos" list={ ImageList } options={ { label: '_' } }/>
  </Admin>
);