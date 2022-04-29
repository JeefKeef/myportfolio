import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Bio from "../components/bio/Bio";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";

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
import Contact from "../components/contact/Contact";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <Container>
          <Bio />
          <Section>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi
              iusto cumque architecto deleniti praesentium laudantium sapiente
              tempora alias porro et, harum corrupti ea nostrum quia magni ipsam
              aliquam eius.
            </p>
            <Link href="/projects">
              <a className="viewProjects">My projects {">"}</a>
            </Link>
          </Section>
          <Section>
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
            </ul>
          </Section>
          <Contact />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
