//================= IMPORTS ===============
import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function speciesPage(props){

    const plantId = props.match.params.id;
    console.log(plantId)
    // const location = useLocation();
    // const inheritedData = location.state

    // console.log(inheritedData.plantId)
    // const plantDetailsUrl=`https://perenual.com/api/species/details/${id}?key=sk-NXut64b9f2491050e1633`



    // Plant Details url - produces the specific info for a particular plant
    // Need ID and Key for url to get info


    return(
        <>
            <header>
                {plantId}
            </header>
            <body>
                
            </body>

        </>
    );
}