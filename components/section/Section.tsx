import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section"
      >
        {props.children}
      </motion.div>
    </section>
  );
};

export default Section;
