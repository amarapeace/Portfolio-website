import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";
import Test1 from '../../image/Test1.png'
import Test2 from '../../image/Test2.png'
import Test3 from '../../image/Test3.png'
import Test4 from '../../image/Test4.png'
import Test5 from '../../image/Test5.png'
import Test6 from '../../image/Test6.png'


const Testimonial = () => {

    const data = [
      {
        name: "Debby",
        position: "Product manager",
        des: "I like Amara's work and her commitment in giving out the best.",
        img: Test1,
      },
      {
        name: "Torrie",
        position: "UI/UX Designer",
        des: "Amara is always patient and ready to give you a great work.",
        img: Test2,
      },
      {
        name: "Tega",
        position: "ICT officer",
        des: "I like her way of relating to clients and making sure you are satisfied.",
        img: Test3,
      },
      {
        name: "Mistura",
        position: "Brand manager",
        des: "I enjoyed my time working together with her. Her energy is everything. ",
        img: Test4,
      },
      {
        name: "Rajeev",
        position: "Product designer",
        des: "Job well done, I'm definitely coming back with more jobs for you.",
        img: Test5,
      },
      {
        name: "Coded Libra",
        position: "Project manager",
        des: "She sure knows how to make a client very happy. I highly recommend.",
        img: Test6,
      },
    ];


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    


    
  return (
    <div className="container testimonial-section" id="testimonials">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
                <div className="content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="testimonial pics"
                    className="center-image"
                  />
                  <p className='name'>{item.name}</p>
                  <p>{item.des}</p>

                  <p className='position'>{item.position}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial