//------------------- IMPORTS ----------------
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PlantCard({key, name, other_name, cycle, image, scientific_name, sunlight, watering}) {
  
  const apiPremiumError = "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {scientific_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {other_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Cycle: {cycle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Sunlight: {sunlight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Water: {watering}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
