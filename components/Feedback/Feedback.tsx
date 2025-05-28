import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import clsx from "clsx";
import style from './style.module.scss';
import PageSection from '../PageSection/PageSection';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import { faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IServices {
  className?: string,
  anchor: string,
  rootHeader: string,
  rootSubHeader: string,
}

interface IContact {
  key: number;
  iconName: IconProp;
  link: string;
  subtext: string;
  linkContact: string;
}

const contscts: IContact[] = [
  {
    key: 1, iconName: faPhoneAlt, link: '', subtext: '+7 (903) 804 65 72', linkContact: 'tel:+7 (903) 804 65 72'
  },
  {
    key: 2, iconName: faMailBulk, link: '', subtext: 'krujeva-salon@yandex.ru', linkContact: 'mailto:krujeva-salon@yandex.ru'
  },
  {
    key: 3, iconName: faPhoneAlt, link: '', subtext: '+7 (963) 154 32 02', linkContact: 'tel:+7 (963) 154 32 02'
  }
];

const Feedback: React.FunctionComponent<IServices> = (props) => {
  return (
    <PageSection className={props.className} id={props.anchor}>
      <Row>
        <SectionHeader header={props.rootHeader} subheader={props.rootSubHeader} />
      </Row>
      <Row xs={1} md={3} className={style.contactRow}>
        {contscts.map((contact) => (
          <a href={contact.linkContact} className='text-decoration-none'>
            <ServiceItem classname={style.icon} inverse={false} size='3x' {...contact} />
          </a>
        ))}
      </Row>

    </PageSection>
  )
}

export default Feedback
