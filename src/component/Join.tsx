import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import Button from '../UI/Button';
import  mc from './Join.module.css';
import clsx from 'clsx';

const Join = () => {
    const form = useRef<HTMLFormElement>();

    const handleJoin = (e: any) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_extzqa9',
            'template_5fbt3fr',
            // @ts-ignore
            form.current,
            'VLwg1ltOWvnCYAiK_'
        )
            .then((result: any) => {
                console.log('done')
            },
                (error) => {
                    console.log(error)
                }
            )
    }
    return (
        <div className={mc.Join} id='join_us'>
            <div className={mc.left_j}>
                <hr />
                <div><span className={mc.stroke_text}>Ready to</span><span>Level up</span></div>
                <div><span>your body</span><span className={mc.stroke_text}>with us?</span></div>
            </div>
            <div className={mc.right_j}>
                <form className={mc.email_container}  onSubmit={handleJoin}>
                    <input type="email" name='user_email' placeholder='Enter your Email Address here...' />
                    <Button type='submit' className={clsx([mc.btn, mc.btn_j])}>Join now</Button>
                </form>
            </div>
        </div>
    )
}

export default Join