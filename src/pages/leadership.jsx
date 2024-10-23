import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/Leadership/Hero'
import NavigatingAscent from '@/components/Leadership/NavigatingAscent'
import CurucialSupport from '@/components/Leadership/CurucialSupport'
import TailoredTraining from '@/components/Leadership/TailoredTraining'
import Conclusion from '@/components/Leadership/Conclusion'
import TailoredPrograms from '@/components/Leadership/TailoredPrograms'

export default function Leadership({ seo }) {
  const { t } = useTranslation("leadership");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/leadership.jpg',
    title: t("Title"),
    subTitle: t("Sub Title"),
    triangle: false
  }

  return (
    <>
      <Head>
        <title>Analytic Coaching</title>
        <meta property="og:title" content={seo?.attributes?.metaTitle} key="title" />
        <meta property="og:description" content={seo?.attributes?.metaDescription} key="desc" />
        <meta property="description" content={seo?.attributes?.metaDescription} key="description" />
      </Head>
      <Hero data={HeroProps} />
      <NavigatingAscent />
      <CurucialSupport />
      <TailoredTraining />
      <TailoredPrograms />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'leadership')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'leadership'],
          nextI18NextConfig
        )),
        seo: seo ? seo : null
      },
    })
  } catch (errorCategories) {
    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'leadership'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}