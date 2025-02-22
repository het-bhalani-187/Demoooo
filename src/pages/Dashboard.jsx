import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import { FaQuoteLeft, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaAndroid, FaApple, FaLinux, FaWindows, FaSnapchat } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    text: "I was facing a challenging legal issue, but provided exceptional guidance and support. Their expertise not only resolved my case efficiently but also gave me peace of mind throughout the process. Highly recommend!",
    name: "Jay Soni",
    platforms: [<FaAndroid />, <FaApple/>],
  },
  {
    text: "I had a fantastic experience with Lawyer.AI. They were attentive, knowledgeable, and always kept me informed. Their hard work led to a successful resolution of my case. I highly recommend their services!",
    name: "Neel Patel",
    platforms: [<FaAndroid /> ,<FaSnapchat/>],
  },
  {
    text: "They handled my case with professionalism and care, making the entire process much easier for me. Thanks to their expertise, I achieved a favorable outcome. I highly recommend Lawyer.AI to anyone in need of legal assistance!",
    name: "Hetansh Panchal",
    platforms: [<FaAndroid />, <FaWindows/>],
  },
  {
    text: "I can't thank Lawyer.AI enough for their outstanding support. They were knowledgeable, responsive, and truly cared about my case. Thanks to their efforts, I received a positive outcome. I highly recommend their services!",
    name: "Himay",
    platforms: [<FaAndroid />, <FaLinkedin />],
  },
  {
    text: "Lawyer.AI was a tremendous help during a difficult time. Their expertise and attention to detail made all the difference in my case. I’m very pleased with the outcome and would recommend them to anyone in need of legal assistance!",
    name: "Dhwanit Prajapati",
    platforms: [<FaAndroid />,<FaLinux />],
  },
  {
    text: "I had a great experience with Lawyer.AI. They were professional, attentive, and guided me every step of the way. Thanks to their hard work, my case was resolved successfully. I highly recommend their services!",
    name: "Kavya Patel",
    platforms: [<FaAndroid />,<FaInstagram/>],
  },
];

const prospects = [
  {
    text: "Add Fuctionality to upload documents",
  },
  {
    text: "Add functionality to sign up with Mobile Number",
  },
  {
    text: "Add Audio/Video Tutorials for better understanding",
  },
  {
    text: "Add Memberships",
  },
  {
    text: "Add Regional Language Support",
    
  },
  {
    text: "Real time notification when government announces new laws",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dashboard">
      <div className="animated-bg"></div>
      <div className="main-content">
        
        <section className="hero">
          <h1>Get Professional Legal Advice</h1>
          <h1>Your trusted partner in legal matters.</h1>
          <div className="cta-buttons">
            <Link to="/promptbar" className="cta-primary">Start Chat</Link>
            <Link to="/features" className="cta-primary">Features</Link>
            <Link to="/aboutus" className="cta-primary">About Us</Link>
            <Link to="/contactus" className="cta-primary">Contact Us</Link>
          </div>
        </section>

        <center>

          <section id="testimonials" className="testimonials">
            <h2 className="text-center" data-aos="fade-up" >What Our Clients Say!</h2>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial" data-aos="zoom-in">
                  <FaQuoteLeft className="quote-icon" />
                  <h4>{testimonial.text}</h4>
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-platforms">User Of {testimonial.platforms}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <section id="blog" className="blog-preview">
            <h2 data-aos="zoom-in-up">Latest Blogs</h2>
            <div className="blog-grid">
              <div className="blog-post" data-aos="slide-up">
                <h3>5 Tips for Maximizing Productivity</h3>
                <p>Discover effective strategies to enhance your productivity.</p><br/>
                <button className="cta-read-more">Read More</button>
              </div>
              <div className="blog-post" data-aos="slide-up">
                <h3>The Future of Technology in Business</h3>
                <p>Explore the latest trends in technology shaping the future.</p><br/>
                <button className="cta-read-more">Read More</button>
              </div>
              <div className="blog-post" data-aos="slide-up">
                <h3>Understanding Legal Tech Innovations</h3>
                <p>How technology is transforming the legal industry.</p><br/>
                <button className="cta-read-more">Read More</button>
              </div>
            </div>
          </section> */}

          <section id="prospects" className="prospects">
            <h2 className="text-center" data-aos="fade-up" >Future Prospects</h2>
            <div className="prospect-grid">
              {prospects.map((prospect, index) => (
                <div key={index} className="prospect" data-aos="zoom-in">
                  <h4>{prospect.text}</h4>
                </div>
              ))}
            </div>
          </section>

        </center>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} LAWYER.AI</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Dashboard;