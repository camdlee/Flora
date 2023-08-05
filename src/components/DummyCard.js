//------------------- IMPORTS ----------------
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DummyCard() {
  
  return (
    <Card className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Text
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Cycle:
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Sunlight:
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Water:
        </Typography>
      </CardContent>
    </Card>
  );
}