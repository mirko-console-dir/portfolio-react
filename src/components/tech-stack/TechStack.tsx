import { styles } from '@/css/theme/styles'
import BounceBottomInDiv from '@/components/motion/div/BounceBottomInDiv'
import FadeInText from '@/components/motion/text/FadeInText'
import TechStackSearch from './TechStackSearch'
import { useLanguage } from '@/hooks/useLanguage'
import React from 'react'

const TechStack = () => {
  const {translate} = useLanguage()
  return (
    <div className={`${styles.paddingX} ${styles.paddingT}`}>
        <BounceBottomInDiv>
        <p className={`${styles.sectionSubText} `}>{translate("tech.subTitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{translate("tech.title")}</h2>
        </BounceBottomInDiv>
        <FadeInText>
        {translate("tech.description").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
        </FadeInText>
        <TechStackSearch />
    </div>
  )
}

export default TechStack