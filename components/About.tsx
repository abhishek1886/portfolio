"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m on a passionate journey to become a{" "}
        <strong>Frontend Developer</strong>. My academic background is in
        electronics and telecommunication engineering, but I have always been
        passionate about Computer Science. I found my way into web development
        through an online community. It was here that I discovered my love for
        creating web applications that not only look great but also provide
        users with a seamless and enjoyable experience.{" "}
        <i>My favourite part of programming</i> is problem-solving aspect.
      </p>
      <p>
        My skill set encompasses{" "}
        <span className="underline">HTML, CSS, JavaScript, and React,</span>{" "}
        along with various frontend technologies. My attention to detail shines
        through in my work; I'm the kind of developer who can spend hours
        perfecting every pixel to ensure pixel-perfect UIs. Now, I'm eager to
        take the next step and dive into a professional setting, working on
        real-world projects.{" "}
      </p>
    </motion.section>
  );
};

export default About;
