
import React from 'react'
import pic from './logo-r.png'
import './About.css'

const About = () => {
  return (
    <div className='container my-3'>
          <img style={{float:"right"}} className='aboutimg' src={pic} width={600} height={200} alt="" />

      <h1>About Us</h1>
     <h5 className='my-2'>Data source --- www.alphavantage.co</h5>
     
     <br />
     <span>Made by <a href="https://github.com/2deadmen">Kartik V Hegde</a> and <a href="https://github.com/AnishKGouda">Anish K Gouda</a></span>
    </div>
  ) 
}

export default About