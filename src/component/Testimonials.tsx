import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";
import { motion } from "framer-motion";
import mc from './Testimonials.module.css';



const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = { type: "spring", duration: 1 };
    return (
        <div className={mc.testimonials}>
            <div className={mc.left_t}>
                <span>Testimonials</span>
                <span className={mc.stroke_text}>What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className={mc.right_t}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt=""
                />
                <div className={mc.arrows}>
                    <img
                        src={leftArrow}
                        alt=""
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                    />{" "}
                    <img
                        src={rightArrow}
                        alt=""
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
