import React from 'react'
import './Product.scss'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from '../../assets/22721311.png';
import 'swiper/css';
import 'swiper/css/pagination';

const ItemProductArray = [
  {
    id: 1,
    avatar: product1,
    name: 'Smartphone',
  },

  {
    id: 2,
    avatar: product1,
    name: 'Noutbook',
  },

  {
    id: 3,
    avatar: product1,
    name: 'IPad',
  },

  {
    id: 4,
    avatar: product1,
    name: 'Light',
  },

  {
    id: 5,
    avatar: product1,
    name: 'Power Bank',
  },

  {
    id: 6,
    avatar: product1,
    name: 'Personal Computer',
  },

  {
    id: 7,
    avatar: product1,
    name: 'Spy Camera',
  },

  {
    id: 8,
    avatar: product1,
    name: 'Samart Watch',
  },

  {
    id: 9,
    avatar: product1,
    name: 'Play Station',
  },

  {
    id: 10,
    avatar: product1,
    name: 'Headphones',
  },

  {
    id: 11,
    avatar: product1,
    name: 'Speaker',
  },

  {
    id: 12,
    avatar: product1,
    name: 'Air',
  },
];

const ItemProduct = () => {
  return (
    <section className='container itemProduct' id='itemProduct'>
      <div className='sweaperContainerItem'>
        <h2>Eng Yahshi Tanlov</h2>
        <Swiper       
          className="container"
          modules={[Autoplay]}
          spaceBetween={45}
          slidesPerView={7}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}>
          

          {ItemProductArray.map((reviewer) => (
            <SwiperSlide className='itemProduct' key={reviewer.id}>
              <div className='slideImg'>
                <img src={product1} alt="Iphone" />   
              </div> 
              <h5>{reviewer.name}</h5>   
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  )
}

export default ItemProduct