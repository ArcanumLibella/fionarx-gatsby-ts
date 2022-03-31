import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

import { COLORS } from "@/constants/Colors";
import { StaticImage } from "gatsby-plugin-image";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";

// type ProjectCardProps = {
//   height: string;
// };

// const cardVariants = {
//   initial: {
//     opacity: 0,
//     translateY: '0%',
//     transition: {
//       // staggerChildren: 0.2,
//       // staggerDirection: -1,
//     },
//   },
//   end: {
//     opacity: 1,
//     translateY: '10%',
//     transition: {
//       delay: 0.7,
//       duration: 0.3,
//       // staggerChildren: 0.2,
//       // staggerDirection: 1,
//     },
//   },
// };

const titleVariants = {
  hover: {
    scale: 1.4,
    color: COLORS.tomato.DEFAULT,
  },
};

const descriptionVariants = {
  hover: {
    opacity: 1,
    bottom: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

// const tagsVariants = {
//   hover: {
//     opacity: 1,
//     bottom: 0,
//     transition: {
//       type: "spring",
//       duration: 0.3,
//     },
//   },
// };

export const ProjectCard = (/* { height }: ProjectCardProps */) => {
  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        // initial="initial"
        // animate="end"
        // exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        // variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        className="h-full cursor-pointer max-h-[70vh]"
      >
        <Link
          to="/projects/project-name"
          className="relative inline-block w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple
            h-full"
        >
          {/* IMAGE */}
          <div className="absolute w-full h-full">
            <StaticImage
              src="../../../../static/images/OlympicsOptimized_preview.png"
              alt="Preview"
              placeholder="blurred"
              objectFit="cover"
              className="h-full"
            />
          </div>
          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="absolute flex justify-center items-center h-full w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] text-[5vh] md:text-[3vh] xl:text-[3vw] font-black text-center uppercase font-brother"
          >
            OLYMPICS OPTIMIZED
          </motion.h2>
          {/* DESCRIPTION */}
          <motion.div
            variants={descriptionVariants}
            whileHover="hover"
            className="absolute -bottom-10 w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] px-4 py-8 bg-purple-light opacity-0"
          >
            <Text type="custom" className="text-sm 2xl:text-xsm font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ex rerum autem. Excepturi natus suscipit eos blanditiis
              accusantium provident.
            </Text>
          </motion.div>
          <div className="absolute flex flex-wrap items-start w-full gap-2 md:gap-4 top-[72vh]">
            <Tag label="Web app" />
            <Tag label="React" />
            <Tag label="E-commerce" />
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
