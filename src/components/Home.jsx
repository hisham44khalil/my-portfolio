import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import home_image from "../assets/undraw_heatmap_uyye.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="contain">
          <div class="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text"
                >
                  <motion.span
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    Hey, I'm
                  </motion.span>
                  <br />
                  <motion.h1
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    Hisham Khalil
                  </motion.h1>
                  <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <span
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="animation"
                    >
                      I'm a
                    </span>
                    <br />
                    <TypeAnimation
                      sequence={["Developer", 2000, "Designer", 2000]}
                      speed={30}
                      className="text-accent"
                      wrapper="h3"
                      repeat={Infinity}
                    />
                  </motion.div>

                  <motion.p
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    I'm a Full Stack developer focused on building the Frontend
                    of Websites and Web Applications that leads to the success
                    of the overall product and business.
                  </motion.p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 ">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="img"
                >
                  <img src={home_image} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
