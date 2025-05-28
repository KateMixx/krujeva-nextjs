import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import style from './style.module.scss';

interface IProps {
    images: IImageData[]
}

interface IImageData {
    original: string,
    thumbnail: string,
}

function Slider(props: IProps) {

  return <ImageGallery items={props.images}  showBullets={true} showThumbnails={true} thumbnailPosition='left'/>
//   React.createElement(ImageGallery, { additionalClass={style.slider} showBullets: true, items: props.images, showThumbnails: true, thumbnailPosition: "left" });
  
};

export default Slider;
