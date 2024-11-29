import { styles } from "@/css/theme/styles";
import { useLanguage } from "@/hooks/useLanguage";
import BounceBottomInDiv from "../motion/div/BounceBottomInDiv";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { experiences } from "@/constants/experience";
import ExperienceCard from "@/components/experience/ExperienceCard";
const Experience = () => {
  const { language, translate } = useLanguage();

  return (
    <div className={`${styles.paddingX, styles.paddingY} `}>
        <BounceBottomInDiv>
            <p className={`${styles.sectionSubText} text-center`}>
            {translate('experience.title')}
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
            {translate('experience.subTitle')}
            </h2>
        </BounceBottomInDiv>
        <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
            <>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                  language={language}
                />
              ))}
            </>     
        </VerticalTimeline>
      </div>
    </div>
    );
};

export default Experience;
