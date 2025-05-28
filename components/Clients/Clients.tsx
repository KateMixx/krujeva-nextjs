import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "../PageSection/PageSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ClientsLogo } from '@/public/images/';

interface IProps {
    anchor: string,
    header: string,
}

function Clients(props: IProps) {

    return (
        <PageSection className={clsx("py-5 bg-white")} id={props.anchor}>
            <Row>
                <SectionHeader header={props.header} subheader={""} />
            </Row>
            <Row>
                {Object.values(ClientsLogo).map((client) => (
                    <Col md={2} sm={6} className="my-3" key={client}>
                        <img className="img-fluid d-block mx-auto" src={client} alt={client} />
                    </Col>
                ))}

            </Row>
        </PageSection>
    );
};


export default Clients;
