import clsx from 'clsx';
import React from 'react'
import { Col } from 'react-bootstrap';
import style from './style.module.scss';

interface IProps {
    header: string,
    subheader: string,
    className?: string,
}

const SectionHeader: React.FunctionComponent<IProps> = (props) => {
    const subheaderPart = props.subheader ? (
        <h3 className={style.sectionSubheading}>{props.subheader}</h3>
      ) : null;
    
      return (
        <Col className={clsx(style.sectionHeader, props.className)}>
          <h2 className={style.sectionHeadingH2}>{props.header}</h2>
          {subheaderPart}
        </Col>
      );
}

export default SectionHeader
