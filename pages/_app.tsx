
import Feedback from '@/components/Feedback/Feedback'
import NavBar from '@/components/NavBar/NavBar'
import Services from '@/components/Services/Services'
import Top from '@/components/Top/Top'
import Head from 'next/head';
import { Images } from '@/public/images'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/main.scss';
import Portfolio from '@/components/Portfolio/Portfolio'
import Address from '@/components/Address/Address'
import Footer from '@/components/Footer/Footer'
import Clients from '@/components/Clients/Clients'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Студия штор Кружева</title>
      <meta name="description" content="Широкий ассортимент тканей, карнизов и рулонных штор" />
      <meta name="keywords" content="шторы, шторы тверь, шторы на заказ, жалюзи на заказ, оформление окон, покрывала,оформление свадеб" />
      <link rel="icon" href={Images.Icon} />
    </Head>
    <NavBar brand='Студия штор Кружева' anchors={["Услуги", "Портфолио", "Обратная связь", "Адрес"]} menuText='Меню' />
    <Top imageFileName={Images.Header} header='Шторы на заказ' subheader='Широкий ассортимент тканей, карнизов и рулонных штор' />
    <Services anchor='Услуги' rootHeader='Услуги' rootSubHeader='Наша студия штор предлогает ряд услуг: ' className='bg-light' />
    <Portfolio anhor='Портфолио' name='Портфолио' subtext='Здесь представлены наши работы' className='bg-white' />
    <Feedback anchor='Обратная связь' rootHeader='Обратная связь' rootSubHeader='Свяжитесь с нами!' className='bg-light' />
    <Clients anchor='Наши клиенты' header='Наши клиенты' />
    <Address anchor='Адрес' rootHeader='Адрес' rootSubHeader='Приходите к нам в салон!' workTime='Пн-Пт : 10.00 - 19.00, Сб: 10.00 - 17.00' adressText='г. Тверь, ул. Кольцевая, д.64/66 (ТЦ "Кредо"), 3-ий этаж' contacts='Евгения: +7 (903) 804 65 72, Жанна: +7 (963) 154 32 02' className='bg-light' />
    <Footer copyright={'Copyright © Кружева 2025'} instagram={'https://www.instagram.com/salon_kruzheva'} telegram={'tg://msg?to=+79038046572'} whatsuapp={'https://wa.me/79038046572'} viber={'viber://chat?number=%2B79038046572'} vk={'https://vk.com/krujeva_salon'} />
  </>

  // <Component {...pageProps} />
}
