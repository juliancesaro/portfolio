import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import IsVisible from "react-is-visible";
import Section from "../section/Section";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import emoji from "react-easy-emoji";
import { isAndroid, isMobile } from "react-device-detect";

const softwareSkills = [
  {
    id: 0,
    skillName: "JavaScript",
    amount: "95",
  },
  {
    id: 1,
    skillName: "Java",
    amount: "90",
  },
  {
    id: 2,
    skillName: "HTML",
    amount: "85",
  },
  {
    id: 3,
    skillName: "CSS",
    amount: "85",
  },
  {
    id: 4,
    skillName: "React.js",
    amount: "80",
  },
  {
    id: 5,
    skillName: "Vue.js",
    amount: "80",
  },
  {
    id: 6,
    skillName: "TypeScript",
    amount: "75",
  },
  {
    id: 7,
    skillName: "SwiftUI",
    amount: "75",
  },
  { id: 8, skillName: "AWS", amount: "70" },
  { id: 8, skillName: "SQL", amount: "70" },
  { id: 10, skillName: "Node.js", amount: "65" },
  { id: 11, skillName: "MongoDB", amount: "60" },
];

const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({ width: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
    });
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};

const About = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);

  return (
    <section className="about">
      <Section title="About">
        <div className="about-content">
          <Fade duration={1000}>
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>I'm Julian.</p>
              <p>
                {emoji("⚡")} I studied software engineering at Macquarie University.
              </p>
              <p>
                {emoji("⚡")} I enjoy creating projects and learning new
                technologies.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">{emoji("⚡")} I'm</p>
                <Typewriter
                  options={{
                    strings: [
                      "a fast learner",
                      "creative",
                      "inquisitive",
                      "a problem solver",
                      "a leader",
                      "a communicator",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>.</p>
              </div>
              <p>
                I've always been passionate about technology, which is why I
                decided to start studying software engineering over four years
                ago. Since then, I've learned a lot and aim to continue learning
                by constantly challenging myself!
              </p>
              <div className="location-wrapper">
                <svg
                  className="octicon octicon-location"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <p>Sydney, Australia</p>
              </div>
            </div>
          </Fade>
          <div style={{ position: "relative", width: "100%", maxWidth: 600  }}>
            <IsVisible once>
              {(isVisibleSkillsWrapper) => (
                <div
                  className="skills-wrapper"
                  style={
                    isVisibleSkillsWrapper
                      ? {
                          transition: "1s opacity ease-in-out",
                          transform: `translateX(0)`,
                          opacity: 1,
                        }
                      : {}
                  }
                >
                  <h2>Skills</h2>
                  <ul className="skills" ref={skillsWrapper}>
                    {softwareSkills.map((skills) => {
                      return (
                        <li
                          className="skill-bar-wrapper"
                          key={skills.skillName}
                        >
                          <div
                            className="skill-bar"
                            style={
                              isVisibleSkillsWrapper
                                ? {
                                    transition: `${
                                      1 + skills.id / 10
                                    }s transform ease-in-out`,
                                    transform: `scaleX(${
                                      isAndroid && isMobile
                                        ? width * (skills.amount / 100) * 0.9
                                        : width * (skills.amount / 100)
                                    })`,
                                    transformOrigin: "left",
                                    width: 1,
                                    opacity: 1,
                                  }
                                : {
                                    transform: `scaleX(1)`,
                                    width: 1,
                                  }
                            }
                          ></div>
                          <div className="skill-name">{skills.skillName}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </IsVisible>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default About;
