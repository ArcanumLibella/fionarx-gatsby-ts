import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

import { COLORS } from "@/constants/Colors";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";

type ProjectCardProps = {
  name: string;
  excerpt?: string;
  tags?: string;
  slug: string;
  imageData: ImageDataLike;
};

const cardVariants = {
  initial: {
    opacity: 0,
    translateY: "20%",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  end: {
    opacity: 1,
    translateY: "0%",
    transition: {
      delay: 0.3,
      duration: 0.3,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const titleVariants = {
  hover: {
    scale: 1.1,
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

export const ProjectCard = ({
  name,
  excerpt,
  tags,
  slug,
  imageData,
}: ProjectCardProps) => {
  const image = getImage(imageData);

  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        initial="initial"
        animate="end"
        exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        variants={cardVariants}
        whileHover={{ scale: 1.1, transition: { when: "afterChildren" } }}
        className="h-[70vh] cursor-pointer max-h-[70vh]"
      >
        <Link
          to={`/projects/${slug}`}
          className="relative inline-block w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple
            h-[70vh]"
        >
          {/* IMAGE */}
          <div className="absolute w-full h-[70vh]">
            <GatsbyImage
              image={image}
              alt="Project's preview"
              objectFit="cover"
              className="h-full"
            />
          </div>

          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="drop-shadow-lg absolute flex justify-center items-center h-full w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] text-[4.5vh] md:text-[3vh] xl:text-[3vw] font-black text-center uppercase font-brother"
          >
            {name}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            variants={descriptionVariants}
            whileHover="hover"
            className="absolute -bottom-10 w-[70vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] px-4 py-8 bg-purple-light opacity-0"
          >
            <Text type="custom" className="text-sm 2xl:text-xsm font-body">
              {excerpt}
            </Text>
          </motion.div>

          {/* TAGS */}
          <div className="absolute flex flex-wrap items-start w-full gap-2 md:gap-4 top-[72vh]">
            {tags
              .split(",")
              .map((tag) => tag.trim())
              .filter((tag) => tag.length > 0)
              .map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
