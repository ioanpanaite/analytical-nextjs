import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/HighPerformance/Hero'
import HighPotentialTeam from '@/components/HighPerformance/HighPotentialTeam'
import AnalyticCoaching from '@/components/HighPerformance/AnalyticCoaching'
import ImpactPerformance from '@/components/HighPerformance/ImpactPerformance'

export default function HighPerformanceCoaching({ seo }) {
  const { t } = useTranslation("high-performance-coaching");
  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/high-performance.jpg',
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
      <HighPotentialTeam />
      <AnalyticCoaching />
      <ImpactPerformance />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'high-performance-coaching')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'high-performance-coaching'],
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
          ['common', 'high-performance-coaching'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}