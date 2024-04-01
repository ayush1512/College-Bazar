import React from "react";

const SectionHeading = ({ children }) => (
  <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center">{children}</h2>
);

export const Subheading = ({ children }) => (
  <h5 className="font-bold text-primary-500">{children}</h5>
);

export default SectionHeading;