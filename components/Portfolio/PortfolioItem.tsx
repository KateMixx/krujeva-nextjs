import React from "react";
import style from './style.module.scss';
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PortfolioDetailDialog from "./PortfolioDetailDialog";


interface IProps {
    imageFileName: string,
    header: string,
    subheader: string,
    images: IImageData[]
}

interface IImageData {
    original: string,
    thumbnail: string,
}


function PortfolioItem(props: IProps) {
    const [showDetail, setShowDetail] = React.useState(false);
    const handleShowDetail = React.useCallback(() => {
        setShowDetail(true);
    }, []);
    const handleHideDetail = React.useCallback(() => {
        setShowDetail(false);
    }, []);

    return (
        <>
            <Col md={4} sm={6} className={style.portfolioItem}>
                <a
                    role="button"
                    tabIndex={-1}
                    className={style.portfolioLink}
                    data-toggle="modal"
                    onClick={handleShowDetail}
                >
                    <img className={props.imageFileName} src={props.imageFileName} alt={props.header || props.subheader} />

                    <div className={style.portfolioHover}>
                        <div className={style.portfolioHoverContent}>
                            <FontAwesomeIcon icon={faSearch} size="2x" />
                        </div>
                    </div>
                </a>
                <div className={style.portfolioCaption}>
                    <h4>{props.header}</h4>
                    {props.subheader ? <p className="text-muted">{props.subheader}</p> : null}
                </div>
            </Col>
            <PortfolioDetailDialog
                show={showDetail}
                onHide={handleHideDetail}
                imageFileName={props.imageFileName}
                header={props.header}
                subheader={props.subheader}
                images={props.images}
            />
        </>
    );
};

export default PortfolioItem;