import image from 'next/image';
import style from './style.module.scss';
import React from 'react';
//import { Image } from "react-bootstrap";
import Image from 'next/image'

interface IImage{
    fileName: string,
    alt: string,
}

const ImageComponent : React.FunctionComponent<IImage> = (props/*, ...restProps*/) => {

    // <StaticQuery
    //   query={graphql`
    //     query ImageQuery {
    //       images: allFile {
    //         edges {
    //           node {
    //             relativePath
    //             name
    //             childImageSharp {
    //               sizes(maxWidth: 1920) {
    //                 ...GatsbyImageSharpSizes
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={(data) => {
    //     const image = data.images.edges.find((n) => n.node.relativePath.includes(fileName));
  
    //     if (!image) {
    //       return null;
    //     }
        // return {(data) => {
        // const image = data.images.edges.find((n) => n.node.relativePath.includes(fileName));
  
        // if (!image) {
        //   return null;
        // }
  
        // const imageSizes = image.node.childImageSharp.sizes;

        const imageLoader = ({ src, width, quality }: {
            src: string;
            width: number;
            quality?: number;
        }) => {
            return `https://example.com/${src}?w=${width}&q=${quality || 75}`
          }
          
        return <Image
        loader={imageLoader}
        alt={props.alt}
        width={500}
        height={500} src={''}    />;
      
    //   }}
    // />
};