import { styles } from '@/css/theme/styles'
import BounceBottomInDiv from '@/components/motion/div/BounceBottomInDiv'
import FadeInText from '@/components/motion/text/FadeInText'
import TechStackSearch from './TechStackSearch'

const TechStack = () => {
  return (
    <div className={`${[styles.paddingX, styles.paddingY]}`}>
        <BounceBottomInDiv>
          <p className={`${styles.sectionSubText} `}>H</p>
          <h2 className={`${styles.sectionHeadText}`}>P</h2>
        </BounceBottomInDiv>
        <FadeInText>
            <p>Hello</p>
        </FadeInText>
        <TechStackSearch />
    </div>
  )
}

export default TechStack