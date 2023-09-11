import React from 'react'
import { useState, useEffect } from 'react';
import ImageUpload from '../components/ImageUpload';
import AddPlantForm from '../components/AddPlantForm';

export default function TestingPage() {

    return(
        <>
        <div className='home-container'>
            <AddPlantForm/>
            <ImageUpload/>
        </div>
        </>
    )
}