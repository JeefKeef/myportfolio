import type { NextPage } from "next";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/project/Project";
import Section from "../components/section/Section";

const projects: NextPage = () => {
  return (
    <div className="projects">
      <Navbar />
      <div className="projectsWrapper">
        <Container>
          <Section>
            <h3>Projects</h3>
            <div className="projectList">
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </Section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
