import React from 'react'
import UserCard from './UserCard'
import PeopertyCard from './PropertyCard'
import user from '../Assets/user.jpg'

const PropertyList=(props)=>{





return(

<>

{props.properties.map((property, key)=>(

<div key={key} className=' flex flex-row bg-gray-300  p-3'>
<UserCard profile={user} userData={property.property.primaryOwner.user}/>
<PeopertyCard propertyData={property}/>


</div>

))}
    
   </>


)

}

export default PropertyList