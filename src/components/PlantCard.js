//------------------- IMPORTS ----------------
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/formatter';



export default function PlantCard({id, name, other_name, cycle, image, scientific_name, sunlight, watering}) {
  
  // console.log(id)
  const plantId = id
  // console.log(plantId);


  // Plant Details url - produces the specific info for a particular plant
  // Need ID and Key for url to get info
  // const plantDetailsUrl=`https://perenual.com/api/species/details/1?key=sk-NXut64b9f2491050e1633`  

  // Conditional if any info = "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"
  let cycleMessage = cycle;
  if (cycle === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    cycleMessage = 'N/A'
  }
  let sunlightMessage = sunlight;
  if (sunlight === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    sunlightMessage = 'N/A'
  }
  let wateringMessage = watering;
  if (watering === "Upgrade Plans To Premium/Supreme - https://perenual.com/subscription-api-pricing. I'm sorry"){
    wateringMessage = 'N/A'
  }

  // want to click the each card which will link to the specific specicies page for that plant
  // the card needs an href link to the specicies page and pass on information by proprs drilling


  return (
    // <Link 
    //   className="card-link"
    //   to={`/speciespage`}
    // >
      <Card className='plant-card'>
        {/* <CardActionArea
          to="/speciespage"
        > */}

          {/* Image for Card */}
          <CardMedia
            sx={{ height: 200 }}
            image={image}
            title={name}
            alt='${name} image'
          />

          {/* Card Text */}
          <CardContent sx={{ height: 200 }}>
            <Typography gutterBottom variant="h5" component="div" className='promo-font'>
              {name}
            </Typography>
            <Typography gutterBottom variant="body" component="div" className="promo-normal">
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
        
        {/* </CardActionArea> */}
      </Card>
    
    // </Link>
  );
}
