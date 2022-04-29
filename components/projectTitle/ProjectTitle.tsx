import React, { Children } from "react";
import NextLink from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";

type ProjectTitleProps = {
  children?: React.ReactNode;
  title?: string;
};
const ProjectTitle = (props: ProjectTitleProps) => {
  return (
    <div className="projectTitle">
      <NextLink href={"/projects"}>
        <a>Projects</a>
      </NextLink>
      <span>
        <BsArrowReturnRight />
      </span>
      <h2>{props.title}</h2>
    </div>
  );
};

export default ProjectTitle;
