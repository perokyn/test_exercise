import React,{useEffect,useState} from 'react'
import postStore from "../stores/postStore";
import { getAproperty } from "../actions/postActions";




const PropertyPage=({match})=>{
const id=match.params.id
    const[content, setContent]=useState('')
   // const[comment, addComment]=useState(false)


    useEffect(()=>{
    
        postStore.addChangeListener(onChange)
    
      getAproperty(id)

    
          return () => postStore.removeChangeListener(onChange); //this is used to remove the change listener once the user leaved the page
    
    
    },[])
    
    
    console.log("COntent: juuj",content)
    
    function onChange() {
        setContent(postStore.getAproperty(id)); //remember getPosts method in postStore returns _posts which is from the postActions.js (see the import at page top)
        console.log("SIGNALE BY ADD POST RECEIVED")
        
    }


return(


    <div>Property Page
        
{content? 

<div>{content.property.address.addressLine1}

<img alt='property' className=' rounded-sm w-full' src={content.property.primaryImageUrl}></img>


</div>

:<div>No data</div>}
        </div>
)


}

export default PropertyPage