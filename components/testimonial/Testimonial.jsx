"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: false, // Ensure this is "arrows" not "arrow"
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1, // Set this to 1 for smoother continuous slide
    autoplay: true,
    autoplaySpeed: 3000, // Speed in milliseconds for autoplay
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "pankaj.jpeg",
      desc: `I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Pankaj",
      rating: "5.0",
    },
    {
      imageName: "mona.jpeg",
      desc: `I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Mona",
      rating: "5.0",
    },
    {
      imageName: "rajan.jpeg",
      desc: `I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Rajan",
      rating: "4.8",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div className="testmonial-box media" key={i}>
          <div className="avatar">
            <Image
              width={638}
              height={690}
              style={{ height: "fit-content" }}
              src={`/img/${val.imageName}`}
              alt="review comments"
            />
          </div>
          {/* End avatar */}
          <div className="testmonial-text media-body">
            <p>{val.desc}</p>
            <div className="testmonial-info">
              <h6>{val.reviewerName}</h6>
              <div className="rating-value">
                {/* <i className="ti-star"></i> */}
                {/* <span>{val.rating}</span> */}
              </div>
            </div>
          </div>
          {/* End testimonial-text */}
        </div>
      ))}
    </Slider>
  );
}
