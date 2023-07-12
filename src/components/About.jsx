import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

import about_img from "../assets/Code typing-bro.svg";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  return (
    <div className=" about" id="about">
      <div className="before_about">
        <h1>
          <AiOutlineDoubleLeft />
          About
          <AiOutlineDoubleRight />
        </h1>
      </div>
      <div className="contain_about">
        <div className="container">
          <div className="row">
            <div className="col-ld-5 col-md-6 col-sm-12">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="img"
              >
                <img src={about_img} alt="" />
              </motion.div>
            </div>
            <div className="col-ld-7 col-md-6 col-sm-12">
              <div className="text_2">
                <div>
                  <motion.h2
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    Hi, Nice to meet you.
                  </motion.h2>
                  <motion.p
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    I’m a Full Stack Developer located in Egypt. I have a
                    serious passion for Web development. Since beginning my
                    journey as a Frontend developer over 3 Months ago , and I
                    still improve what i can do with HTML/CSS/JS (UI effects,
                    animations and creating intuitive, dynamic user
                    experiences.).
                    <br />
                    <br />
                    I'm open to Job opportunities where I can contribute, learn
                    and grow. If you have a good opportunity that matches my
                    skills and experience then don't hesitate to contact me.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
