import React from "react";
import "./Footer.scss";
import images from "../../Data/images";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-mapcolumn">
        <div className="heading">
          <span>
            We are located at 310 Queen St E, BRAMPTON, Ontario, L6V 1C2
          </span>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4601620170774!2d-79.74718582403425!3d43.70098527109992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15f75b682235%3A0xf346633c24331501!2s310%20Queen%20St%20E%2C%20Brampton%2C%20ON%20L6V%201C2!5e0!3m2!1sen!2sca!4v1747529530550!5m2!1sen!2sca"
            width="100%"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-main">
        <div className="first-column">
          <div className="heading">
            <span>First Motors</span>
          </div>
          <div className="para">
            <p>
              Located in Brampton, Ontario. We provide car delivery across GTA.
              Our dedicated sales staff...
            </p>
          </div>
          <div className="f-img">
            <img src={images.f1} alt="image" />
            <img src={images.f2} alt="image" />
            <img src={images.f3} alt="image" />
          </div>
        </div>
        <div className="second-column">
          <div className="title">
            <span>COMPANY</span>
          </div>
          <div className="f-links">
            <div className="links">
              <a href="">ABOUT US</a>
            </div>
            <div className="links">
              <a href="">CAR FOR SALE</a>
            </div>
            <div className="links">
              <a href="">CONTACT US</a>
            </div>
          </div>
        </div>
        <div className="second-column">
          <div className="title">
            <span>CONTACT US</span>
          </div>
          <div className="f-links">
            <div className="links">
              <a href="">905-452-3000</a>
            </div>
            <div className="links-address">
              <a href="">310 Queen St E, BRAMPTON, Ontario, L6V 1C2</a>
            </div>
          </div>
        </div>
        <div className="third-column">
          <div className="title">
            <span>OUR HOURS</span>
          </div>
          <div className="column">
            <div className="main">
              <div className="left">
                <span>MON - FRI</span>
              </div>
              <div className="right">
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="main">
              <div className="left">
                <span>SAT</span>
              </div>
              <div className="right">
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="main">
              <div className="left">
                <span>SUN</span>
              </div>
              <div className="right">
                <span>11:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="f-left">
          <span>© 2025 First Motors | Privacy & Policy | Powered by</span>
        </div>
        <div className="f-right">
          <div className="link">
            <a href="">
              <FaSquareInstagram />
            </a>
          </div>
          <div className="link">
            <a href="">
              <FaFacebookF />
            </a>
          </div>
          <div className="link">
            <a href="">
              <IoLogoTiktok />
            </a>
          </div>
          <div className="link">
            <a href="">
              <IoMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
