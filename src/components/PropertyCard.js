import React from 'react'
import '../styles/main.css'
import {  Link } from "react-router-dom"
import {ShareModule} from './ShareModule'


const PropertyCard =React.forwardRef((props, ref)=>{


    return (

    
    <div className=' flex bg-white rounded-lg p-2 shadow-xl ml-2 '>
     <div className='flex flex-col'>  
    <Link className='text-gray-600 text-sm font-thin hover:underline ' to={`/property/${props.propertyData.property.id}`}>{props.propertyData.property.propertyType}</Link>
    <img alt='property' className=' rounded-sm w-58' src={props.propertyData.property.primaryImageUrl}></img>
    </div>
    <div className='ml-3 flex flex-col'>
    
    <p className='text-sm text-gray-400'>
         <span className=' font-semibol'>{props.propertyData.property.address.city}</span>
         <span> | </span>
         <span className=' font-semibol'>{props.propertyData.property.address.state}</span>
         <span className=' block font-semibol'>{props.propertyData.property.address.addressLine1}</span>
         
    </p>

    <p className='text-sm text-blue-400'>
        $ <span className=' font-semibold text-blue-400'>{props.propertyData.price}</span>
    </p>

    <ShareModule/>
    </div>
    
    </div>
    
    
    
    )
    
    })
    
    export default PropertyCard