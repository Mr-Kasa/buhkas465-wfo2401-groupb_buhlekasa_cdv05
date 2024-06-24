// AboutMe.jsx
import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css"; // Ensure this path is correct

export default function AboutMe() {
  const aboutMeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = aboutMeRef.current.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top <= height) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={aboutMeRef} className={`aboutMe ${isInView ? "typing-container" : ""}`}>
      <h1 className={`AboutMeMainHeading ${isInView ? "typing" : ""}`}>About Me</h1>
      <p className={isInView ? "typing" : ""}>
        Hello! I'm a 25-year-old Front-End Web Developer with a passion for coding and a keen interest in creating beautiful, user-friendly web experiences.<br/> My primary focus is on building interactive and responsive user interfaces using technologies like React, JavaScript, HTML, CSS, Tailwind CSS, Git, GitHub, and ChatGPT.
      </p>
      <h4 className={isInView ? "typing" : ""}>Skills and Expertise</h4>
      <p className={isInView ? "typing" : ""}>
        <strong>React:</strong> Proficient in creating dynamic and responsive web applications using React.<br />
        <strong>JavaScript:</strong> Strong understanding of JavaScript, enabling me to add interactivity and functionality to web pages.<br />
        <strong>HTML & CSS:</strong> Solid foundation in HTML and CSS, essential for crafting structured and styled web content.<br />
        <strong>Tailwind CSS:</strong> Experienced in using Tailwind CSS for efficient and maintainable styling.<br />
        <strong>Version Control:</strong> Skilled in Git and GitHub, ensuring effective collaboration and version control in my projects.<br />
        <strong>ChatGPT:</strong> Familiar with integrating ChatGPT to enhance user interaction and experience.
      </p>
      <h4 className={isInView ? "typing" : ""}>Professional Experience</h4>
      <p className={isInView ? "typing" : ""}>
        I have honed my skills by working on various projects that involve integrating different UI designs and utilizing APIs to create dynamic web applications.<br/> These projects have provided me with valuable experience in transforming ideas into functional, visually appealing websites and applications.
      </p>
      <h4 className={isInView ? "typing" : ""}>Career Goals</h4>
      <p className={isInView ? "typing" : ""}>
        Currently, I am actively seeking opportunities as a junior React developer. I am eager to apply my skills in a professional setting where I can learn and grow alongside experienced developers.<br/> I am particularly interested in positions that foster a collaborative environment, allowing me to contribute to team success and enhance my own knowledge.
      </p>
      <h4 className={isInView ? "typing" : ""}>Interests and Passions</h4>
      <p className={isInView ? "typing" : ""}>
        <strong>Responsive Web Design:</strong> I am passionate about responsive web design and the challenge of ensuring that websites function seamlessly across various devices and screen sizes.<br/> Crafting websites that are accessible and user-friendly is something I take great pride in.<br />
        <strong>UI Integration:</strong> Creating visually appealing and intuitive user interfaces is a significant aspect of my work.<br/> I enjoy the process of integrating UI designs that not only look good but also enhance the overall user experience.<br />
        <strong>API Exploration:</strong> Exploring new APIs and incorporating them into my projects is something I find particularly exciting.<br/> This not only allows me to expand my skill set but also enables me to create more dynamic and feature-rich applications.
      </p>
      <h4 className={isInView ? "typing" : ""}>Location Preference</h4>
      <p className={isInView ? "typing" : ""}>
        I am open to job opportunities anywhere around South Africa or beyond.<br/> I am eager to bring my skills to a new team, contribute to exciting projects, and continue my journey as a front-end web developer.
      </p>
      <h4 className={isInView ? "typing" : ""}>Personal Note</h4>
      <p className={isInView ? "typing" : ""}>
        Outside of coding, I am a curious individual who loves to learn and experiment with new technologies.<br/> I believe in continuous improvement and am always looking for ways to better my craft. If you're looking for a passionate, dedicated, and enthusiastic developer to join your team, let's connect!
      </p>
    </div>
  );
}
