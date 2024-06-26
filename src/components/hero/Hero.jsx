import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 42,
  },
  animate: {
    x: "-142%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 7,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Husamettin DONUS</motion.h2>
          <motion.h1 variants={textVariants}>
            Software <span>&</span> FrontEnd
            <br />
            <span>Developer</span>
          </motion.h1>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Engineer & Web Dev.
      </motion.div>
    </div>
  );
};

export default Hero;
