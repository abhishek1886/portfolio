"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://i.imgur.com/Jp1twlc.jpg"
              alt="self image"
              width="192"
              height="192"
              priority={true}
              quality="95"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-5 mt-4 px-4 text-xl font-medium !leading-[1.2] md:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong>Hello! I'm Abhishek.</strong> I'm a passionate{" "}
        <strong>Frontend Developer</strong>. I enjoy building <i>web apps</i>{" "}
        using different Frontend technologies like{" "}
        <span className="underline font-bold">React, Next.js,</span> etc.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 group text-sm text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          href="/Abhishek_Gupta_Resume.pdf"
          download
          className="bg-white text-sm px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-70" />
        </a>

        <a
          href=""
          target="_blank"
          className="bg-white text-sm p-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href=""
          target="_blank"
          className="bg-white p-2 text-gray-700  flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
