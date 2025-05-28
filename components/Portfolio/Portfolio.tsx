"use client"

import { CldImage } from "next-cloudinary";
import { env } from "process";
import { Url } from "url";
import { v2 as cloudinary } from 'cloudinary';
import PageSection from "../PageSection/PageSection";
import { Row } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import style from './style.module.scss';
import PortfolioItem from "./PortfolioItem";
import { TypesPortfolio } from '@/public/images/';
import clsx from "clsx";

interface IProps {
  anhor: string;
  name: string;
  subtext: string;
  className?: string,
}

interface IImageData {
  original: string,
  thumbnail: string,
}

interface IFolder {
  key: number;
  imageFileName: string,
  header: string,
  subheader: string,
  images: IImageData[]
}

const portfolios: IFolder[] = [
  {
    key: 1,
    imageFileName: TypesPortfolio.LivingRoom,
    header: "Гостиная",
    subheader: "Шторы и текстиль в гостинных и заллах",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-1_vehthb',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-1_vehthb'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180624/living-room/living-room-2_vmpq8f.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180624/living-room/living-room-2_vmpq8f.jpg',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-6_dhbexz.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-6_dhbexz.jpg',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-5_dehgwt',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-5_dehgwt',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-4_rcv3vk',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-4_rcv3vk',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-3_elzg84',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-3_elzg84',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-20_felcfs',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-20_felcfs',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-17_yj5nwh',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-17_yj5nwh',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-16_glbbsg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593180602/living-room/living-room-16_glbbsg',
      },
      ///
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351909/living-room/IMG_20211007_120410_667_cfsjwv.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351909/living-room/IMG_20211007_120410_667_cfsjwv.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351912/living-room/IMG_20210203_202754_usahcd.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351912/living-room/IMG_20210203_202754_usahcd.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351915/living-room/IMG_20211007_120410_590_hqigqu.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351915/living-room/IMG_20211007_120410_590_hqigqu.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351931/living-room/IMG_20211126_205753_904_lcq3ad.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351931/living-room/IMG_20211126_205753_904_lcq3ad.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351934/living-room/IMG_20211224_151021_tzdhfg.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351934/living-room/IMG_20211224_151021_tzdhfg.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351936/living-room/IMG_20211224_164730_513_j8pmgg.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748351936/living-room/IMG_20211224_164730_513_j8pmgg.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352157/living-room/IMG_20250203_180511_iau4sx.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352157/living-room/IMG_20250203_180511_iau4sx.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352224/living-room/IMG_20250124_164019_wizzto.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352224/living-room/IMG_20250124_164019_wizzto.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352228/living-room/IMG_20250124_164128_rhkpbv.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352228/living-room/IMG_20250124_164128_rhkpbv.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352694/living-room/photo_2025-05-27_16-30-50_rwkxml.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352694/living-room/photo_2025-05-27_16-30-50_rwkxml.jpg',
      },
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352697/living-room/photo_2025-05-27_16-30-41_ogbkox.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748352697/living-room/photo_2025-05-27_16-30-41_ogbkox.jpg',
      },

    ]
  },
  {
    key: 2,
    imageFileName: TypesPortfolio.Bedroom,
    header: "Спальня",
    subheader: "Шторы, подушки и покрывала в спальнях",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-14_xandqi',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-14_xandqi',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-15_abihov',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-15_abihov',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-11_abcsx3',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-11_abcsx3',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-12_lnnngn',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-12_lnnngn',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-8_zs0gbq',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-8_zs0gbq',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-10_qq9vfn',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-10_qq9vfn',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-9_wbnhw3',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-9_wbnhw3',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-1_dbqovo',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-1_dbqovo',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-3_h7c7dp',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-3_h7c7dp',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-5_kd5hfo',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-5_kd5hfo',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-6_qae2bi',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-6_qae2bi',
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-2_trpwy8',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593186877/bedroom/bedroom-2_trpwy8',
      },
    ]
  },
  {
    key: 3,
    imageFileName: TypesPortfolio.ChildrenRoom,
    header: "Детская",
    subheader: "Шторы и покрывала в детской комнате",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-7_hy3j5n',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-7_hy3j5n'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-2_ojjpcv',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-2_ojjpcv'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-4_p8rkkc',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-4_p8rkkc'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-1_jjgnls',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187435/children-room/children-room-1_jjgnls'
      },
    ]
  },
  {
    key: 4,
    imageFileName: TypesPortfolio.Kitchen,
    header: "Кухни и столовые",
    subheader: "Шторы в кухонных помещениях, столовых и верандах",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-15_slthum',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-15_slthum'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-14_hy34kd',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-14_hy34kd'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-13_ddntra',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-13_ddntra'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-10_vyx4bo',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-10_vyx4bo'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-12_x38l51',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-12_x38l51'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-9_peiyax',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-9_peiyax'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-11_tij8wc',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-11_tij8wc'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-8_yxp5qc',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-8_yxp5qc'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-7_amvvcg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-7_amvvcg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-4_jil10v',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-4_jil10v'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-1_ggqztu',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-1_ggqztu'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-5_myst8y',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-5_myst8y'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-2_arf8t6',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-2_arf8t6'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-3_uqhulb',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-3_uqhulb'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-6_i3fnqv',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593187992/kitchen/kitchen-6_i3fnqv'
      },
    ]
  },
  {
    key: 5,
    imageFileName: TypesPortfolio.WeddingDecoration,
    header: "Свадебное оформление",
    subheader: "Текстиль и украшение на свадебные церимонии и торжества",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-19_mwszqr',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-19_mwszqr'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-18_urg43m',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-18_urg43m'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-14_da34ja',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-14_da34ja'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-12_yneemh',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-12_yneemh'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-16_frhhcs',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-16_frhhcs'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-11_batoub',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-11_batoub'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-9_afchlf',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-9_afchlf'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-2_bicquw',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-2_bicquw'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-8_udn7vp',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-8_udn7vp'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-4_msy2io',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188361/wedding-decoration/wedding-decoration-4_msy2io'
      },
    ]
  },
  {
    key: 6,
    imageFileName: TypesPortfolio.CorporateOrders,
    header: "Корпаротивные заказы",
    subheader: "Оформление и авторский надзор кораоротивных заказов",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-6_qsmmyg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-6_qsmmyg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-7_ljhdfr',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-7_ljhdfr'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-4_l2eutn',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-4_l2eutn'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-5_zkjhga',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-5_zkjhga'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-3_vwcivy',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-3_vwcivy'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-11_wf01lf',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-11_wf01lf'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-1_hwg6za',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-1_hwg6za'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-12_d0ql10',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-12_d0ql10'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-13_kdetxb',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-13_kdetxb'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-10_vgqlo3',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593188781/corporate-orders/corporate-orders-10_vgqlo3'
      },
    ]
  },
  {
    key: 7,
    imageFileName: TypesPortfolio.WoodHouse,
    header: "Деревянные дома",
    subheader: "Текстильное оформление в деревянных текстурах",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-1_cahhza',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-1_cahhza'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-2_tl3zfo',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-2_tl3zfo'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-3_qhvz7o',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-3_qhvz7o'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-6_vwhug9',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-6_vwhug9'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-4_y7gt2x',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593285226/wood-house/wood-house-4_y7gt2x'
      },
    ]
  },
  {
    key: 8,
    imageFileName: TypesPortfolio.Cabinets,
    header: "Кабинет",
    subheader: "Оформление рабочего домашнего и офисного пространства",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-3_ali7xy',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-3_ali7xy'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-2_nm4oh3',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-2_nm4oh3'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-4_s2lflu',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-4_s2lflu'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-1_w4wqtq',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1593189815/cabinets/cabinets-1_w4wqtq'
      },
    ]
  },
  {
    key: 9,
    imageFileName: TypesPortfolio.InteriorDecor,
    header: "Декор интерьера",
    subheader: "Эксклюзивный декор ручной работы",
    images: [
      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350949/interior-decor/IMG_20241107_175258_fxvwbf.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350949/interior-decor/IMG_20241107_175258_fxvwbf.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350947/interior-decor/IMG_20241104_234857_i3tcja.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350947/interior-decor/IMG_20241104_234857_i3tcja.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350946/interior-decor/IMG_20241104_082232_383_ynvbw3.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350946/interior-decor/IMG_20241104_082232_383_ynvbw3.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350876/interior-decor/IMG_20250316_110930_t9nzbp.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350876/interior-decor/IMG_20250316_110930_t9nzbp.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350875/interior-decor/IMG_20250201_222702_ykzfzj.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350875/interior-decor/IMG_20250201_222702_ykzfzj.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20250201_142726_vnijgx.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20250201_142726_vnijgx.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20241202_230117_d04ncx.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20241202_230117_d04ncx.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20250201_172637_ddm99p.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350874/interior-decor/IMG_20250201_172637_ddm99p.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350873/interior-decor/IMG_20250201_132941_ckfbgq.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350873/interior-decor/IMG_20250201_132941_ckfbgq.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350872/interior-decor/IMG_20250131_144354_vkgyww.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350872/interior-decor/IMG_20250131_144354_vkgyww.jpg'
      },

      {
        original: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350872/interior-decor/IMG_20241104_184103_396_qfyk5i.jpg',
        thumbnail: 'https://res.cloudinary.com/db9gna8cy/image/upload/v1748350872/interior-decor/IMG_20241104_184103_396_qfyk5i.jpg'
      },
    ]
  }
]


