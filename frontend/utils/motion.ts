import { motion } from "framer-motion";

const { a, p, div } = motion;

const slideInFromLeft = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } },
  };
};

const slideInFromRight = (delay: number) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } },
  };
};

const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

export {
  a as A,
  p as P,
  div as Div,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
};
