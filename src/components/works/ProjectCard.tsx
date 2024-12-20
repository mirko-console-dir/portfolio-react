import React from "react";
import BounceBottomInDiv from "../motion/div/BounceBottomInDiv";
import { github, lock} from "@/assets/works";
import {ProjectCardProps, Tag} from "@/interfaces"

const ProjectCard = ({ project, language, openModal }: ProjectCardProps) => {
  const nameProject = project.name[language] || "";
  const descriptionProject = project.description[language] || "";

  return (
    <BounceBottomInDiv
      containerClassName="cursor-pointer w-full md:w-2/5 xl:w-1/4"
      className="neumorphism__out p-5 min-h-full rounded-2xl flex flex-col"
      onClick={project.source_code_link ? () => window.open(project.source_code_link, "_blank") : openModal}
    >
      <div className="relative w-full h-[230px] cursor-pointer">
        <img
          src={project.image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src={project.source_code_link ? github : lock}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-white font-bold text-[24px]">{nameProject}</h3>
        <p className="mt-2 text-secondary text-[14px]">{descriptionProject}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag: Tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </BounceBottomInDiv>
  );
};

export default React.memo(ProjectCard);
