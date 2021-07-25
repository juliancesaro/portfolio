import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>I'm Julian.</p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I studied software engineering at Macquarie University.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I enjoy creating projects and learning new technologies.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I'm
              </p>
              <Typewriter
                options={{
                  strings: [
                    'a fast learner',
                    'creative',
                    'inquisitive',
                    'a problem solver',
                    'a leader',
                    'a communicator',
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
        <Skills />
      </div>
    </Section>
  )
}

export default About
