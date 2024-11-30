import React from "react";
import ProjectCard from "./ProjectCard";
import { styles } from "@/css/theme/styles";
type ObjStrKeyVal = { [key: string]: string };
type Tag = {
    name: string;
    color: string;
}
type Project = {
    name: ObjStrKeyVal,
    description: ObjStrKeyVal
    tags: Tag[]
    image: string,
    source_code_link: string
}
type SlideProps = {
  projects: Project[];
  language: string;
  openModal: () =>void;
};

const Slide = ({ projects, language, openModal }: SlideProps) => {
  return (
    <div
    className={`${styles.paddingX} flex flex-wrap gap-10 justify-center p-20`}
    
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
