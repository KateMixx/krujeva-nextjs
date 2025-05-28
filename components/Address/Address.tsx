import { Col, Row } from "react-bootstrap";
import PageSection from "../PageSection/PageSection";
import SectionHeader from "../SectionHeader/SectionHeader";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import style from './style.module.scss';
import { faClock, faMapMarker, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IAddress {
  anchor: string,
  className?: string,
  rootHeader: string,
  rootSubHeader: string,
  workTime: string,
  adressText: string,
  contacts: string,
}

const Address: React.FunctionComponent<IAddress> = (props) => {
  return (
    <PageSection className={props.className} id={props.anchor}>
      <Row>
        <SectionHeader header={props.rootHeader} subheader={props.rootSubHeader} />
      </Row>
      <Row md={1} lg={2} className={style.adressRow}>
        <Col >
          <YMaps >
            <Map width='100%' defaultState={{ center: [56.888467, 35.902049], zoom: 16 }}>
              <Placemark geometry={[56.888467, 35.902049]} />
            </Map>
          </YMaps>
        </Col>
        <Col className={style.adressCol}>
          {/* Адрес */}
          <div className={style.adressLineRow}>
            <FontAwesomeIcon className={style.icon} icon={faMapMarker} size='3x' />
            <div className={style.subText}>
              {props.adressText}
            </div>
          </div>
          <hr className="divider " />
          {/* Время работы */}
          <div className={style.adressLineRow}>
            <FontAwesomeIcon className={style.icon} icon={faClock} size='3x' />
            <div className={style.subText}>
              {props.workTime}
            </div>
            {/* Телефоны */}
          </div>
          <hr className="divider" />
          <div className={style.adressLineRow}>
            <FontAwesomeIcon className={style.icon} icon={faPhoneAlt} size='3x' />
            <div className={style.subText}>
              {props.contacts}
            </div>
          </div>
        </Col>
      </Row>
    </PageSection>
  );
}


export default Address