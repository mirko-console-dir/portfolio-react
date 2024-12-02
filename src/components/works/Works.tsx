import { useCallback, useState, useMemo } from "react";
import EmblaCarousel from "@/components/shared-components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/constants/work";
import Slide from "./Slide";
import { useLanguage } from "@/hooks/useLanguage";
import Modal from "../modal/Modal";
import BounceBottomInDiv from "@/components/motion/div/BounceBottomInDiv";
import { styles } from "@/css/theme/styles";
import FadeInText from "@/components/motion/text/FadeInText";
import useResponsiveWidth from "@/hooks/useResponsiveWidth";
import ModalContentWork from "./ModalContentWork";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
const Works = () => {
  const {language, translate} = useLanguage()
  /* 
    md		@media (min-width: 768px) { ... }
    lg		@media (min-width: 1024px) { ... }
    xl		@media (min-width: 1280px) { ... }
    2xl	1536px
 */
  const screenWidth = useResponsiveWidth()
  const numberOfElements = useMemo(()=>{
    if(screenWidth < 768) return 1
    if(screenWidth < 1280) return 2
    return 6
  }, [screenWidth])

  const chunkedProjects = chunkArray(projects, numberOfElements);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div>
      <BounceBottomInDiv className={`${styles.paddingX} ${styles.paddingT}`}>
        <p className={`${styles.sectionSubText} `}>{translate('works.title')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{translate('works.subTitle')}</h2>
      </BounceBottomInDiv>
      <FadeInText className={`${styles.paddingX} mt-4 text-secondary text-[17px] leading-[30px]`}>
        {translate('works.description')}
      </FadeInText>

      <EmblaCarousel
        slides={chunkedProjects.map((group, index) => (
          <Slide
            key={index}
            projects={group}
            language={language}
            openModal={toggleModal}
          />
        ))}
        options={OPTIONS}
      />
      <Modal 
        isOpen={isOpen} 
        onClose={toggleModal} 
        title={"Private Repository"}
        children={<ModalContentWork/>}
      />
    </div>
  );
};

export default Works;
