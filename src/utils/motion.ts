import { Variants } from "motion/react";

export const bounceBottomIn = (delay: number) => ({
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 0.75, // Optional: specify default duration
      delay: delay, // Add delay here
    },
  },
});

export const bounceLeftIn: Variants = {
  offscreen: {
    x: 300,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
