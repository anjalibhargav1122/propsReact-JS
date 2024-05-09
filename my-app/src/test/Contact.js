import React, { useEffect, useState } from 'react'
import Header from './Header'

const Contact = ({e}) => {
    const [c, setc] = useState();

    useEffect(()=>{
        setc(1)
    },[])

  return (
    <div>
        <Header/>


<h1 className='text-center fw-bold mt-5'>{e} Contact Page</h1>
<div style={{display: c ==1 ?'block':'none'}}>
<form className='text-center mt-5'>
    <input className='w-50 pt-1 pb-1' type='text'/><br/>
    <input className='w-50 pt-1 pb-1 mt-2' type='number'/><br/>
    <input className='w-50 pt-1 pb-1 mt-2' type='email'/><br/>
    <input className='w-50 pt-1 pb-1 mt-2' type='password'/><br/>
    <button className='btn btn-success mt-4' onClick={()=>{setc(2)}}>Login</button>
</form>



</div>



<div style={{display: c ==2 ?'block':'none'}}>

<form className='text-center mt-5'>
  
    <input className='w-50 pt-1 pb-1 ' type='email'/><br/>
    <input className='w-50 pt-1 pb-1 mt-2' type='password'/><br/>
    <button className='btn btn-danger mt-4' onClick={()=>{setc(1)}}>Sign in</button>
</form>
</div>









    </div>
  )
}

export default Contact