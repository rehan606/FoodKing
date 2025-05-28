// components/FeedbackSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
    {
        name: "Christ Deo",
        role: "CEO A4Tech Ltd.",
        img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape29.png",
        rating: 5,
        message:
        "Food Khan is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback",
        productImg: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape28.png",
    },
    {
        name: "Robina Deo",
        role: "CEO A4Tech Ltd.",
        img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape27.png",
        rating: 5,
        message:
        "Food Khan is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback",
        productImg: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape30.png",
    },
];

const FeedbackSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            },
        },
        {
            breakpoint: 320,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className="py-16 bg-[#fffceb]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 text-center mb-10">
                Happy <span className="text-green-800">Feedback</span>
            </h2>
            <div className="container mx-auto px-4 max-w-6xl">
                <Slider {...settings}>
                {feedbacks.map((fb, index) => (
                    
                    <div key={index} className="bg-white rounded-xl p-6 md:p-10 shadow-md flex flex-col md:flex-row items-center gap-5">
                        <div className="flex justify-between  items-center">
                            <img src={fb.img} alt={fb.name} className="w-20 h-20 rounded-full border-4 border-green-600"/>
                            <div >
                                <h3 className="text-xl md:text-4xl font-sans font-bold text-gray-800">{fb.name}</h3>
                                <div className="flex mt-1 text-orange-400">
                                    {"★".repeat(fb.rating)}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{fb.role}</p>
                                        
                            <span className="text-3xl md:text-8xl text-gray-400">”</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="mt-4 text-gray-700">{fb.message}</p>
                            <img src={fb.productImg} alt="Product" className="w-16 md:w-20 h-auto mt-4 md:mt-0"/>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
};

export default FeedbackSlider;
