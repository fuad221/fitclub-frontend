import React from 'react';
import Header from './Header';
import mc from './Hero.module.css';
import clsx from 'clsx';
import { Link } from 'react-scroll';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from 'framer-motion';



const Hero = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const transition = { duration: 3, type: "spring" };


    return (
        <div className={mc.hero}>

            <div className={mc.left_h}>
                <Header />
                {/* the best ad */}
                <div className={mc.the_best_ad}>
                    <motion.div
                        initial={{ left: mobile ? "178px" : undefined }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* Hero text */}
                <div className={mc.hero_text}>
                    <div>
                        <span className={mc.stroke_text}>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* experience figures */}
                {/* <div className={mc.figures}>
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay={4} preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={878} delay={4} preFix="+" />
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} delay={2} preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div> */}

                {/* hero buttons */}
                <div className={mc.hero_buttons}>
                    <button className={mc.btn}>Get Started</button>
                    <button className={mc.btn}>Learn More</button>
                </div>
            </div>

            {/* Right Side */}
            <div className={mc.right_h}>
                <button className={mc.btn}>
                    <Link to='join-us' smooth={true} spy={true}>
                        Join Now
                    </Link>
                </button>

                {/* heart rate */}
                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className={mc.heart_rate}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img className={mc.hero_image} src={hero_image} alt="" />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className={mc.hero_image_back}
                    src={hero_image_back}
                    alt=""
                />

                {/* calories */}
                <motion.div
                    initial={{ right: "32rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className={mc.calories}
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero