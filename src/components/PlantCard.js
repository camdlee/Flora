//------------------- IMPORTS ----------------
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';


export default function PlantCard({key, name, other_name, cycle, image, scientific_name, sunlight, watering}) {
  
  const apiPremiumError = "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
  
  // const theme = createTheme({
  //   components: {
  //     // Name of the component
  //     MuiCardMedia: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           fontSize: '1rem',
  //         },
  //       },
  //     },
  //   },
  // });

  // Conditional if any info = "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
  let cycleMessage = cycle;
  if (cycle === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    cycleMessage = 'Info not available'
  }
  let sunlightMessage = sunlight;
  if (sunlight === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    sunlightMessage = 'Info not available'
  }
  let wateringMessage = watering;
  if (watering === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    wateringMessage = 'Info not available'
  }
  

  return (
    <Card className='card'>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={name}
      />
      <CardContent sx={{ height: 200 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {scientific_name}
        </Typography>
        {/* <Typography gutterBottom variant="h6" component="div">
          {other_name}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
            Cycle: {cycleMessage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Sunlight: {sunlightMessage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Water: {wateringMessage}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
