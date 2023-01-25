import React from "react";
import mc from './Plan.module.css';
import clsx from "clsx";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";


const Plans = () => {
    return (
        <div className={mc.plans_container}>
            <div className={clsx([mc.blur, mc.plans_blur_1])}></div>
            <div className={clsx([mc.blur, mc.plans_blur_2])}></div>
            <div className={mc.programs_header} style={{ gap: "2rem" }}>
                <span className={mc.stroke_text}>Ready to Start</span>
                <span>Your Journey</span>
                <span className={mc.stroke_text}>now with us</span>
            </div>
            <div className={mc.plans}>
                {plansData.map((plan, i) => (
                    <div className={mc.plan} key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className={mc.features}>
                            {plan.features.map((feature, i) => (
                                <div className={mc.feature}>
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className={mc.btn}>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
