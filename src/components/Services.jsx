import React from "react";

import frontend_img from "../assets/front end.png";
import backend_img from "../assets/back end.png";
import cleancode from "../assets/cleancode.jpg";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Services() {
  return (
    <div className="services" id="services">
      <div className="before_services">
        <h1>
          <AiOutlineDoubleLeft />
          Services
          <AiOutlineDoubleRight />
        </h1>
      </div>
      <div className="contain_services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="left_services"
              >
                <h1>What I Do.</h1>
                <p>
                  I’m a Freelance Full-Stack Developer with over 2 Years of
                  experience.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="myservices">
                <motion.h1
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  My Services
                </motion.h1>
                <div className="row">
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="col-lg-12 md-12 sm-12"
                  >
                    <div className="frontend_card">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-14">
                          <div className="frontend_img">
                            <img src={frontend_img} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="frontend_content">
                            <h2>Front-End Developer</h2>
                            <h4>
                              I Can Build Your Website Front-end Using HTML ,
                              CSS, JavaScript And Can Use React JS With a
                              Beautiful , Interractive UI And Responsive Website
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="col-lg-12 md-12 sm-12"
                  >
                    <div className="backend_card">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-14">
                          <div className="backend_img">
                            <img src={backend_img} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="backend_content">
                            <h2>Back-End Developer</h2>
                            <h4>
                              I Can Make Your Secure And Performance Back-end
                              Restful Or GraphQl API In NodeJS ,express And
                              MongoDB
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="col-lg-12 md-12 sm-12"
                  >
                    <div className="cleancode_card">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-14">
                          <div className="cleancode_img">
                            <img src={cleancode} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="cleancode_content">
                            <h2>Clean Code</h2>
                            <h4>
                              Responsive Design Makes Your Website Accessible To
                              All Users Regardles
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
