import React from "react";
import { styles } from "@/css/theme/styles";
import FeedbackCard from "./FeedbackCard";
import {SlideProps} from "@/interfaces"

const Slide = ({ feedback, language, openModal }: SlideProps) => {
  return (
    <div
      className={`${styles.paddingX} flex flex-wrap gap-10 justify-center pt-12`}
    >
      <div className="w-full lg:w-1/2">
        <FeedbackCard feedback={feedback} language={language} openModal={openModal}/>
      </div>
    </div>
  );
};

export default React.memo(Slide);
