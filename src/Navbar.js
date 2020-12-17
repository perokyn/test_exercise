import React, {useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Login from './components/Login'



const NavBar=()=>{

const[login, setLogin]=useState(false)

const openLogin=(e)=>{

setLogin(!login)
    
}
return(
<>

<div className=' grid grid-cols-3 gap-2  bg-gray-300 p-2 text-sm font-semibold text-gray-600' >
<div>Wlcome to the blog</div>
<div className='bg-green-300 justify-self-end'>Name</div>
<div className='ml-auto pl-2 hover:underline hover:text-black' onClick={(e)=>{openLogin(e)}}> login</div>
</div>
{login? <Login/> : null}
 <nav className='flex justify-around bg-gray-500 '>
    
      <li className='inline-block '>
        <Link className='bg-green-200' to="/">Home</Link>
      </li>
      <li className='inline-block'>
        <Link className='bg-green-200' to="/post">Post</Link>
      </li>
    
  </nav>
 
</>
)
}

export default NavBar