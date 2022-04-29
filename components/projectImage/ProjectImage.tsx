import Image from "next/image";
import React from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
};

const ProjectImage = (props: ProjectImageProps) => {
  return (
    <div className="projectImage">
      <Image
        className="image"
        src={props.src}
        alt={props.alt}
        width={500}
        height={300}
      ></Image>
    </div>
  );
};

export default ProjectImage;
