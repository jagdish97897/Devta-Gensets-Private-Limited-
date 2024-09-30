

import React from "react";
import crausal1 from "../resource/DevtaGensets2.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";

import service1 from "../resource/service1.png";
import service2 from "../resource/service2.png";
import service3 from "../resource/service3.png";
import service4 from "../resource/service4.png";
import service5 from "../resource/service5.png";
import service6 from "../resource/service6.png";
import service7 from "../resource/service7.png";
import service8 from "../resource/service8.png";
import service9 from "../resource/service9.png";
import service10 from "../resource/service10.png";
import service11 from "../resource/service11.png";
import service12 from "../resource/service12.png";
import service13 from "../resource/service13.png";





import pusparaj from "../resource/pusparaj.png";


import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";


import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
<div className="relative h-screen  bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${crausal1})` }}>
  
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">
      <div className=" uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      {/* <div className="">Devta Gensets Private Limited </div> */}
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4"
             style={{ textShadow: "2px 2px 4px blue, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>Devta Gensets Private Limited </h1>
          <p className="text-lg md:text-xl mb-8"
          style={{ textShadow: "2px 2px 4px blue, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>
  Since 1991, Devta Gensets has been a trusted leader in the power solutions industry, offering reliable generator rentals and sales of top brands like Mahindra and Sudhir. With over three decades of experience, we provide customized power solutions for industrial, commercial, and residential needs, ensuring uninterrupted energy for your operations. Our commitment to excellence, quality service, and customer satisfaction makes us the preferred choice for dependable power.
          </p>
          <Link to="/" className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition duration-200">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>



{/* Key benefits section */}
<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
    How can we help you
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
  Discover how our expertise and services ensure the reliable power you need to keep your operations running smoothly.
  </div>
  
  {/* Key Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
    {keyBenefits.map((benefits, index) => {
      return <BenefitCard key={index} passed={benefits} />;
    })}
  </div>
</div>


{/* Key benefits section */}
<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
Our Services
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
  Explore our range of power solutions designed to meet your unique needs. From industrial generators to tailored energy services, discover how we can power your success.
  </div>




<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
  {/* Card 1 */}
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service2} 
      alt="Liquid Transportation" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">400 kVA Mahindra Powerol Diesel Generator</h4>
    <p className="text-gray-600">The 400 kVA Mahindra Powerol Diesel Generator is a robust and reliable power solution designed for heavy-duty applications. Known for its fuel efficiency, low noise operation, and superior performance, this generator is ideal for industrial, commercial, and emergency power needs. With advanced control panels and durable construction, it ensures a consistent and uninterrupted power supply, making it a preferred choice for businesses that demand reliability and efficiency.</p>
  </div>


  {/* Card 3 */}
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service3} 
      alt="Contract Logistics" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">1500 kVA Cummins Diesel Generator</h4>
    <p className="text-gray-600">The 1500 kVA Cummins Diesel Generator is a powerful, high-capacity generator engineered to deliver reliable and efficient power for large-scale industrial and commercial applications. Renowned for its exceptional performance, durability, and advanced engine technology, this generator provides a stable and continuous power supply, even under the most demanding conditions. Its robust design, coupled with easy-to-use control systems, ensures optimal functionality and reduced downtime, making it the ideal solution for critical operations that require dependable power.</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service13} 
      alt="Warehouse & Distribution" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">
    500 kVA Cummins Diesel Generator</h4>
    <p className="text-gray-600">The 500 kVA Cummins Diesel Generator is a dependable and efficient power solution ideal for medium to large-scale operations. Known for its robust performance, superior fuel efficiency, and low maintenance, this generator is perfect for commercial, industrial, and backup power needs. With advanced control panels and a durable build, it provides a steady and reliable power supply, ensuring your operations run smoothly without interruptions. Its reputation for reliability makes it a trusted choice for businesses seeking consistent and high-quality power.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service4} 
      alt="Warehouse & Distribution" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">Kirloskar Generator</h4>
    <p className="text-gray-600">Kirloskar Generators are renowned for their reliability, efficiency, and rugged performance across various power needs. Designed for industrial, commercial, and residential applications, these generators offer a wide range of power outputs, making them suitable for diverse requirements. With advanced engineering, fuel efficiency, and low noise levels, Kirloskar Generators provide dependable and continuous power, ensuring smooth and uninterrupted operations. Their robust construction and easy maintenance make them a preferred choice for those seeking durable and cost-effective power solutions.</p>
  </div>


  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service6} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">750 kVA Diesel Generator </h4>
    <p className="text-gray-600">The 750 kVA Diesel Generator is a high-capacity power solution ideal for large-scale industrial and commercial applications. Known for its superior performance, fuel efficiency, and robust construction, this generator provides reliable and continuous power, even in demanding environments. Equipped with advanced control systems and designed for easy maintenance, it ensures optimal functionality and minimal downtime. Perfect for critical operations, this generator delivers consistent, high-quality power to keep your business running smoothly.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service7} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">250 kVA Diesel Generator</h4>
    <p className="text-gray-600">The 250 kVA Diesel Generator is a versatile and reliable power source designed to meet the demands of medium-sized commercial, industrial, and backup power needs. With excellent fuel efficiency, robust performance, and advanced control features, this generator ensures a stable and continuous power supply. Its durable build and low maintenance requirements make it an ideal choice for businesses seeking dependable and cost-effective energy solutions for smooth and uninterrupted operations.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service8} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">810 kVA Sudhir Silent Diesel Generator </h4>
    <p className="text-gray-600">The 810 kVA Sudhir Silent Diesel Generator is a high-performance power solution designed for applications requiring quiet operation without compromising reliability. Engineered with advanced soundproofing technology, it minimizes noise levels, making it ideal for residential, commercial, and industrial use in noise-sensitive environments. This generator offers excellent fuel efficiency, robust performance, and advanced control features, ensuring a stable and uninterrupted power supply. Its durable construction and low maintenance needs make it a trusted choice for businesses seeking efficient and discreet power solutions.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service9} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">125 kVA Mahindra Powerol Gas Generator</h4>
    <p className="text-gray-600">The 125 kVA Mahindra Powerol Gas Generator is a reliable and efficient power solution ideal for both commercial and industrial applications. Designed for low emissions and fuel efficiency, this generator operates quietly, making it suitable for noise-sensitive environments. With advanced technology and a robust build, it provides a consistent and stable power supply while ensuring easy maintenance and operation. Its eco-friendly performance combined with Mahindra's reputation for durability makes it a preferred choice for businesses seeking sustainable and effective energy solutions</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service10} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">625 KVA Mahindra Powerol Diesel Generatoron</h4>
    <p className="text-gray-600">The 625 kVA Mahindra Powerol Diesel Generator is a powerful and reliable energy solution designed for industrial and commercial applications. Engineered for optimal performance and efficiency, this generator ensures a consistent power supply in demanding environments. Its robust construction, advanced control systems, and excellent fuel efficiency make it an ideal choice for businesses that require uninterrupted power. With low maintenance needs and a reputation for durability, the 625 kVA Mahindra Powerol Diesel Generator is perfect for those seeking dependable and high-quality power solutions.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={service11} 
      alt="Specialized Transport" 
      className="w-full h-40 object-cover mb-4 rounded-md sm:h-32 md:h-40 lg:h-48"
    />
    <h4 className="font-bold mb-2">125 kva to 2500 kva</h4>
    <p className="text-gray-600">All Services are available</p>
  </div>
  
