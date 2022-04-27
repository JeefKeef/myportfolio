import Image from "next/image";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Bio: React.FC = () => {
  return (
    <section className="bio">
      <div className="left">
        <h2>Jeffreyson Nguyen</h2>
        <p>Software Engineer ( Fullstack / Blockchain )</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jeffreyson-nguyen/"
              target="_blank"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/JeefKeef" target="_blank">
              <SiGithub />
            </a>
          </li>
          <li>
            <a
              href="mailto:nguyen.jeffreyson@gmail.com?subject=Mail from portfolio website"
              target="_blank"
            >
              <IoMdMail />
            </a>
          </li>
        </ul>
      </div>

      <Image width="100" height="100"src="/images/jn.jfif" alt="Jeffreyson.jfif" />
    </section>
  );
};

export default Bio;
