import React from 'react'
import { useState, useEffect } from 'react';
import PlantCard from '../components/PlantCard';

export default function PlantData() {

    // ======================= Initializing variables =====================
    // Hooks
    const [plantData, setPlantData] = useState([])
    const [plant, setPlant] = useState('')
    // const [plantInfo, setPlantInfo] = useState('')


    //---------------- URLs -----------------------
    // testing out the Perenual Plant API
    // key = sk-NXut64b9f2491050e1633

    // Plant List url - produces the first 30 plants in the list 
    // Need API key and can edit page number to change plants in list
    const apiUrl = `https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633`

    // Plant Details url - produces the specific info for a particular plant
    // Need ID and Key for url to get info
    const plantDetailsUrl=`https://perenual.com/api/species/details/1?key=sk-NXut64b9f2491050e1633`

    useEffect(() => {
        fetch(plantDetailsUrl)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })
    },[])


    // ---------------- useEffect hook to fetch plant data --------------------
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
    },[])

    // console.log(plantData[0].default_image.original_url)

    return(
        <>
        <body>
            <div className='home-container'>
                <h1>This is the plant data page</h1>
            </div>

            {/* Mapping out plant list data raw */}
            {/* <div>
                {plantData.map(plant => {
                    return <pre>{JSON.stringify(plant)}</pre>
                })}
            </div> */}

            <div>
                {plantInfo.map(plant => {
                    return <pre>{JSON.stringify(plantInfo)}</pre>
                })}
            </div>



            {/* ------------------- Plant Card Section ----------------------- */}
            {/* <div>
                {plantData.map(plant => {
                    return(
                        <PlantCard
                        key={plant.id}
                        name={plant.common_name}
                        other_name={plant.other_name}
                        scientific_name={plant.scientific_name}
                        cycle={plant.cycle}
                        // image={plant.default_image.thumbnail}
                        sunlight={plant.sunlight}
                        watering={plant.watering}
                        />
                    )
                })
                }
            </div> */}

        </body>
        </>
    )
}