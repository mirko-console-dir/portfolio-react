import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCardProps } from "@/interfaces";

const ExperienceCard = ({ experience, language }: ExperienceCardProps) => {
  const points = experience.points[language] || [];
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <div className="flex flex-col">
          <span>{experience.date}</span>
          <span>{experience.reason_left[language]}</span>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1 mt-4">
        <p style={{ margin: 0, fontSize: "14px" }}>Tech stack:</p>
        {experience.techStack.map((tech: string, index: number) => (
          <p
            key={index}
            className="text-white-100"
            style={{ margin: 0, fontSize: "14px" }}
          >
            {tech}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

export default React.memo(ExperienceCard);
