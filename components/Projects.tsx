"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
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
    <motion.section variants={titleVariant} initial="hidden" animate="visible">
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

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  mobileImg,
  index,
  source_code_link,
}: ProjectProps) => {
  const cardVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: index * 0.1,
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div variants={cardVariant} className="group shadow-sm">
      <div className="bg-gray-100 p-5 relative overflow-hidden rounded-sm max-w-[42rem] w-full">
        <div
          className="z-50 transition duration-500 relative sm:h-[20rem] w-full
            group-even:hover:delay-200:z-[2] 
            sm:group-hover:group-even:-translate-x-3/4 
            sm:group-hover:group-odd:translate-x-3/4
            group-hover:group-even:rotate-2
            group-hover:group-odd:-rotate-2"
        >
          <Image
            src={imageUrl}
            alt={title}
            className=" object-cover shadow-2xl rounded-sm"
          />

          <div className="absolute top-0 group-even:right-0 transition flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <BsGithub className="w-1/2 h-1/2 text-white object-contain hover:scale-110 active:scale-105" />
            </div>
          </div>
        </div>

        <div className="absolute top-10 hidden sm:block group-odd:right-48 group-even:left-48">
          {mobileImg && <Image
            src={mobileImg}
            alt={`mobileImage ${title}`}
            className="rounded-lgobject-cover px-auto shadow-xl"
            height={250}
            quality={95}
          />}
        </div>

        <div className="sm:absolute group-odd:left-0 group-even:right-0 top-0 z-10 p-5  max-w-[21rem]">
          <h3 className="text-black text-center text-[20px]">{title}</h3>
          <p className="mt-2 text-black text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
