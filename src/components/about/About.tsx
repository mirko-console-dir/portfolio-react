import React from 'react'
import { useLanguage } from '@/hooks/useLanguage';
import { styles } from "@/css/theme/styles";
import ServiceCard from '@/components/about/ServiceCard';
import { services } from '@/constants/about';
import BounceBottomInDiv from '@/components/motion/div/BounceBottomInDiv';
import FadeInText from '@/components/motion/text/FadeInText';
import {ServiceC} from "@/interfaces"

const About = () => {
  const { translate } = useLanguage();

  return (
    <div className={`${styles.paddingX} ${styles.paddingT}`}>
      <BounceBottomInDiv>
        <p className={styles.sectionSubText}>{translate('about.title')}</p>
        <h2 className={styles.sectionHeadText}>{translate('about.subTitle')}</h2>
      </BounceBottomInDiv>
      <FadeInText className='mt-4 text-secondary text-[17px] leading-[30px]'>
        {translate("about.description").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </FadeInText>
      <div id="about" className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service: ServiceC, index: number) => (
          <ServiceCard key={index} {...service} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default About