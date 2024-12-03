import React from "react";
import ProjectCard from "./ProjectCard";
import { styles } from "@/css/theme/styles";
import {Project, SlideProjectsProps} from "@/interfaces"

const Slide = ({ projects, language, openModal }: SlideProjectsProps) => {
  return (
    <div
      className={`${styles.paddingX} flex flex-wrap gap-10 justify-center pt-12 pb-4`}
    >
      {projects.map((project: Project, index: number) => (
        <ProjectCard
          key={index}
          project={project}
          language={language}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default React.memo(Slide);
