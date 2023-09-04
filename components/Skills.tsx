"use client";

import React from "react";
import SectionHeading from "./helpers/section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gra8 ">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
