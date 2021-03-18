import React from "react";
import "./Experience.css";
import Section from "../section/Section";
import { Fade } from "react-reveal";
import eightsecondzLogo from "../../images/8_logo.png";
import cactuscanLogo from "../../images/CactusCan2020_White.png";
import cabbagetreeLogo from "../../images/cabbagetree.png";

const Experience = () => {
  return (
    <section className="experience">
      <Section title="Experience">
        <div className="experience-content">
          <ul className="experience-list">
            <li>
              <Fade bottom duration={1000} distance="20px">
                <a
                  className="experience-link"
                  href="https://www.8secondz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="experience-card-wrapper">
                    <div className="experience-card">
                      <div className="experience-card-top">
                        <div className="orange-bg"></div>
                        <h2>8secondz</h2>
                        <div className="image-wrapper">
                          <div
                            className="orange-bg"
                            style={{ borderRadius: "50%" }}
                          ></div>
                          <img
                            className="eightsecondz-image"
                            src={eightsecondzLogo}
                            alt="eightsecondz-logo"
                          />
                        </div>
                      </div>
                      <div className="experience-card-bottom">
                        <div>
                          <h2>Software Engineer</h2>
                          <h3>October 2020 - Present</h3>
                          <ul>
                            <li>
                              Responsible for managing front-end development and
                              deployment
                            </li>
                            <li>
                              Provide assistance with back-end development and
                              integration of AWS services
                            </li>
                          </ul>
                        </div>
                        <div className="experience-card-tech">
                          <ul>
                            <li>Vue.js</li>
                            <li>Nuxt.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>AWS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Fade>
            </li>
            <li>
              <Fade bottom duration={1000} distance="20px">
                <a
                  className="experience-link"
                  href="https://www.cactuscan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="experience-card">
                    <div className="experience-card-top">
                      <div className="green-bg"></div>
                      <h2>CactusCan</h2>
                      <div className="image-wrapper">
                        <div
                          className="green-bg"
                          style={{ borderRadius: "50%" }}
                        ></div>
                        <img
                          className="cactuscan-image"
                          src={cactuscanLogo}
                          alt="cactuscan-logo"
                        />
                      </div>
                    </div>
                    <div className="experience-card-bottom">
                      <div>
                        <h2>Digital Producer</h2>
                        <h3>September 2020 - Present</h3>
                        <ul>
                          <li>
                            Responsible for filming and directing numerous video
                            projects meeting client requirements and deadlines
                          </li>
                          <li>
                            Improved web UI/UX to better illustrate the
                            business's offerings
                          </li>
                        </ul>
                      </div>
                      <div className="experience-card-tech">
                        <ul>
                          <li>Wordpress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </Fade>
            </li>
            <li>
              <Fade bottom duration={1000} distance="20px">
                <a
                  className="experience-link"
                  href="https://www.cabbagetree.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="experience-card">
                    <div className="experience-card-top">
                      <div className="black-bg"></div>
                      <h2>Cabbage Tree Landscape</h2>
                      <div className="image-wrapper">
                        <div
                          className="black-bg-image"
                          style={{ borderRadius: "50%" }}
                        ></div>
                        <img
                          className="cabbagetree-image"
                          src={cabbagetreeLogo}
                          alt="cabbagetree-logo"
                        />
                      </div>
                    </div>
                    <div className="experience-card-bottom">
                      <div>
                        <h2>Database Developer</h2>
                        <h3>June 2019 - October 2020</h3>
                        <ul>
                          <li>
                            Created relational databases and interfaces to
                            estimate and measure plant stock and project
                            requirements (<i>Microsoft Access, SQL, VBA</i>)
                          </li>
                        </ul>
                      </div>
                      <div className="experience-card-tech">
                        <ul>
                          <li>Microsoft Access</li>
                          <li>SQL</li>
                          <li>VBA</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </Fade>
            </li>
          </ul>
        </div>
      </Section>
    </section>
  );
};

export default Experience;
