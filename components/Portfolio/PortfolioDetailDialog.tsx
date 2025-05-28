import React from "react";

import style from './style.module.scss';
import { Modal } from "react-bootstrap";
import Slider from "./Slider";

interface IProps {
    onHide: () => void;
    show: boolean;
    imageFileName: string;
    header: string;
    subheader: string;
    images: IImageData[];
}

interface IImageData {
    original: string,
    thumbnail: string,
}

function PortfolioDetailDialog(props: IProps) {
    return (
        <Modal
            onHide={props.onHide}
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{props.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p className="item-intro text-muted">{props.subheader}</p>

                <Slider images={props.images} />
            </Modal.Body>
        </Modal>
    );
};

export default PortfolioDetailDialog;
