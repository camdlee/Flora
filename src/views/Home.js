import React from 'react'
import { useState, useEffect } from 'react';
import floraLogo from '../static/icons/flora_logo_green.png'
import PlantSearch from './PlantSearch';

export default function Home() {
    // console.log('home page')
    // --------------- Initializing variables ----------
    const apiUrl = `https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633`
    const [plants, setPlants] = useState([])


    // testing out the Perenual Plant API
    // key = sk-NXut64b9f2491050e1633
    // useEffect(() => {
    //     // console.log('useEffect hook to fetch api data')
    //     // fetching data from api
    //     fetch(apiUrl)
    //     // waiting for response
    //     .then(response => response.json())
    //     // set state of plants with data pulled from api
    //     .then(data=>{
    //         console.log(data)
    //         setPlants(data.results)
    //     })
    // },)

    return(
        <>
        <body className='container'>
            <div className='logo-container'>
                <img src={floraLogo} alt='Flora Logo'/>
            </div>
            <PlantSearch/>
            {/* <div className='home-container'>
                <h1>This is the home page</h1>
            </div>
            <div className='container'>
                <h1>Secondary Color</h1>
            </div>
            <div className='container4'>
                <h1>Tertiary Color</h1>
            </div>
            <div className='container1'>
                <h1>Accent Color</h1>
            </div>
            <div className='container2'>
                <h1>Accent Color 2</h1>
            </div>
            <div className='container5'>
                <h1>Accent Color 3</h1>
            </div>
            <div className='container3'>
                <h1>Contrast Color</h1>
            </div> */}
        </body>
        </>
    )
}