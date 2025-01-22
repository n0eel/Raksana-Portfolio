import CustomCarousel from "@/components/CustomCarousel"; 
import HeightSlider from "@/components/HeightSlider";

import WeightSlider from "@/components/WeightSlider";
import { InstagramIcon, TiktokIcon } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-[30px] py-[30px] sm:px-[150px] sm:py-[61px]">
      <section className="mb-[140px]">
        <div>
          <ul className="flex items-center justify-center text-white">
            <div className="flex text-[18px] space-x-[40px]">
              <li className="text-[11px] md:hover:border-b-[2px] border-[#FD6F00] md:text-[18px] md:hover:text-[19px] duration-300 cursor-pointer">Home</li>
              <li className="text-[11px] md:hover:border-b-[2px] border-[#FD6F00] md:text-[18px] md:hover:text-[19px] duration-300 cursor-pointer">About Me</li>
              <li className="text-[11px] md:hover:border-b-[2px] border-[#FD6F00] md:text-[18px] md:hover:text-[19px] duration-300 cursor-pointer">Experience</li>
            </div>
          </ul>
        </div>
        <div className="xl:mt-[120px] xl:flex xl:justify-between lg:block">
          <div className="lg:w-[800px] mt-[100px]">
            <p className="text-[] text-white md:text-[21px]">Hi I am</p>
            <h4 className="md:text-[32px] text-[#FD6F00] font-semibold">Raksana Avazkhanova</h4>
            <h1 className="text-white md:text-[90px] font-bold">MODEL</h1>
            <div className="md:text-[21px] text-white mb-[10px]">
              <span className="text-[#FD6F00]">ENG</span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              / I graduated Art Models and I've been working in this sphere for 7 years.
            </div>
            <div className="md:text-[21px] text-white mb-[10px]">
              <span className="text-[#FD6F00]">RU</span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              / Я училась в агентстве Art Models и работаю в этой сфере 7 лет.</div>
            <div className="md:text-[21px] text-white mb-[10px]">
              <span className="text-[#FD6F00]">UZ</span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              / Men Art Models agentligida o'qiganman va ushbu sohada 7 yildan beri ishlab kelaman.</div>
          </div>
          <div className="flex flex-col items-center">
            <Image className="w-[130px] h-[180px] rounded-full sm:w-[420px] sm:h-[550px] xl:w-[250px] xl:h-[350px]" src={"/images/Hero.jpg"} alt="Hero Image" width={485} height={485} />
            <div className="pt-[20px] flex items-center space-x-[20px]">
              <Link className="hover:scale-[1.1] duration-300 cursor-pointer" href={"https://www.instagram.com/raksana_avazhanova/"}>
                <InstagramIcon />
              </Link>
              <Link className="hover:scale-[1.1] duration-300 cursor-pointer" href={"https://www.tiktok.com/@_raksana_a?_t=ZP-8sY0JmP0l0J&_r=1"}>
                <TiktokIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center mt-[70px] xl:flex xl:items-center xl:justify-between lg:block">
          <div className="flex flex-col items-center">
            <Image className="w-[130px] h-[180px] rounded-full sm:w-[420px] sm:h-[550px] xl:w-[250px] xl:h-[350px]" src={"/images/Hero-2.jpg"} alt="Hero Image" width={485} height={485} />
          </div>
          <div className="w-[150px] lg:block lg:w-[200px] xl:space-y-[30px] xl:w-[500px] mt-[20px]">
            <strong className="lg:mt-[60px] sm:text-[40px] xl:text-[60px] text-white">About Me</strong>
            <p></p>
            <HeightSlider />
            <WeightSlider />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-[20px] sm:text-[40px] text-white font-bold xl:text-[65px] text-center">Experience</h1>
          <CustomCarousel />
        </div>
      </section>
    </div>
  );
}
