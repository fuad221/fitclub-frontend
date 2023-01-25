import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import mc from './InputCss.module.css';
import clsx from 'clsx'

type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends NativeInputProps {
    inputIcon?: string
}

const Input = ({ className, inputIcon, children, ...rest }: InputProps) => {
    return (
        <div>
            {inputIcon}
            <input className={clsx([mc.InputCss, className])}
                {...rest}
            />
            {children}
        </div>
    )
}


export default Input




