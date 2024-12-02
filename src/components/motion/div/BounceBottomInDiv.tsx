import { ReactNode } from 'react'
import { motion } from "motion/react"
import {bounceBottomIn} from "@/utils/motion"

type BounceBottomInDivProps = {
  children: ReactNode, 
  containerClassName?: string
  className?: string,
  visibleAmount?: number
  delay?: number
}
const BounceBottomInDiv = ({ children, containerClassName = "",className = "", visibleAmount = 0.2, delay = 0,...props }: BounceBottomInDivProps) => {
  return (
    <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: visibleAmount }}
        {...props} 
        className={containerClassName}
    >
        <motion.div variants={bounceBottomIn(delay)} className={className} >
            {children}
        </motion.div>
    </motion.div>
  )
}

export default BounceBottomInDiv