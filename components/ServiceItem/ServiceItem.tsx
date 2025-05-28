import React from 'react'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './style.module.scss';

interface IProps {
  key: number;
  iconName: IconProp;
  nameService?: string;
  subtext?: string;
  classname?: string;
  inverse?: boolean;
  size?: SizeProp;
}

const ServiceItem: React.FunctionComponent<IProps> = (props) => {

  return (
    <>
      {/* Иконка */}
      <div className={props.classname ?? style.circleFaButton}>
        <FontAwesomeIcon icon={props.iconName} inverse={props.inverse ?? true} size={props.size ?? '4x'} />
      </div>
      <h4 className={style.serviceItemHeading}>{props.nameService}</h4>
      <p className="text-muted">{props.subtext}</p>

    </>
  )
}

export default ServiceItem
