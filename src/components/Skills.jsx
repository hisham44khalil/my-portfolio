import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// images
import html_img from "../assets/html-5.png";
import css_img from "../assets/css-3.png";
import JS_img from "../assets/js.png";
import bootstrap_img from "../assets/bootstrap.png";
import react_img from "../assets/science.png";
import nodejs_img from "../assets/node.js-removebg-preview.png";

function Skills() {
  return (
    <div className="home" id="skills">
      <div className="before_skills">
        <h1>
          <AiOutlineDoubleLeft />
          My Skills
          <AiOutlineDoubleRight />
        </h1>
      </div>
      <div className="contain_skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="frontend_skills">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="title"
                >
                  <h1>Front-end Skills</h1>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="items"
                >
                  <img src={html_img} alt="" />
                  <img src={css_img} alt="" />
                  <img src={JS_img} alt="" />
                  <img src={bootstrap_img} alt="" />
                  <img src={react_img} alt="" />
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="front_skills"
                >
                  <div className="html">
                    <div class="bar">
                      <img src={html_img} alt="" />
                      <h5>90%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up"></span>
                    </div>
                  </div>
                  <div className="html">
                    <div class="bar">
                      <img src={css_img} alt="" />
                      <h5>80%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up css"></span>
                    </div>
                  </div>
                  <div className="html">
                    <div class="bar">
                      <img src={JS_img} alt="" />
                      <h5>75%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up js"></span>
                    </div>
                  </div>
                  <div className="html">
                    <div class="bar">
                      <img src={bootstrap_img} alt="" />
                      <h5>80%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up bootstrap"></span>
                    </div>
                  </div>
                  <div className="html">
                    <div class="bar">
                      <img src={react_img} alt="" />
                      <h5>90%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up react"></span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="frontend_skills">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="title"
                >
                  <h1>Back-end Skills</h1>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="items"
                >
                  <img src={nodejs_img} className="nodejs" alt="" />
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="front_skills"
                >
                  <div className="node-js">
                    <div class="bar">
                      <img src={nodejs_img} className="nodejs" alt="" />
                      <h5>90%</h5>
                    </div>
                    <div class="color">
                      <span class="down"></span>
                      <span class="up"></span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
