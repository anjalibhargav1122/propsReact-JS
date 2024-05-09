import React from 'react'
import Header from './Header'


const Home = ({c}) => {
  return (
    <div>
     <h1 className='text-center fw-bold mt-5'>{c} Home Page</h1>
        <Header/>
   
    </div>
  )
}

export default Home