import React, { useState } from 'react'
import './Signup.css'


function Signup() {
    const [data, setData] = useState({
        name:"",
        email:"",
        password :"",
        show: false
    })
    const submitHandler = (e)=>{
        e.preventDefault();
        setData({...data,show:true})
    }

    return (
    <div className='signup'>
        <form onSubmit={submitHandler}>
            <h1>SIGNUP</h1>
            <input type="text" placeholder='Enter the name' value={data.name} onChange={e=> setData({...data,name : e.target.value})}/>
            <input type="email" placeholder='Enter the Email' value={data.email}  onChange={e=> setData({...data,email : e.target.value})}/>
            <input type="password" placeholder='Enter the Password' value={data.password}  onChange={e=> setData({...data,password : e.target.value})}/>
            <button>Submit</button>
        </form>
        {data.show && <div>
            <h1>name: {data.name}</h1>
            <h1>email: {data.email}</h1>
            <h1>password: {data.password}</h1>
            </div>}
    </div>
  )
}

export default Signup