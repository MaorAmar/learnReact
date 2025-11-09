import React from 'react';
import { Grid } from '@mui/material';
import ImgMediaCard from './ImgMediaCard';

function MyContainer() { 
return ( 
  <Grid container justifyContent="center" spacing={2}>
    <ImgMediaCard linkTo="https://internet-israel.com" imageSrc="https://picsum.photos/id/866/700/400" /> 
    <ImgMediaCard linkTo="https://hebdevbook.com" imageSrc="https://picsum.photos/id/867/700/400" /> 
    <ImgMediaCard linkTo="https://he.wikipedia.org" imageSrc="https://picsum.photos/id/868/700/400" /> 
    <ImgMediaCard linkTo="https://haaretz.co.il" imageSrc="https://picsum.photos/id/869/700/400" /> 
  </Grid>
); 
} 
export default MyContainer;