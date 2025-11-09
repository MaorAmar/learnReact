import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function ImgMediaCard({ imageSrc, linkTo }) {
  function goTo() {
    if (linkTo) window.open(linkTo);
  }

  return (
    <Card sx={{ width: 550 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt="Random Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Random Image
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Random interesting image
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={goTo}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
