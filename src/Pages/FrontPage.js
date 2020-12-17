import React, {useState, useEffect} from 'react'
import PropertyList from '../components/PorpertyList'
import postStore from "../stores/postStore";
import { getProperties } from "../actions/postActions";




const FrontPage=()=>{



    const [properties, setProperties] = useState(postStore.getProperties());

    useEffect(() => {
        console.log('POST FROM  postStore',postStore.getProperties().length)
        postStore.addChangeListener(onChange);

        if (postStore.getProperties().length === 0) getProperties();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setProperties(postStore.getProperties());
    }



return(
<>
<div> Front Page</div>
<PropertyList properties={properties}/>

</>

)
}

export default FrontPage