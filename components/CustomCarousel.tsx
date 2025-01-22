"use client"
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const CustomCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div className='mb-[50px] lg:w-[300px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>Honor - <span className='text-white md:text-[35px] text-[10px] font-medium'>Electronics Company</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[140px] h-[100px] lg:w-[600px] lg:h-[400px] sm:w-[140px] sm:h-[100px]' src={"/images/honor-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[100px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[100px] sm:h-[100px]' src={"/images/honor-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[90px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[90px] sm:h-[100px]' src={"/images/honor-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[150px] h-[100px] lg:w-[600px] lg:h-[400px] sm:w-[150px] sm:h-[100px]' src={"/images/honor-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div className='mb-[50px] lg:w-[300px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>Misskamila - <span className='text-white md:text-[35px] text-[10px] font-medium'>Bridal Shop</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Misskamila-2.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Misskamila-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Misskamila-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[350px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Misskamila-5.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div className='mb-[50px] lg:w-[300px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>Piplstea - <span className='text-white md:text-[35px] text-[10px] font-medium'>Bubble tea</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Piplstea-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Piplstea-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Piplstea-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Piplstea-5.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px] lg:w-[300px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>Miobeautyuz - <span className='text-white md:text-[35px] text-[10px] font-medium'>Beauty, cosmetic & personal care</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Miobeautyuz-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Miobeautyuz-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Miobeautyuz-3.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/Miobeautyuz-4.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px] lg:w-[300px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>Zara - <span className='text-white md:text-[35px] text-[10px] font-medium'>Clothing, accessories, beauty products and perfumes.</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[80px] h-[100px] lg:w-[280px] lg:h-[400px] sm:w-[80px] sm:h-[100px]' src={"/images/zara-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[80px] h-[100px] lg:w-[280px] lg:h-[400px] sm:w-[80px] sm:h-[100px]' src={"/images/zara-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[80px] h-[100px] lg:w-[280px] lg:h-[400px] sm:w-[80px] sm:h-[100px]' src={"/images/zara-3.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[80px] h-[100px] lg:w-[280px] lg:h-[400px] sm:w-[80px] sm:h-[100px]' src={"/images/zara-4.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px] lg:w-[300px]'>
          <strong className='text-[#FD6F00] md:text-[40px] text-[10px]'>fashiondiamond - <span className='text-white md:text-[35px] text-[10px] font-medium'>Jewelry/watches.</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/fashiondiamond-1.jpeg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/fashiondiamond-2.jpeg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/fashiondiamond-3.jpeg"} alt='honor image' width={300} height={350} />
            <Image className='w-[85px] h-[100px] lg:w-[320px] lg:h-[400px] sm:w-[85px] sm:h-[100px]' src={"/images/fashiondiamond-4.jpeg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;