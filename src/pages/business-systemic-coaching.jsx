import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/BusinessSystemic/Hero'
import TraditionalCoaching from '@/components/BusinessSystemic/TraditionalCoaching'
import AnalyticCoaching from '@/components/BusinessSystemic/AnalyticCoaching'
import Conclusion from '@/components/BusinessSystemic/Conclusion'


export default function BusinessSystemicCoaching({ seo }) {
  const { t } = useTranslation("business-systemic-coaching");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/business-systemic-coaching.jpg',
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
      <TraditionalCoaching />
      <AnalyticCoaching />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'business-systemic-coaching')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'business-systemic-coaching'],
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
          ['common', 'business-systemic-coaching'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}