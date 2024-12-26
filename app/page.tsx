import CustomCarousel from "@/components/CustomCarousel";
import HeightSlider from "@/components/HeightSlider";
import WeightSlider from "@/components/WeightSlider";
import { InstagramIcon, TiktokIcon } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-[150px] py-[61px]">
      <section className="mb-[140px]">
        <div>
          <ul className="flex items-center justify-center text-white">
            <div className="flex text-[18px] space-x-[40px]">
              <li className="hover:border-b-[2px] border-[#FD6F00] hover:text-[19px] duration-300 cursor-pointer">Home</li>
              <li className="hover:border-b-[2px] border-[#FD6F00] hover:text-[19px] duration-300 cursor-pointer">About Me</li>
              <li className="hover:border-b-[2px] border-[#FD6F00] hover:text-[19px] duration-300 cursor-pointer">Experience</li>
            </div>
          </ul>
        </div>
        <div className="mt-[120px] flex justify-between"> 
          <div className="w-[800px] mt-[100px]">
            <p className="text-white text-[21px]">Hi I am</p>
            <h4 className="text-[32px] text-[#FD6F00] font-semibold">Raksana Avazkhanova</h4>
            <h1 className="text-white text-[90px] font-bold">MODEL</h1>
            <div className="text-[21px] text-white mb-[10px]"><span className="text-[#FD6F00]">ENG</span> / I graduated `Art Models`` and I have been working in this sphere for 7 years.</div>
            <div className="text-[21px] text-white mb-[10px]"><span className="text-[#FD6F00]">RU</span> / Я училась в агентстве `Art Models` и работаю в этой сфере 7 лет.</div>
            <div className="text-[21px] text-white mb-[10px]"><span className="text-[#FD6F00]">UZ</span> / Men `Art Models`` agentligida o'qiganman va ushbu sohada 7 yildan beri ishlab kelaman.</div>
          </div>
          <div className="flex flex-col items-center">
            <Image className="rounded-full w-[420px] h-[550px]" src={"/images/Hero.jpg"} alt="Hero Image" width={485} height={485}/>
            <div className="pt-[20px] flex items-center space-x-[20px]">
              <Link className="hover:scale-[1.1] duration-300 cursor-pointer" href={"https://www.instagram.com/raksana_avazhanova/"}>
                <InstagramIcon/>
              </Link>
              <Link className="hover:scale-[1.1] duration-300 cursor-pointer" href={"https://www.tiktok.com/@_raksana_a?_t=ZP-8sY0JmP0l0J&_r=1"}>
                <TiktokIcon/>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-[70px] justify-between">
          <div>
            <Image className="rounded-full w-[420px] h-[550px]" src={"/images/Hero-2.jpg"} alt="Hero Image" width={485} height={485}/>
          </div>
          <div className="space-y-[30px] w-[500px]">
            <strong className="text-[60px] text-white">About Me</strong>
            <p></p>
              <HeightSlider/>
              <WeightSlider/>
          </div>
        </div>
      </section>
      <section>
          <div>
            <h1 className="text-white font-bold text-[65px] text-center">Experience</h1>
            <CustomCarousel/>
          </div>
      </section>
    </div>
  );
}
