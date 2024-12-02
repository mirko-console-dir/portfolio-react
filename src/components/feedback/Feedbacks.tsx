import { useCallback, useState, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import BounceBottomInDiv from "@/components/motion/div/BounceBottomInDiv";
import FadeInText from "../motion/text/FadeInText";
import { styles } from "@/css/theme/styles";
import EmblaCarousel from "@/components/shared-components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Slide from "@/components/feedback/Slide";
import { testimonials } from "@/constants/feedback";
import Modal from "@/components/modal/Modal";
import ModalContentFeedback from "./ModalContentFeedback";
const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

const Feedbacks = () => {
  const { language, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalImg = useRef<string>("")
  const modalTitle = useRef<string>("")
  
  const openModal = useCallback((img: string, title: string) => {
    modalImg.current = img
    modalTitle.current = title
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  },[])


  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingT}`}>
        <BounceBottomInDiv>
          <p className={styles.sectionSubText}>
            {translate("feedbacks.title")}
          </p>
          <h2 className={styles.sectionHeadText}>
            {translate("feedbacks.subTitle")}
          </h2>
        </BounceBottomInDiv>
      </div>
      <EmblaCarousel
        isAutoplay
        slides={testimonials.map((t, index) => (
          <Slide key={index} feedback={t} language={language} openModal={openModal}/>
        ))}
        options={OPTIONS}
      />
        <Modal 
          isOpen={isOpen} 
          onClose={closeModal} 
          title={modalTitle.current}
          children={<ModalContentFeedback image={modalImg.current} title={modalTitle.current}/>}
        />
    </div>
  );
};

export default Feedbacks;
