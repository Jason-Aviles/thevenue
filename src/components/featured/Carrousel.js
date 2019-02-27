import React from 'react';
import Slider from 'react-slick'
import img1 from '../../resources/images/slide_one.jpg'
import img2 from '../../resources/images/slide_two.jpg'
import img3 from '../../resources/images/slide_three.jpg'


const Carrousel = () => {
    const settings ={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }
    return (
        <div
        className='carrousel_wrapper'
        style={{
           
            height:`${window.innerHeight}px`,
            overflow:'hidden'
        }}
        >
        <Slider {...settings}>
            <div>
                <div className='carrousel_image'
                style={{
                    background:`url(${img1})`,
                    height:`${window.innerHeight}px`
                }}>

                </div>
            </div>

            <div>
                <div className='carrousel_image'
                style={{
                    background:`url(${img2})`,
                    height:`${window.innerHeight}px`
                }}>

                </div>
            </div>

            <div>
                <div className='carrousel_image'
                style={{
                    background:`url(${img3})`,
                    height:`${window.innerHeight}px`
                }}>

                </div>
            </div>
            
        </Slider>
            
        </div>
    );
};




export default  Carrousel;
