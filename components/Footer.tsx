import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2025 Abhishek. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>built with
        React & Next.js (App router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion, React Tilt, React Email & Resend.
      </p>
    </footer>
  );
};

export default Footer;
