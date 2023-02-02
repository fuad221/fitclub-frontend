import React from "react";
import Button from '../UI/Button'
import mc from './Plan.module.css';
import clsx from "clsx";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";


const Plans = () => {
    return (
        <div className={mc.plans_container}>
            <div className={mc.programs_header} style={{ gap: "2rem" }}>
                <span className="stroke_text spanBlock">Ready to Start</span>
                <span> Your Journey </span>
                <span className="stroke_text spanBlock">now with us</span>
            </div>
            <div className={mc.plans}>
                {plansData.map((plan, i) => (
                    <div className={mc.plan} key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> {plan.price} €</span>
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
                        <Button className={mc.btn}>Join now</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
