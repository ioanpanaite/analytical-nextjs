import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/BridgingGap/Hero'
import BusinessCoaching from '@/components/BridgingGap/BusinessCoaching'
import Deeper from '@/components/BridgingGap/Deeper'
import ImpactPerformance from '@/components/BridgingGap/ImpactPerformance'
import PowerfulApproach from '@/components/BridgingGap/PowerfulApproach'
import Conclusion from '@/components/BridgingGap/Conclusion'

export default function BridginTheGap({ seo }) {
  const { t } = useTranslation("bridging-the-gap");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/bridgin-the-gap.jpg',
    title: t("Title"),
    subTitle: t("Sub Title"),
    triangle: true
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
      <BusinessCoaching />
      <Deeper />
      <ImpactPerformance />
      <PowerfulApproach />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'bridging-the-gap')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'bridging-the-gap'],
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
          ['common', 'bridging-the-gap'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}