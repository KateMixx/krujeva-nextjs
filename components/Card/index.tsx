import style from './style.module.scss';
import Link from 'next/link'
import React from 'react';
import { Container, Card } from "react-bootstrap";
import Image from 'next/image'
import clsx from 'clsx';



export default function Home() {
    return (
        <header className={style.appHeader}>
            <Card className={clsx("image-card bg-dark text-white text-center")}>

            


      {/* <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} /> */}
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            {/* <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            {extraInfo} */}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
        </header>
    )
}