</div>

{/* Explore More Button */}
<div className="flex justify-center py-6">
  <Link 
    to="/" 
    className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-400 transition duration-200"
  >
    Explore More
  </Link>
</div> 

</div>



<div className="flex flex-col min-h-screen w-full justify-center items-center py-12 px-4 ">
  {/* Vision Section */}
  <div className="text-center mb-12">
    {/* Heading */}
    <h1 className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
   Vision
  </h1>
    {/* Subheading Text */}
    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
      To empower communities with dependable and innovative power solutions, ensuring every individual and business has access to reliable energy that fuels their ambitions and dreams.
    </p>
  </div>
</div>

<div className="flex flex-col min-h-screen w-full justify-center items-center py-12 px-4">
  {/* Mission Section */}
  <div className="text-center mb-12">
    {/* Heading */}
    <h1 className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
  Mission
  </h1>

    {/* Subheading Text */}
    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
      At Devta Gensets Private Limited, our mission is to transform lives and support progress by providing high-quality, efficient generators. We are dedicated to delivering exceptional service and fostering long-term relationships, driven by a commitment to excellence and a passion for enhancing the well-being of society through reliable power solutions.
    </p>
  </div>
</div>




<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
 Our Customers
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>


<div className="mt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <img src={crausal1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
  </div>
</div>

  

</div>

<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
 "About Devta Gensets Private Limited"
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>


<div className="mt-4">
    <div className="flex justify-center mb-6">
        <img
          src={pusparaj}
          alt="Mr. Purushottam P Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">Mr. Purushottam P Singhal</h3>
        <p className="text-gray-500 text-lg mb-4">CEO</p>
        
      </div>
   

</div>
  

</div>