// const {resources} = await cloudinary.search
//       .expression('folder=csv')
//       .execute()

// const url = cloudinary.url('cover', {
//     transformation: [
//         {quality: 'auto'},
//     ]
// })

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

// async function findImages() {
//     const { resources } = await cloudinary.search
//         .expression('folder=bedroom')
//         .execute()

//     console.log(resources)
// }

// const url = ''

function Portfolio(props: IProps) {
  return (
    <PageSection className={clsx("bg-white", style.portfolioSection)} id={props.anhor}>
      <Row>
        <SectionHeader header={props.name} subheader={props.subtext} />
      </Row>
      <Row>
        {portfolios.map(
          ({ header, imageFileName, subheader, images }) => (
            <PortfolioItem
              key={header}
              imageFileName={imageFileName}
              header={header}
              subheader={subheader}
              images={images}
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};
// <Wrapper className="max-w-7xl">
//     <h2 className="sr-only">Image Gallery</h2>
//     <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
//         {pictures.map(picture => {
//             return (
//                 <li key={picture.id}>
//                     <Link
//                         className="relative group"
//                         key={picture.id}
//                         href={`/photos/${picture.id}`}
//                         passHref
//                     >
//                         <CldImage
//                             src={picture.image.publicId}
//                             width={730}
//                             height={900}
//                             crop="fill"
//                             alt={picture.image.alt}
//                         />
//                         <div className="lg:opacity-0 lg:group-hover:opacity-100 
//               transition-opacity absolute bottom-0 left-0
//               w-full bg-gradient-to-t from-zinc-900 px-5 py-4">
//                             <h3 className="text-white text-3xl lg:translate-y-2 
//                 lg:group-hover:translate-y-0 
//                 transition-transform">
//                                 {picture.title}
//                             </h3>
//                         </div>
//                     </Link>
//                 </li>
//             )
//         })}
//     </ul>
// </Wrapper>

export default Portfolio;
// const [resources, setResources] = useState([]);

// useEffect(() => {
//     async function fetchData() {
//         try {
//             const { resources } = await cloudinary.search.expression('tags=bedroom').execute();

//                 //.expression('folder=bedroom')
//                 //.execute();
//             //console.log(resources);
//             setResources(resources);

//             console.log('all ok');
//         } catch (error) {

//             console.log('errrrrrrrrrrrrrrrrrrrrrrror');
//             //console.error('Error fetching data:', error);
//         }
//     }

//     fetchData();

//         const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
//   headers: {
//     Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//   }
// }).then(r => r.json());
// }, []);

// return (
//      <div className="h-screen">
//         'Hiiii'
//   {resources.map((resource) => (
//     // <CldImage src={resource} alt={"bedroom"}/>
//     'Hiiii'
//   ))}
// </div>
// )
// (<CldImage
//     width="960"
//     height="600"
//     src='https://res.cloudinary.com/db9gna8cy/image/upload/v1600356161/living-room/living-room-25_wgemds.jpg'
//     sizes="100vw"
//     alt="Description of my image"
// />)

// export const getStaticProps = async ({ }) => ({
//     props: {

//     },
// })


// const Portfolio: React.FunctionComponent<IProps> = (props) => {

//     return (
//         <>
//             <CldImage
//                 width="960"
//                 height="600"
//                 src={url}
//                 sizes="100vw"
//                 alt="Description of my image"
//             />
//         </>
//     )
// }

// export default Portfolio