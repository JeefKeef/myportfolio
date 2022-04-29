import type { NextPage } from "next";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/project/Project";
import ProjectTitle from "../components/projectTitle/ProjectTitle";
import Section from "../components/section/Section";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectImage from "../components/projectImage/ProjectImage";

const sample: NextPage = () => {
  return (
    <div className="projectDetails">
      <Navbar />
      <div className="projectDetailsWrapper">
        <Container>
          <Section>
            <ProjectTitle title="Project 1" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
              doloribus sit veniam, voluptas aspernatur numquam suscipit atque
              saepe quasi beatae cumque, ullam alias quaerat fuga reprehenderit
              architecto quod odio neque?
            </p>
            <ul>
              <li>
                <h4>Website</h4>
                <a href="https://www.google.com">www.google.com</a>
                <FaExternalLinkAlt className="externalLinkIcon" />
              </li>
              <li>
                <h4>Stack</h4>
                <ul>
                  <li>react</li>
                  <li>react</li>
                  <li>react</li>
                </ul>
              </li>
              <li>
                <h4>Source</h4>
                <a href="https://www.google.com">www.google.com</a>
                <FaExternalLinkAlt className="externalLinkIcon" />
              </li>
            </ul>
            <ProjectImage
              src="https://www.craftz.dog/images/works/inkdrop_01.png"
              alt="Project 1"
            />
            <ProjectImage
              src="https://www.craftz.dog/images/works/inkdrop_01.png"
              alt="Project 1"
            />
          </Section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default sample;
