import React from 'react';
import './Reactpro.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller,  EffectCube, EffectFade, EffectCards, EffectCoverflow} from 'swiper/modules';
import frontendweb from '../../images/ecommercereact.png';
import calculator from '../../images/calculator.png';
import calender from '../../images/calender.png';
import uiuxportfolio from '../../images/uiuxportfolio.png';

import 'swiper/css';

import 'swiper/css/bundle';

function Reactpro() {
   

  return (
    <>
      <div className='reactpro-container'>
        <div className='reactpro-header'>
          <h1>React Projects</h1>
          <p>Explore my collection of React projects showcasing my proficiency in creating dynamic and interactive web applications.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Controller, EffectCube,EffectFade,EffectCards,EffectCoverflow]}
          effect="fade"
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          controller
       
        >
          <SwiperSlide>
            <a href="https://panchali-ecommerce-site.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={frontendweb} alt='projects-cards' className='reactpro-project-img'/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://panchaliupendra.github.io/calculator/" target="_blank" rel="noopener noreferrer">
            <img src={calculator} alt='projects-cards' className='reactpro-project-img'/>
            </a>
        </SwiperSlide>
          <SwiperSlide>
            <a href="https://panchaliupendra.github.io/WorkWithCalendar/" target="_blank" rel="noopener noreferrer">
            <img src={calender} alt='projects-cards' className='reactpro-project-img'/>
            </a>
        </SwiperSlide>
          <SwiperSlide>
          <a href="https://panchalidivya.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={uiuxportfolio} alt='projects-cards' className='reactpro-project-img'/>
          </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Reactpro;
