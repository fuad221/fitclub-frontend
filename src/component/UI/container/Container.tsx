import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import mc from './Container.module.css';
import clsx from 'clsx';


type NativeDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface ContainerProps extends NativeDivProps {

}


const Container = ({className, ...rest}: ContainerProps) => {
  return (
    <div className={clsx([mc.containerCss, className])} {...rest}/>
  )
}

export default Container;