import React from 'react'
import {
    Link
    ,useNavigate,
    useLocation
    } from "react-router-dom";
    import './style.css'
    import pic from './footer.png'

const Footer = () => {
    
  return (
    <div> <footer style={{'margin-top':'30px'}}  class="footer ">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://github.com/2deadmen"><i class="fab fa-github"></i></a>
                    <a href="https://github.com/AnishKGouda"><i class="fab fa-github"></i></a>

                </div>
            </div>
            <div class="footer-col">
             <div class="img1   ">
                     <img src={pic} alt='' />
             </div>
         </div>
        </div>
    </div>
  <div style={{'padding-top':'10px'}} class="footer-bottom">
     <p>Copyright Reserved &copy; 2023 </p>
  </div>
  
</footer></div>
  )
}

export default Footer