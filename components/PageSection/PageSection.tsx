import React from 'react'
import { Container } from 'react-bootstrap'
import clsx from "clsx";
import style from './style.module.scss';

interface IProps {
    children: any,
    id: string,
    className?: string,
}

const PageSection : React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      {/* Пустая секция для отступа от предыдущей секции */}
      <section className={clsx(style.pageSection, props.className)}>
      
      <Container id={props.id}>{props.children}</Container>
    </section>
    </div>
  )
}

export default PageSection
