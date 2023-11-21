import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Home" useTitleTemplate={true} />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="skills" heading="Skills" />
        {/* <AboutSection sectionId="about" heading="About" /> */}
        {/* <ProjectsSection sectionId="projects" heading="Projects" /> */}
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
