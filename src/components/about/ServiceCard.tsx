import React from "react";
import Tilt from "react-parallax-tilt";
import BounceBottomInDiv from "@/components/motion/div/BounceBottomInDiv";
import {ServiceCardProps} from "@/interfaces"

const ServiceCard = ({ title, icon, index}: ServiceCardProps) => (
  <Tilt className="w-full md:w-1/3 xl:w-1/5">
    <BounceBottomInDiv 
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        visibleAmount={0.1}
        delay={index * 0.5}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </BounceBottomInDiv>
  </Tilt>
);

export default React.memo(ServiceCard);
