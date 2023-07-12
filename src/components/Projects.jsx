import React from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineEye,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// images
import Fiu_img from "../assets/Fiu web.jpg";
import rentiz_img from "../assets/Rentiz.jpg";
import honey_img from "../assets/honey.jpg";
import qwery_img from "../assets/Qwery.jpg";
import foods_img from "../assets/foods.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="before_project">
        <h1>
          <AiOutlineDoubleLeft />
          My Project
          <AiOutlineDoubleRight />
        </h1>
      </div>
      <div className="contain_projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="project_card">
                <div className="img">
                  <img src={foods_img} alt="" />
                </div>
                <div className="project_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-md-10 sm-10">
                        <div className="left">
                          <h2>Foods</h2>
                          <p>Html, Css And JavaScript</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 sm-2">
                        <div className="right">
                          <a href="https://food-alpha-seven.vercel.app/">
                            <AiOutlineEye />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="project_card">
                <div className="img">
                  <img src={honey_img} alt="" />
                </div>
                <div className="project_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="left">
                          <h2>Honey</h2>
                          <p>Html, Css And JavaScript</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="right">
                          <a href="https://honey-rust.vercel.app/">
                            <AiOutlineEye />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="project_card">
                <div className="img">
                  <img src={qwery_img} alt="" />
                </div>
                <div className="project_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="left">
                          <h2>Qwery</h2>
                          <p>Html, Css And JavaScript</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="right">
                          <a href="https://travel-gilt-rho.vercel.app/">
                            <AiOutlineEye />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-lg-4 col-md-6 col-sm-12">
              <div className="project_card">
                <div className="img">
                  <img src={rentiz_img} alt="" />
                </div>
                <div className="project_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="left">
                          <h2>Rentiz</h2>
                          <p>Html, Css And JavaScript</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="right">
                          <a href="https://rentiz.vercel.app/">
                            <AiOutlineEye />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <motion.div 
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="project_card">
                <div className="img">
                  <img src={Fiu_img} alt="" />
                </div>
                <div className="project_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="left">
                          <h2>FIU</h2>
                          <p>Html, Css And Bootstrap</p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="right">
                          <a href="https://fiu.vercel.app/">
                            <AiOutlineEye />
                          </a>
                        </div>
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
  );
}

export default Projects;
