import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="cvLink">
        <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1x7rta2mHIGZxxtYMCv4MJ7KdQeuni7ziiMq-zT19vEQ/edit?usp=sharing">
          Link to my CV<br />
        </a> 
      </div>
      <div className="FooterLinks">
        <a className="footerIcon" href="https://github.com/Mr-Kasa" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a className="footerIcon" href="https://linkedin.com/in/buhle-kasa-3a03b0298" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="footerIcon" href="https://www.facebook.com/profile.php?id=100091441338542" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="footerIcon" href="https://www.instagram.com/buhlelithakasa/#" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a className="footerIcon" href="https://wa.me/0796916824" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
      <p className="CopyRight">©Buhle Kasa</p>
    </footer>
  );
}