<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
Meet Our Leadership
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>


  <div className="mt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div>
      <img src={pusparaj} alt="Gallery Image 1" className="w-full h-80 object-cover" />
      <p className="text-center mt-2 font-bold">Mr. Purushottam P Singhal</p>
      <p className="text-center mt-2">Founder</p>
    </div>
    <div>
      <img src={pusparaj} alt="Gallery Image 2" className="w-full h-80 object-cover" />
      <p className="text-center mt-2 font-bold">Mr. Purushottam P Singhal</p>
      <p className="text-center mt-2">Director OPS</p>
    </div>
    <div>
      <img src={pusparaj} alt="Gallery Image 3" className="w-full h-80 object-cover" />
      <p className="text-center mt-2 font-bold">Mr. Purushottam P Singhal </p>
      <p className="text-center mt-2">Director HR</p>
    </div>
  </div>
</div>


</div>

      <BusinessBook />
    </div>
  );
};









// import React from "react";
// import wave from "../resource/wave_final.png";
// import { useState, useEffect,useRef  } from "react";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import bikeleft from "../resource/bike_left.jpeg";
// import bikeright from "../resource/bike_right.jpeg";
// import biketop from "../resource/bike_top.jpeg";
// import news from "../resource/news_clipping.png";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from "../resource/bike_main.png";
// import heroImg from "../resource/homehero.png";
// import Slider from "react-slick";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoChevronForwardCircleSharp } from "react-icons/io5";

// import { IoChevronBackCircle } from "react-icons/io5";

// export const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const goToPreviousVideo = () => {
//     if (currentVideoIndex === 1) {
//       video2Ref.current.pause();
//     } else {
//       video1Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const goToNextVideo = () => {
//     if (currentVideoIndex === 0) {
//       video1Ref.current.pause();
//     } else {
//       video2Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.min(1, prevIndex + 1));
//   };




//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? posts.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === posts.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWRQM0dndmFLSFNHTGhxUXpyUHhIUTFZAanRkcndmN1pzSll0M3RteXVaUWNMVW1KU3NVblJmdXYzYWM3QU40TnkzTDA5clMxbjQ3bXYwTGpwMFFvVWdndVF0NHFkQURZAX0lNM2dURlhKeDJJcklTdEZAvMmU5SUkZD`
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setPosts(data.data);
//         } else console.log("failed to fetch");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//     console.log(posts);
//   }, []);

//   useEffect(() => {
//     const divElement = document.getElementById("custom-slider");
//     if (divElement) {
//       divElement.style.display = "flex";
//       divElement.style.flexDirection = "row"; // Optional: Set flex direction to row
//     }
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="w-screen  overflow-hidden  min-[320px]:w-full ">
//       {/* Hero section */}
//       {/* <div className="hero min-[320px]:w-full min-[320px]:scale-[0.25] sm:scale-[1]  flex flex-col sm:h-screen justify-center items-center" >
//       <h1 className="text-4xl font-extrabold absolute top-32 font-serif text-center z-10 min-[320px]:text-4xl min-[320px]:top-5" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
//          <img
//           src={bike5}
//           className="z-40  lg:postion-relative lg:left-[270px] hover:lg:scale-[1.2] md:pt-[50px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[20%] scale-75 hover:scale-100 transition-all duration-500 min-[320px]:[5%]    "
//         />
//          <div className=" h-full w-full  flex flex-col justify-center items-center sm:absolute sm:scale-[0.47] md:absolute md:scale-[0.55] lg:absolute lg:scale-[1]">
//             <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
//            <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
//            <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "3px",
//             WebkitTextStrokeColor: "green",
//             }} >INNOVATE</h1>
//            <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
//            <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
//          </div>
//       </div> */}
//       <div className="w-screen h-full flex flex-col items-center justify-center">
//         <img src={heroImg} className="w-screen h-screen" loading="lazy" />
//         <img src={bike5} className="absolute" />
//       </div>
//       {/* About Us */}
//       <div className="about-us w-screen  flex flex-col mb-10 justify-center relative items-center   z-10 ">
//         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
//         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
//           <div className="text-4xl font-bold text-center">About us </div>
//           <div className="w-full text-center  sm:text-2xl min-[320px]:text-lg min-[320px]:leading-6">
//             KGV is a smart e-mobility solution provider that aims to cater to
//             the society as it reduces the immense burden on the middle and lower
//             segment of the community by reducing the cost of commuting by more
//             than 90%.{" "}
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div>
//       {/* Key benefits sections */}
//       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#56e422c4]  relative z-10 p-5 md:h-100 ">
//         <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
//           Key Benefits
//         </div>
//         <div className=" flex flex-col justify-start h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
//           {keyBenefits.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* Vision and mission */}
//       <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
//         <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
//           <div className="text-2xl font-bold uppercase mt-2 text-center">
//             {" "}
//             Vision{" "}
//           </div>

