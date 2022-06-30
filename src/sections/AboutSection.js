import React from "react";
import {aboutSectionData} from "../data/about-section"
const AboutSection=() => {
  return (
    <section  className="about__container" id="about">
      <h1 className="title">About</h1>
        <div className="about__list-container">
          <div>
          {aboutSectionData.text.map((data) => (
              <p className="text__about">
              {data}
            </p>
            ))}
          </div>
          <div className="img-hello"></div>
        </div>

    </section>
  );
}
export default AboutSection;