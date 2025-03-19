import React from 'react'
import image from '../image/image.png';
import '../App.css'
import SearchFlight from './SearchFlight';
import About from './About';

function Home() {
    
  return (
    <header class="section__container header__container">
      <h1 class="section__header p-4 ">Find And Book<br />A Great Experience</h1>
      <img src={image} alt="header" />
    </header>
       
  )
}
<About/>
export default Home