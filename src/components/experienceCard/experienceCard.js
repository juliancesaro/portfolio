import React from "react";

const ExperienceCard = () => {
  return (
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
              <div className="orange-bg" style={{ borderRadius: "50%" }}></div>
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
                  Responsible for managing front-end development and deployment
                </li>
                <li>
                  Provide assistance with back-end development and integration
                  of AWS services
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
  );
};
