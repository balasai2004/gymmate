import React from 'react'
import './pricing.css'
import gym from './image/gym.png'
import gym2 from './image/gym2.jpg'
import gym3 from './image/gym3.jpg'
import gym4 from './image/gym4.jpg'
import back11 from './image/back12.png'


const Pricing = () => {
  return (

    <div className='price'>


      <div className="banner">

        <h2>Pricing</h2>
      </div>
      <section className="b2">
        <img className='imgxo' src={gym} alt="" />
        <div className="content1">
          <h4 className="chart">
            PRICING CHART
          </h4>
          <h2>Exclusive Pricing Plan</h2>
          <p>Gym at a palce where you can make shape of your body with a very reasonable price and good mentoring .This place make your hardwork to mould your body into a exact output </p>
        </div>
      </section>
      <div className="b3">
        <div className="back1">
          <img src={back11} alt="" />
        </div>


        <div className="img1">
          <img className='imgg1' src={gym2} alt="" />
          <div className="price1">

            <div className="price11">
              <h3>Beginners</h3>
              <sup>$</sup><span>39</span><sub>p/m</sub>
              <p>Free hand</p>
              <p>Gym fitness</p>
              <p>Weight loss</p>
              <p>Personal trainer</p>
              <p>Cycling</p>
              <div className="space"></div>
              <button className='but'>Purchase Now 🡢 </button>
            </div>
          </div>
        </div>
        <div className="img2">
          <img src={gym3} alt="" />
          <div className="price1">

            <div className="price11">
              <h3>Intermediates</h3>
              <sup>$</sup><span>65</span><sub>p/m</sub>
              <p>Free hand</p>
              <p>Gym fitness</p>
              <p>Weight loss</p>
              <p>Personal trainer</p>
              <p>Cycling</p>
              <div className="space"></div>
              <button className='but'>Purchase Now 🡢 </button>
            </div>
          </div>
        </div>
        <div className="img3">
          <img src={gym4} alt="" />
          <div className="price1">

            <div className="price11">
              <h3>Pro Level</h3>
              <sup>$</sup><span>100</span><sub>p/m</sub>
              <p>Free hand</p>
              <p>Gym fitness</p>
              <p>Weight loss</p>
              <p>Personal trainer</p>
              <p>Cycling</p>
              <div className="space"></div>
              <button className='but'>Purchase Now 🡢 </button>
            </div>
          </div>
        </div>
      </div>
       <div className="footer">
        <div className="logo1">
      
        </div>
        <div className="logo2">
           <div className="class">
               <h2>Our Classes</h2>
               <p>Aerobics <br />Running <br /> Weeight Lifting <br /> Weight Loss <br /> Body Shaping</p>
           </div>
           <div className="timings">
            <h2>Timings</h2>
            <h3>Mornings</h3>
            <p>6:00am to 7:00am <br />7:00am to 8:00am <br />8:00am to 9:00am</p>
            <h3>Evenings</h3>
            <p>5:00pm to 6:00pm <br />6:00pm to 7:00pm <br />7:00pm to 8:00pm </p>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Pricing
