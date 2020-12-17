import React,{useState} from 'react'
//import axios from 'axios'



const Login = () => {

const[registration, setRegistration]=useState(false)
const[username, setUsername    ]=useState('')
const[email, setEmail]=useState('')
const[password, setPassword]=useState('')
const[path, setPath]=useState('/api/auth/login')
const[message, setMessage]=useState('')
const[login, setLogin]=useState(false)



const Register=()=>{
    setMessage('')  //remove previous messages form server if any
    setRegistration(!registration)
  registration? setPath('/api/auth/login'):setPath('/api/auth/register')
}


const onSubmit= e =>{
    
 e.preventDefault()
 if(password ===''|| email===''){alert('please fill values')
return
}
console.log("Submitted Login with path: ", path)


const userData={
    username,
    email,
    password
}

/*axios
.post(path, userData)
.then(res => {
console.log("SERVER response", res.data.info)
checkLogin(res.data.case)//provide flash messages based on server response (othervise read after how to use req,flash)

})
.catch(err =>{

console.log("Error", err)
console.log(err.response.data.errors)
setMessage(err.response.data.errors)
//alert('wrong password')
})*/



}



function checkLogin(resp){


    if(resp==='LoginOK'){
    setLogin(true)
    setMessage('Login successful')

}

setEmail('')
setPassword('')
    
}


    return (

        
        

        <div className=' absolute inset-x-1/2 mt-20 z-10 flex flex-col items-center  max-w-sm p-3 '>
         
         { message===''? null: 
            <div className=' absolute bg-green-300 p-3 rounded-xl text-left '>
                
                <div className='w-64'>Info: {message} !

                {login?  <p className='text-black underline ' >Close this window</p>: 
                <p className='text-black underline ' onClick={()=>Register()}>Please register</p>
                
                }
                
                </div>
                </div>}
   
           <div className='bg-gray-300 p-10 rounded-xl text-center'>
               
            <label className='text-gray-800 font-semibold text-lg'> Login</label>
            {registration?<p className='m-3'>
                <label className='text-gray-700 font-semibold text-sm'> User Name</label>
                <input type='text'  value={username} onChange={e =>setUsername(e.target.value)}></input>

            </p>
                    :null}
            
            <p className='m-3'>
    <label className='text-gray-700 font-semibold text-sm'> {registration? 'Email' : 'User Name / Email'}</label>
                <input type='text'  value={email} onChange={e =>setEmail(e.target.value)}></input>

            </p>
            <p className='ml-3 mb-3'>
                <label className='text-gray-700 font-semibold text-sm'> Password</label>
                <input type='text'  value={password} onChange={e =>setPassword(e.target.value)}></input>

            </p>

            <p>

<button className='relative inline-flex flex-wrap  items-center  justify-center
       px-5 py-2 border border-gray-300 
        text-sm leading-5 font-semibold rounded-md text-gray-700 bg-green-400 
        hover:text-gray-500 focus:outline-none focus:shadow-outline-green 
        focus:border-blue-400 active:bg-gray-50 active:text-gray-800' type='submit'
        onClick={(e)=>{onSubmit(e)}}>OK</button>

        </p>

       <p onClick={()=>Register()}>Or Register</p>
        </div>

        </div>
        
    )

}

export default Login
