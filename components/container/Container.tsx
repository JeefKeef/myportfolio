import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoSass, IoMdMail } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiEthereum,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLinkedin,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiSolidity,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div className="container">
      <div className="containerWrapper">
        {props.children}
        {/* <div className="containerWrapper">
        <section className="name">
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

          <img src="/images/jn.jfif" alt="Jeffreyson.jfif" />
        </section>
        <section className="about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi
            iusto cumque architecto deleniti praesentium laudantium sapiente
            tempora alias porro et, harum corrupti ea nostrum quia magni ipsam
            aliquam eius.
          </p>
          <Link href="/projects">
            <a>My projects {">"}</a>
          </Link>
        </section>
        <section className="skills">
          <h3>Skills</h3>
          <ul className="items">
            <li className="item">
              <SiJavascript />
            </li>
            <li className="item">
              <SiTypescript />
            </li>

            <li className="item">
              <FaReact />
            </li>

            <li className="item">
              <SiRedux />
            </li>
            <li className="item">
              <SiGraphql />
            </li>
            <li className="item">
              <SiNextdotjs />
            </li>
            <li className="item">
              <IoLogoSass />
            </li>
            <li className="item">
              <SiStyledcomponents />
            </li>
            <li className="item">
              <FaNodeJs />
            </li>
            <li className="item">
              <SiExpress />
            </li>
            <li className="item">
              <SiNestjs />
            </li>
            <li className="item">
              <SiPostgresql />
            </li>
            <li className="item">
              <SiMongodb />
            </li>
            <li className="item">
              <SiRedis />
            </li>
            <li className="item">
              <SiDocker />
            </li>
            <li className="item">
              <SiJest />
            </li>
            <li className="item">
              <SiAmazonaws />
            </li>
            <li className="item">
              <SiEthereum />
            </li>
            <li className="item">
              <SiSolidity />
            </li>
            <li className="item"> </li>
          </ul>
        </section>
        <section className="contact">
          <h3>Contact</h3>
          <form
            action="mailto:nguyen.jeffreyson@gmail.com"
            className="contactForm"
          >
            <input placeholder="Subject" name="subject" type="text" />
            <textarea name="body" placeholder="Additional information" />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="submitButton"
            />
          </form>
        </section>
      </div> */}
      </div>
    </div>
  );
};

export default Container;
