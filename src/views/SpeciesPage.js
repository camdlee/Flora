//================= IMPORTS ===============
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SpeciesPage(){

    const { plantId } = useParams();
    const [ plantData, setPlantData ] = useState(null)

    // console.log(plantId)

    useEffect(() => {
        fetch(`https://perenual.com/api/species/details/${plantId}?key=sk-NXut64b9f2491050e1633`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // console.log(data.default_image.original_url)
            setPlantData(data)
        })
    }, [plantId])
    


   if(!plantData){
    return(
        <>
            <div class="loader">
                <span class="loader__element"></span>
                <span class="loader__element"></span>
                <span class="loader__element"></span>
            </div>
        </>
    )
   }
    return(
        <>
            <header className="species-header">
                <h1>
                    {plantData.common_name}
                </h1>
            </header>
            <body className="grid-even-columns">
                    <aside className='species-image-container'>
                        <img
                            src={plantData.default_image.original_url}
                        />
                    </aside>
                    <section className='species-info-container'>
                        <h5>
                            Description: 
                        </h5>
                        <p className='promo-normal'>
                            {plantData.description}
                        </p>
                        <p>
                            Cycle: <span className='promo-normal'>{plantData.cycle}</span>
                        </p>
                        <p>
                            Watering: <span className='promo-normal'>{plantData.watering}</span>
                        </p>
                        <p>
                            Soil: <span className='promo-normal'>{plantData.soil}</span>
                        </p>
                        <p>
                            Propogation: 
                                <span className='promo-normal'>
                                    {(plantData.propagation).map(propagate =>{
                                    return(
                                        propagate + ' | '
                                    )
                                })}
                                </span>
                        </p>
                        <p>
                            Sun: 
                            <span className='promo-normal'>
                                {(plantData.sunlight).map(sunlight =>{
                                    return(
                                        sunlight + ' | '
                                    )
                                })}
                            </span>
                        </p>              

                    </section>
            </body>
        </>
    );
}