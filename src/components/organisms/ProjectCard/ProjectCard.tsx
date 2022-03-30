import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

import { COLORS } from "@/constants/Colors";

type ProjectCardProps = {
  height: string;
};

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

const titleVariants = {
  hover: {
    scale: 1.4,
    color: COLORS.tomato.DEFAULT,
  },
};

export const ProjectCard = ({ height }: ProjectCardProps) => {
  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        // initial="initial"
        // animate="end"
        // exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        // variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        className="relative h-full cursor-pointer max-h-[80vh]"
      >
        <Link
          to="/projects/project-name"
          className={`
            flex items-center justify-center w-[70vw] xl:w-[20vw] max-w-[480px] bg-purple
            h-full h-${height}
          `}
        >
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="flex items-center h-full w-[70vw] xl:w-[20vw] max-w-[480px] text-[5vh] xl:text-[3vw] font-black text-center uppercase font-brother"
          >
            OLYMPICS OPTIMIZED
          </motion.h2>
          <motion.div
            variants={descriptionVariants}
            whileHover="hover"
            className="absolute -bottom-10 w-[70vw] xl:w-[20vw] max-w-[480px] px-4 py-8 bg-purple-light opacity-0"
          >
            <p className="text-base text-white font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ex rerum autem. Excepturi natus suscipit eos blanditiis
              accusantium provident.
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
