import { motion } from "motion/react"
import {FadeInTextProps} from "@/interfaces"

const FadeInText = ({ children, className = "", ...props }: FadeInTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  );
};

export default FadeInText;
