
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
import uttam from "../resource/uttam.png";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";

export const Service = () => {

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

<div className="relative min-h-screen pt-24 bg-blue-400">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${crausal1})` }}
  ></div>

  <header className="relative z-10 text-center mb-6 px-4">
    <h1 className="text-6xl text-white font-bold"
    style={{ textShadow: "2px 2px 4px blue, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>SERVICES WE PROVIDE</h1>
    <h2 className="text-xl text-white font-semibold mt-20" style={{ textShadow: "2px 2px 4px blue, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>we provide comprehensive power solutions tailored to meet your energy needs. Whether you're seeking reliable backup power for your business, industrial site, or residential property, our expert team ensures you get the right solution for uninterrupted power. Our services include:</h2>

  </header>


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
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
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
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
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


      <BusinessBook />
    </div>
  );
};


