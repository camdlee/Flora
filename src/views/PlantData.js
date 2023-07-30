import React from 'react'
import { useState, useEffect } from 'react';
import PlantCard from '../components/PlantCard';

export default function PlantData() {

    // --------------- Initializing variables ----------
    const apiUrl = `https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633`
    const [plantData, setPlantData] = useState([])
    const [plant, setPlant] = useState('')

    // testing out the Perenual Plant API
    // key = sk-NXut64b9f2491050e1633
    useEffect(() => {
        // console.log('useEffect hook to fetch api data')
        // fetching data from api
        fetch(apiUrl)
        // waiting for response
        .then(response => response.json())
        // set state of plants with data pulled from api
        .then(data=>{
            console.log(data.data)
            setPlantData(data.data)
        })
    },[plant])

    // console.log(plantData[0].default_image.original_url)

    return(
        <>
        <body>
            <div className='home-container'>
                <h1>This is the plant data page</h1>
            </div>
            <div>
                {plantData.map(plant => {
                    return(
                        <PlantCard
                        key={plant.id}
                        name={plant.common_name}
                        other_name={plant.other_name}
                        scientific_name={plant.scientific_name}
                        cycle={plant.cycle}
                        // image={plant.default_image.thumbnail}
                        sunlight={plant.sunlgiht}
                        watering={plant.watering}
                        />
                    )
                })
                }
            </div>
        </body>
        </>
    )
}