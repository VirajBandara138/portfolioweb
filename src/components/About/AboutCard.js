import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Viraj Bandara </span>
            from <span className="purple"> Anuradhapura, Sri Lanka.</span>
            <br />
            I am a passionate and driven IT professional with a degree in Information 
            Technology from Rajarata University, graduating in 2025.
            <br />
            Throughout my journey, I've developed and executed numerous IT projects, including cutting-edge AI innovations. With a strong foundation in software development and a keen interest in emerging technologies, I aspire to excel as a Software Engineer,
            creating impactful solutions that drive innovation and efficiency.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Viraj Bandara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
