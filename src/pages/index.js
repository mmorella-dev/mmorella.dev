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
        <ProjectsSection sectionId="projects" heading="Projects" />
        <InterestsSection sectionId="skills" heading="Skills" />
        {/* <AboutSection sectionId="about" heading="About" /> */}
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
