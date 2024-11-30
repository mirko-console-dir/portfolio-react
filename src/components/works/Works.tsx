import EmblaCarousel from "@/components/shared-components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/constants/work";
import Slide from "./Slide";
import { useLanguage } from "@/hooks/useLanguage";
import { useCallback, useState } from "react";
import Modal from "../modal/Modal";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
const Works = () => {
  const chunkedProjects = chunkArray(projects, 6);
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div>
      <EmblaCarousel
        slides={chunkedProjects.map((group, index) => (
          <Slide
            key={index}
            projects={group}
            language={language}
            openModal={toggleModal}
          />
        ))}
        options={OPTIONS}
      />
      <Modal 
        isOpen={isOpen} 
        onClose={toggleModal} 
        title={"Private Repository"}
      />
    </div>
  );
};

export default Works;
