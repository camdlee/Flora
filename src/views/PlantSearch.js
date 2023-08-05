import React from 'react'
import { useState, useEffect } from 'react';
import PlantCard from '../components/PlantCard';
import Form from 'react-bootstrap/Form';
// import { Button } from 'bootstrap';
import Button from '@mui/material/Button'
import DummyCard from '../components/DummyCard';

export default function PlantData() {

    // ======================= Initializing variables =====================
    // Hooks
    const [plantData, setPlantData] = useState([])
    const [plant, setPlant] = useState('')
    const [searchedPlant, setSearchedPlant] = useState('')
    const [searchResults, setSearchResults] = useState([])
    // const [plantInfo, setPlantInfo] = useState('')


    //---------------- URLs -----------------------
    // testing out the Perenual Plant API
    // key = sk-NXut64b9f2491050e1633

    // Plant List url - produces the first 30 plants in the list 
    // Need API key and can edit page number to change plants in list
    const apiUrl = `https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633`

    // Plant Details url - produces the specific info for a particular plant
    // Need ID and Key for url to get info
    // const plantDetailsUrl=`https://perenual.com/api/species/details/1?key=sk-NXut64b9f2491050e1633`

    
    useEffect(() => {
        fetch(`https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633&q=${searchedPlant}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            setSearchResults(data.data)
        })
    },[searchedPlant])
    

    return(
        <>
        <body>
            {/* <section className='home-container'>
                <h1>This is the plant search page</h1>
            </section> */}

            {/* ------------------ INPUT SEARCH BAR ----------------- */}
            <section className="search-header">
                <h2>Plant Finder</h2>
                <Form.Control 
                type="text" 
                placeholder="Search for a Plant"
                id='search-bar'
                className='searchbar'
                onChange={(event) => {setSearchedPlant(event.target.value)}}
                />
            </section>

            {/* ------------------- Plant Card Section ----------------------- */}

            <section className='results-container'>
                {/* <DummyCard/>
                <DummyCard/>
                <DummyCard/>
                <DummyCard/>
                <DummyCard/>
                <DummyCard/>
                <DummyCard/>
                <DummyCard/> */}
                {searchResults.map(plant => {
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
                })}
            </section>

        </body>
        </>
    )
}