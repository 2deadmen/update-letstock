import { useEffect,useState } from "react"
import React from 'react'
import Logger from "./Logger"
import './homepage.css'
import Gainloose from "./Gainloose"
import News from "./News"
import './Home.css'
import Premium from "./Premium"
import Banner from "./Banner"

const Home = () => {

const [seed, setseed] = useState()
useEffect(() => {
 setseed(Math.random())
}, [])


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scroll() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  let token=sessionStorage.getItem("token")
  return (
    <div id={seed} className="homebody">
  
   {!token?<Logger  />:null}
 
   <Banner id='top'/>
  
   <button  className="sttop btn mx-5" onClick={scroll} style={{float:"right"}} id='myBtn'>&#8593;	</button>
   <Premium/>
   
    <Gainloose/>
    <News/>
    </div>
  )
}

export default Home