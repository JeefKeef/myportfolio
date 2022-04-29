import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";

const Project: React.FC = () => {
  return (
    <div className="project">
      <div className="projectTop">
        <Image
          src="https://www.craftz.dog/images/works/inkdrop_01.png"
          width="500"
          height="300"
          alt="Jeffreyson's projects"
        />
        <div className="overlay">
          <div className="overlayViewMore">
            <NextLink href={"/sample"}>
              <HiOutlineEye
                style={{
                  height: 30,
                  width: 30,
                  background: "transparent",
                  margin: 0,
                  padding: 0,
                }}
              />
            </NextLink>
          </div>
          <div className="overlayViewMore">
            <AiFillGithub
              style={{
                height: 30,
                width: 30,
                background: "transparent",
                margin: 0,
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>
      <div className="projectBottom">
        <h3 className="title">Portfolio Name</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          repellendus corporis adipisci fuga, atque laboriosam neque quasi
          blanditiis cum! Odit facere doloremque mollitia quod reprehenderit
          omnis quis id. Repudiandae, est!
        </p>
      </div>
    </div>
  );
};

export default Project;
