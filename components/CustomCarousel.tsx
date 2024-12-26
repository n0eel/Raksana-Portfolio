"use client"
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

const CustomCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div className='mb-[50px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>Honor - <span className='text-white text-[35px] font-medium'>Electronics Company</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[600px] h-[400px]' src={"/images/honor-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[350px] h-[400px]' src={"/images/honor-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[350px] h-[400px]' src={"/images/honor-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[600px] h-[400px]' src={"/images/honor-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div className='mb-[50px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>Misskamila - <span className='text-white text-[35px] font-medium'>Bridal Shop</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[350px] h-[400px]' src={"/images/Misskamila-2.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[350px] h-[400px]' src={"/images/Misskamila-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[350px] h-[400px]' src={"/images/Misskamila-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[350px] h-[400px]' src={"/images/Misskamila-5.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div className='mb-[50px]'>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>Piplstea - <span className='text-white text-[35px] font-medium'>Bubble tea</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/Piplstea-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/Piplstea-3.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/Piplstea-4.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/Piplstea-5.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>Miobeautyuz - <span className='text-white text-[35px] font-medium'>Beauty, cosmetic & personal care</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/Miobeautyuz-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/Miobeautyuz-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/Miobeautyuz-3.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/Miobeautyuz-4.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>Zara - <span className='text-white text-[35px] font-medium'>Clothing, accessories, beauty products and perfumes.</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[280px] h-[400px]' src={"/images/zara-1.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[280px] h-[400px]' src={"/images/zara-2.jpg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[280px] h-[400px]' src={"/images/zara-3.jpg"} alt='honor image' width={300} height={350} />
            <Image className='w-[280px] h-[400px]' src={"/images/zara-4.jpg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
      <div>
        <div className='text-center space-y-[20px] mt-[30px]'>
          <strong className='text-[#FD6F00] text-[40px]'>fashiondiamond - <span className='text-white text-[35px] font-medium'>Jewelry/watches.</span></strong>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/fashiondiamond-1.jpeg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/fashiondiamond-2.jpeg"} alt='honor image' width={300} height={350} />
          </div>
          <div className='flex space-x-[20px] justify-center'>
            <Image className='w-[320px] h-[400px]' src={"/images/fashiondiamond-3.jpeg"} alt='honor image' width={300} height={350} />
            <Image className='w-[320px] h-[400px]' src={"/images/fashiondiamond-4.jpeg"} alt='honor image' width={300} height={350} />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;