//           <div>
//             {" "}
//             We started from the bike and we’ll make its delivery shortly to all
//             the commuters worldwide.
//           </div>
//           <div>
//             Our team of engineering excellence is also working on bringing up
//             the system to each and every mode of transportation including{" "}
//             <span className="font-semibold">
//               3-wheelers, cars, LMVs, LCVs, and even HCVs.
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[90%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
//           <div className="text-2xl font-bold uppercase mt-5 text-center">
//             {" "}
//             Mission{" "}
//           </div>
//           <div>
//             To empower every common man in the world to save his/her hard earned
//             moneyspent on fossil fuels
//           </div>
//           <div>
//             To save mother Earth from air and noise pollutionas well as a green
//             and cleaner environment for saving life and humanity
//           </div>
//           <div>
//             To ensure trouble free and tension free drive to each and every
//             rider reducing the anxiety of being stuckanywhere in the middle of
//             his/her journey
//           </div>
//           <div>
//             To reduce the traveling cost of companies, corporate and enterprizes
//             by more than 90% and add to their profits
//           </div>
//           <div>
//             Our plug-in hybrid was designed to get to the battery fit our and
//             can be charged inside the home
//           </div>
//         </div>
//       </div>
//       {/* photo gallery */}
//       <div className="w-full lg:h-screen  bg-black relative z-10 pb-7 ">
//         <div className="flex flex-col justify-evenly  max-w-[1204px] mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             #KGVPhotoWall{" "}
//           </div>
//           <div className="w-full h-1/2 flex justify-evenly items-start gap-10 min-[320px]:flex-col sm:flex-row px-5">
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeleft}
//                 className=" w-full  mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="  w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeright}
//                 className=" w-full   mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={biketop}
//                 className=" w-full  mt-1  rounded-md  hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* social media gallery */}
//       <div className="w-full h-screen  bg-black relative z-10 pb-7 mt-7">
//         <div className="flex flex-col justify-evenly items-center gap-3 mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             Social Media Gallery{" "}
//           </div>
//           <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//           <div className="w-full h-full flex  justify-around items-center gap-5  px-5">
//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handlePrev}
//             >
//               <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//             </div>
//             <div className="w-10/12 relative">
//               {posts.map((el, index) => (
//                 <div
//                   key={el.id}
//                   className={`absolute top-0 left-0 w-full h-full  transition-transform duration-300 flex flex-row items-center justify-between ${
//                     index === currentIndex
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentIndex) * 100}%)`,
//                   }}
//                 >
//                   <img
//                     src={el.media_url}
//                     className="w-[40%] rounded-md"
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <div className="w-[40%] flex flex-col gap-5  items-center">
//                     <p className="text-white">{el.caption}</p>
//                     <Link to={el.permalink}>
//                       <button
//                         className="p-4  rounded-lg text-white font-semibold"
//                         style={{
//                           background:
//                             "linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)",
//                         }}
//                       >
//                         View On Instagram
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handleNext}
//             >
//               <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* recent achievement section  */}
//       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
//         <div className="uppercase text-3xl font-semibold pb-7 min-[320px]:text-lg min-[320px]:text-center sm:text-2xl md:text-3xl">
//           {" "}
//           Our Recent achievements...
//         </div>
//         <Link
//           className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
//           to={
//             "https://hindi.news18.com/news/auto/bike-will-run-100-km-in-just-rs-14-this-kit-will-make-bike-hybrid-8111585.html?1709286970"
//           }
//         >
//           <img
//             src={news}
//             className="w-[70%]  border-black border-2 rounded-md"
//             loading="lazy"
//           />
//         </Link>
//       </div>
//       {/* Media gallery */}
//       <div className="w-full lg:h-screen relative z-10 pb-7 mt-7 bg-black">
//       <div className="flex flex-col justify-evenly items-center gap-2 max-w-[1204px] mx-auto pt-8 h-full">
//         <div className="text-yellow-500 text-5xl font-extrabold text-center min-[320px]:text-3xl">
//           Media Gallery
//         </div>
//         <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//         <div className="w-full h-full flex justify-around items-center gap-10 sm:flex-row px-5">
//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToPreviousVideo}
//           >
//             <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//           </div>

//           <div className="w-10/12 relative flex justify-center items-center">
//             <video
//               ref={video1Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 0 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video1.mp4" type="video/mp4" />
//             </video>
//             <video
//               ref={video2Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 1 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video2.mp4" type="video/mp4" />
//             </video>
//           </div>

//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToNextVideo}
//           >
//             <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>

//       <div></div>
//       <BusinessBook />
//     </div>
//   );
// };
