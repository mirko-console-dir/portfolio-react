import { useLanguage } from "@/hooks/useLanguage";
import { styles } from "@/css/theme/styles";
import { globe } from "@/assets/navbar";
import { rocket, my_pic } from "@/assets/hero";
import '@/css/hero.css'

import { motion } from "motion/react";

const Hero = () => {
  const { translate } = useLanguage();

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] md:px-10 lg:grid lg:top-[150px] lg:grid-cols-2 lg:gap-10`}
      >
        <div className={`flex flex-row items-start gap-5 px-5 md:px-0`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 md:h-60 violet-gradient" />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                {translate("hero.greetings")}{" "}
                <span className="text-[#915EFF]" style={{ whiteSpace: "nowrap" }}>
                  {translate("hero.nameDev")}
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                {translate("hero.intro")}
              </p>
            </div>
            <div className="flex justify-center items-center h-[50vh]">
              <img
                loading="lazy"
                className="w-[250px] rounded-2xl my_img"
                src={my_pic}
                alt="rocket image"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            loading="lazy"
            className="hidden md:flex profile-image opacity-50 absolute top-20 left-20"
            src={rocket}
            alt="rocket image"
          />
          <div className="absolute w-screen">
            <img
              loading="lazy"
              className="opacity-25 -z-1 absolute w-screen start-1/2 lg:start-0"
              src={globe}
              alt="globe image"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center ">
        <a href="#about" aria-label="Read more about me" className="">
          <div className="w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 neumorphism__out">
            <motion.div
              className="p-2 rounded-full neumorphism__inner_dot"
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
