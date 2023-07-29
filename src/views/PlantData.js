import React from 'react'
import { useState, useEffect } from 'react';


export default function PlantData() {

    // --------------- Initializing variables ----------
    const apiUrl = `https://perenual.com/api/species-list?page=1&key=sk-NXut64b9f2491050e1633`
    const [plants, setPlants] = useState([])


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
            console.log(data['data'])
            // setPlants(data['data'])
        })
    },)


    return(
        <>
        <body>
            <div className='home-container'>
                <h1>This is the plant data page</h1>
            </div>
            <div>
                {/* {plants.map((data)=>{
                    return(
                        <p>{data.data}</p>
                    )
                })} */}
            </div>
        </body>
        </>
    )
}