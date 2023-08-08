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

    // Example of data pulled from API
    //     {id: 5, common_name: 'Fraser Fir', scientific_name: Array(1), other_name: Array(1), family: 'Pinaceae', …}
    // attracts
    // : 
    // []
    // care-guides
    // : 
    // "http://perenual.com/api/species-care-guide-list?species_id=5&key=sk-NXut64b9f2491050e1633"
    // care_level
    // : 
    // "Medium"
    // common_name
    // : 
    // "Fraser Fir"
    // cones
    // : 
    // true
    // cuisine
    // : 
    // false
    // cycle
    // : 
    // "Perennial"
    // default_image
    // : 
    // {license: 4, license_name: 'Attribution License', license_url: 'https://creativecommons.org/licenses/by/2.0/', original_url: 'https://perenual.com/storage/species_image/5_abies_fraseri/og/36843539702_e80fc436e0_b.jpg', regular_url: 'https://perenual.com/storage/species_image/5_abies_fraseri/regular/36843539702_e80fc436e0_b.jpg', …}
    // depth_water_requirement
    // : 
    // []
    // description
    // : 
    // "The Fraser Fir (Abies fraseri) is an amazing tree species with many great qualities. It is a dense evergreen conifer native to the Appalachian mountains. Its pyramidal shape and glossy dark green needles, that curve upward, make it a beautiful and popular Christmas tree. Its needles are short, soft, flat and pleasant to the touch. It has been found to be highly resistant to pests, diseases, and environmental stress. Additionally, it has superior winter hardiness and a strong wood that produces very little sap. This incredible species is perfect for a variety of evergreen applications and is guaranteed to bring a unique and beautiful look to any landscape."
    // dimension
    // : 
    // "Height:  35 feet"
    // dimensions
    // : 
    // {type: 'Height', min_value: 35, max_value: 35, unit: 'feet'}
    // drought_tolerant
    // : 
    // false
    // edible_fruit
    // : 
    // false
    // edible_fruit_taste_profile
    // : 
    // "Coming Soon"
    // edible_leaf
    // : 
    // false
    // family
    // : 
    // "Pinaceae"
    // flower_color
    // : 
    // "No flowers, Brown"
    // flowering_season
    // : 
    // null
    // flowers
    // : 
    // true
    // fruit_color
    // : 
    // []
    // fruit_nutritional_value
    // : 
    // "Coming Soon"
    // fruits
    // : 
    // false
    // growth_rate
    // : 
    // "Moderate"
    // hardiness
    // : 
    // {min: '6', max: '6'}
    // hardiness_location
    // : 
    // {full_url: 'https://perenual.com/api/hardiness-map?species_id=5&size=og&key=sk-NXut64b9f2491050e1633', full_iframe: "<iframe frameborder=0 scrolling=yes seamless=seaml…5&size=og&key=sk-NXut64b9f2491050e1633'></iframe>"}
    // harvest_season
    // : 
    // null
    // id
    // : 
    // 5
    // indoor
    // : 
    // false
    // invasive
    // : 
    // false
    // leaf
    // : 
    // true
    // leaf_color
    // : 
    // ['green']
    // maintenance
    // : 
    // "Moderate"
    // medicinal
    // : 
    // false
    // origin
    // : 
    // ['Southeastern United States']
    // other_images
    // : 
    // "Upgrade Plan To Supreme For Access https://perenual.com/subscription-api-pricing. Im sorry"
    // other_name
    // : 
    // ['Southern Fir']
    // pest_susceptibility
    // : 
    // (4) ['Aphids', 'adelgids', '  Pest resistant', ' Disease resistant ']
    // pest_susceptibility_api
    // : 
    // "Coming Soon"
    // plant_anatomy
    // : 
    // (3) [{…}, {…}, {…}]
    // poisonous_to_humans
    // : 
    // 0
    // poisonous_to_pets
    // : 
    // 0
    // propagation
    // : 
    // (7) ['Seed Propagation', 'Seed Propagation', 'Seed Propagation', 'Cutting', 'Grafting Propagation', 'Layering Propagation', 'Tissue Culture']
    // pruning_count
    // : 
    // []
    // pruning_month
    // : 
    // (6) ['February', 'March', 'April', 'June', 'July', 'August']
    // salt_tolerant
    // : 
    // false
    // scientific_name
    // : 
    // ['Abies fraseri']
    // seeds
    // : 
    // 0
    // soil
    // : 
    // ['Well-drained']
    // sunlight
    // : 
    // (3) ['full sun', 'part shade', 'filtered shade']
    // thorny
    // : 
    // false
    // tropical
    // : 
    // false
    // type
    // : 
    // "tree"
    // volume_water_requirement
    // : 
    // []
    // watering
    // : 
    // "Frequent"
    // watering_general_benchmark
    // : 
    // {value: null, unit: 'days'}
    // watering_period
    // : 
    // null





   if(!plantData){
    return(
        <>
            <h1>
                Loading...
            </h1>
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
                    <section>
                        <h5>
                            Description: 
                        </h5>
                        <p>
                            {plantData.description}
                        </p>
                        <p>
                            Cycle: {plantData.cycle}
                        </p>
                        <p>
                            Watering: {plantData.watering}
                        </p>
                        <p>
                            Soil: {plantData.soil}
                        </p>
                        <p>
                            Propogation: {(plantData.propagation).map(propagate =>{
                                return(
                                    propagate + ' | '
                                )
                            })}
                        </p>
                        <p>
                            Sun: {(plantData.sunlight).map(sunlight =>{
                                return(
                                    sunlight + ' | '
                                )
                            })}
                        </p>              

                    </section>
            </body>
        </>
    );
}