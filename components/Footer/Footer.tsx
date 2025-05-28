import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import {
    faWhatsapp,
    faTelegram,
    faViber,
    faInstagram,
    faVk
} from "@fortawesome/free-brands-svg-icons";

import style from './style.module.scss';

interface IProps {
    copyright: string,
    instagram: string,
    telegram: string,
    whatsuapp: string,
    vk: string,
    viber: string
}

function Footer(props: IProps) {
    return (
        <footer className="footer py-3 bg-white">
            <Container>
                <Row lg={2} md={1} className={style.footerRow}>
                    <Col  className={style.copyrightCol}>
                        {props.copyright}
                    </Col>
                    <Col  className={style.iconsCol}>
                        {/* <a className={style.circleIcon} href={props.instagram} >
                            <FontAwesomeIcon className={style.icon} icon={faInstagram} />
                        </a> */}
                        <a className={style.circleIcon} href={props.vk} >
                            <FontAwesomeIcon className={style.icon} icon={faVk} />
                        </a>
                        <a className={style.circleIcon} href={props.telegram} >
                            <FontAwesomeIcon className={style.icon} icon={faTelegram} />
                        </a>
                        <a className={style.circleIcon} href={props.whatsuapp} >
                            <FontAwesomeIcon className={style.icon} icon={faWhatsapp} />
                        </a>
                        <a className={style.circleIcon} href={props.viber} >
                            <FontAwesomeIcon className={style.icon} icon={faViber} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
