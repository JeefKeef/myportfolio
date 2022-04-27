import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return <section className="section">{props.children}</section>;
};

export default Section;
