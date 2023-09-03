"use client";

import React, { useEffect } from "react";
import SectionHeading from "./helpers/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/store/active-context";

const About = () => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m on a journey to become a <strong>Frontend Developer</strong>.
        My academic background is in electronics and telecommunication
        engineering, but I have always been passionate about Computer Science. I
        found my way into web development through an online community. It was
        here that I discovered my love for creating web applications that not
        only look great but also provide users with a seamless and enjoyable
        experience. <i>My favourite part of programming</i> is problem-solving
        aspect.
      </p>
      <p>
        My skill set encompasses{" "}
        <span className="underline">HTML, CSS, JavaScript, and React,</span>{" "}
        along with various frontend technologies. My attention to detail shines
        through in my work; I&apos;m the kind of developer who can spend hours
        perfecting every pixel to ensure pixel-perfect UIs. Now, I&apos;m eager
        to take the next step and dive into a professional setting, working on
        real-world projects.{" "}
      </p>
    </motion.section>
  );
};

export default About;
