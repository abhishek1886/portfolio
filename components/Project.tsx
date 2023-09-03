"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

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

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opactiyProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opactiyProgress,
      }}
      variants={cardVariant}
      className="group shadow-sm mb-3 sm:mb-8 last:mb-0"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-100 p-5 relative overflow-hidden rounded-sm max-w-[42rem] w-full"
      >
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
          {mobileImg && (
            <Image
              src={mobileImg}
              alt={`mobileImage ${title}`}
              className="rounded-lgobject-cover px-auto shadow-xl"
              height={250}
              quality={95}
            />
          )}
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
      </Tilt>
    </motion.div>
  );
};

export default Project;
