import { ReactNode } from "react";

// Utils
type ObjStrKeyValArray = {
  [key: string]: string[]; // Keys are strings (languages), values are arrays of strings (points)
};
type ObjStrKeyVal = { [key: string]: string };

// Modal
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

// Search Component
export type SearchProps = {
  onChange: (value: string) => void;
  textPlaceholder: string;
};

// Motion
// Bounce Bottom In Div / Text
export type BounceBottomInDivProps = {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  visibleAmount?: number;
  delay?: number;
  onClick?: () => void;
};
export type FadeInTextProps = {
  children: ReactNode;
  className?: string;
};

// Navbar
export type NavItem = {
  id: string;
  title: ObjStrKeyVal;
};
export type HamburgerProps = {
  language: string;
  navLinks: NavItem[];
};

// About
export type ServiceC = {
  title: string;
  icon: string;
};
export type ServiceCardProps = {
  title: string;
  icon: string;
  index: number;
};

// Experience
type Experience = {
  title: string;
  company_name: string;
  reason_left: ObjStrKeyVal;
  icon: string;
  iconBg: string;
  date: string;
  points: ObjStrKeyValArray;
  techStack: string[];
};
export type ExperienceCardProps = {
  experience: Experience;
  language: string;
};

// Tech
export type Tech = {
  name: string;
  icon: string;
};

// Work
export type Tag = {
  name: string;
  color: string;
};
export type Project = {
  name: ObjStrKeyVal;
  description: ObjStrKeyVal;
  tags: Tag[];
  image: string;
  source_code_link: string;
};
export type ProjectCardProps = {
  project: Project;
  language: string;
  openModal: () => void;
};
export type SlideProjectsProps = {
  projects: Project[];
  language: string;
  openModal: () => void;
};

// Feedbacks
type Feedback = {
  testimonial: ObjStrKeyVal;
  name: string;
  designation: string;
  company: string;
  image?: string;
};
export type FeedbackCardProps = {
  feedback: Feedback;
  language: string;
  openModal: (img: string, title: string) => void;
};
export type SlideProps = {
  feedback: Feedback;
  language: string;
  openModal: (img: string, title: string) => void;
};
