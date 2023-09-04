"use client";

import React, { useState } from "react";
import SectionHeading from "./helpers/section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 bg-gray-100 sm:mb-28 max-w-[38rem] text-center border border-black/10 p-4 rounded-lg shadow-lg dark:bg-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-sm -mt-6 dark:text-gray-200">
        Please, contact me directly at{" "}
        <a className="underline" href="mailto:guptaabhishek1886@gmail.com">
          guptaabhishek1886@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData: FormData) => {
          const { error, data } = await sendEmail(formData);

          if(error){
            toast.error(error);
          } else{
            toast.success("Email sent successfully!")
          }

        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg px-4 border border-black/10 dark:text-gray-950 dark:bg-gray-500 dark:focus:bg-white"
          placeholder="Your email"
          required
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:text-gray-950 dark:bg-gray-500 dark:focus:bg-white"
          placeholder="Your message..."
          required
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
