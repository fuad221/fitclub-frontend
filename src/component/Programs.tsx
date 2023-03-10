import React from "react";
import { programsData } from "../data/programsData";
import RightArrow from '../assets/rightArrow.png';
import { motion } from "framer-motion";
import mc from './Programs.module.css';


const Programs = () => {
const hOver = { background: 'var(--planCard)', cursor: 'pointer'}

    return (
        <div className={mc.Programs} id='programs'>

            {/* programs header */}
            <div className={mc.programs_header}>
                <span className={mc.stroke_text}>Explore our</span>
                <span>Programs</span>
                <span className={mc.stroke_text}>To shape you</span>
            </div>


            {/* programs-categories */}
            <div className={mc.program_categories} >
                {programsData.map((program) => (
                    <motion.div
                        whileHover={ hOver }
                        transition={{ type: 'spring' }}
                        className={mc.category}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className={mc.join_now}>
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
