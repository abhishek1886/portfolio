"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./helpers/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import useSectionInView from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);
  
  const titleVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.175,
        when: "beforeChildren",
      },
    },
  };
  return (
    <motion.section
      ref={ref}
      id="projects"
      variants={titleVariant}
      initial="hidden"
      animate="visible"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div className="mt-20 grid grid-cols-1 gap-4">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
