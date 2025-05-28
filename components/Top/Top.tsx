import React from 'react'
// import Image from 'next/image'
import { Container, Card } from "react-bootstrap";
import style from './style.module.scss';
import clsx from "clsx";

type props = {
    imageFileName: string,
    header: string,
    subheader: string
}

const Top = ({imageFileName, header, subheader}: props) => {
  return (
    <Card className={style.imageCard}>
     {/* <Card className={clsx("image-card bg-dark text-white text-center", style.imageCard)}> */}
      <img className={style.image} src={imageFileName}  alt={header || subheader} />
      <Card.ImgOverlay className={style.noPadding}>
        <Container>
          <div className={style.introText}>
            <div className={style.introLeadIn}>{subheader}</div>
            <div className={style.introHeading}>{header}</div>
          </div>
        </Container>
      </Card.ImgOverlay>
     </Card>
  )
}

export default Top