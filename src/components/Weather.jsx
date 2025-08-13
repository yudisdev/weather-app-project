import React from 'react'
import clear_icon from '../assets/clear.png'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
  return (
    <div className='weather place-self-center p-[40px] rounded-lg bg-[linear-gradient(45deg,#2f4680,#500ae4)] flex flex-col items-center'>
        <div className='search-bar flex gap-6 items-center '>
            <input className='h-[50px] border-none outline-none rounded-[40px] px-4 text-[#626262] bg-[#ebfffc] text-[18px]' type="text" placeholder='Search'/>
            <img className='w-[50px] p-[15px] rounded-[50%] bg-[#ebfffc] cursor-pointer' src={search_icon} alt="" />
        </div>
        <img className='weather-icon w-[150px] my-[30px] mx-0' src={clear_icon} alt="" />
        <p className='temperature text-[#fff] text-[80px] leading-none'>16°c</p>
        <p className='location text-[#fff] text-[40px]'>London</p>
        <div className="weather-data w-[100%] mt-[40px] text-[#fff] flex justify-between">
          <div className="col flex items-start gap-[12px] text-[22px]">
            <img src={humidity_icon} alt="" />
            <div>
              <p>91 %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col flex items-start gap-[12px] text-[22px]">
            <img src={wind_icon} alt="" />
            <div>
              <p>3.6 km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather