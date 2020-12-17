import React from 'react'
import '../styles/main.css'
import msg from'../Assets/msg.jpg'
import leavemsg from'../Assets/leavemsg.jpg'

const UserCard =React.forwardRef((props, ref)=>{

console.log("USERDAT", props.userData)
return (
<div >

<div className='bg-white rounded-lg p-2 shadow-xl w-20'>
<div className=' bg-green-400 rounded-full p-1 w-2 h-2 float-right'></div>
<img alt='profile' className=' rounded-full w-10' src={props.profile}></img>
<p className='text-gray-600 text-sm font-thin hover:underline '>{props.userData.firstName} {props.userData.lastName}</p>

<div className='flex justify-around '>
<img className='w-6 h-6 rounded-sm border-2 hover:border-gray-600' alt='msg'src={msg}></img>
<img className='w-6 h-6 rounded-sm border-2 hover:border-gray-600' alt='msg'src={leavemsg}></img>
</div>
</div>

</div>

)

})

export default UserCard