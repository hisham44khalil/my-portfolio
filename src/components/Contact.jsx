import React from "react";
// email js

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { MdPinDrop } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ContactUs } from "./contactus";

// images
import facbook_img from "../assets/facebook.png";
import whats_img from "../assets/whatsapp.png";
import instgram_img from "../assets/instagram.png";
import linkedin_img from "../assets/linkedin.png";
import github_img from "../assets/github-sign.png";

function Contact() {
  return (
    <div className="home" id="contact">
      <div className="before_contact">
        <h1>
          <AiOutlineDoubleLeft />
          Contact me
          <AiOutlineDoubleRight />
        </h1>
      </div>
      <div className="contain_contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="detail">
                <div>
                  <MdPinDrop />
                  <h1>Tatay-Elsanta-Algharbia</h1>
                </div>
                <div>
                  <GrMail />
                  <h1>hishamkhalil44@gmail.com</h1>
                </div>
                <div>
                  <BsFillTelephoneFill />
                  <h1>01064836550</h1>
                </div>
              </motion.div>
            </div>
            <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-lg-6 col-md-6 col-sm-12">
              <div className="contactus">
                <ContactUs />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              class="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/hisham226khalil/">
                      <img src={facbook_img} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/01064836550">
                      <img src={whats_img} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hisham_5alil/">
                      <img src={instgram_img} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/hisham-khalil-29277725a">
                      <img src={linkedin_img} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/hisham44khalil">
                      <img src={github_img} alt="" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
