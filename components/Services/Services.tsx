
import { Col, Row } from 'react-bootstrap';
import { faShoppingCart, faSearch, faRuler, faCar, faBuilding, faEdit } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import PageSection from '../PageSection/PageSection';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import style from './style.module.scss';

interface IServices {
    className?: string,
    anchor: string,
    rootHeader: string,
    rootSubHeader: string,
}

interface IService {
    key: number;
    iconName: IconProp;
    nameService: string;
    subtext?: string;
}

const services: IService[] = [
    {
        key: 1, nameService: "Замер", subtext: "Выезд дизайнера на объект", iconName: faRuler
    },
    {
        key: 2, nameService: "Создание дизайн-проектов", subtext: "Для частных и корпоративных заказчиков", iconName: faEdit
    },
    {
        key: 3, nameService: "Авторский надзор", iconName: faSearch
    },
    {
        key: 4, nameService: "Монтаж", subtext: "Монтаж штор, карнизов и жалюзи любой сложности", iconName: faBuilding
    },
    {
        key: 5, nameService: "Доставка", subtext: "Доставка готовой продукции (в т. ч. до транспортной компании)", iconName: faCar
    },
    {
        key: 6, nameService: "Продажа", subtext: "Интерьерных тканей, карнизов и фурнитуры", iconName: faShoppingCart
    },
];

const Services: React.FunctionComponent<IServices> = (props) => {
    return (
        <PageSection className={props.className} id={props.anchor}>
            <Row>
                <SectionHeader header={props.rootHeader} subheader={props.rootSubHeader} />
            </Row>
            <Row md={2} xs={1} lg={3} className={style.serviceRow}>
                {services.map((service) => (
                    <Col>
                        <ServiceItem {...service} />
                    </Col>
                ))}
            </Row>

        </PageSection>
    )
}

export default Services
