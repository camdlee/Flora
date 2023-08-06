//================= IMPORTS ===============
import React from 'react'
import { useState, useEffect } from 'react';


export default function speciesPage({key}){

    const plantId = {key}
    const plantDetailsUrl=`https://perenual.com/api/species/details/${key}?key=sk-NXut64b9f2491050e1633`

    console.log({key})

    // Plant Details url - produces the specific info for a particular plant
    // Need ID and Key for url to get info


    return(
        <>
            <header>

            </header>
            <body>
                
            </body>

        </>
    );
}