import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/CoachingForLeaders/Hero'
import TraditionalCoaching from '@/components/CoachingForLeaders/TraditionalCoaching'
import AnalyticCoaching from '@/components/CoachingForLeaders/AnalyticCoaching'
import InnerLeader from '@/components/CoachingForLeaders/InnerLeader'
import Conclusion from '@/components/CoachingForLeaders/Conclusion'


export default function CoachingForLeaders({ seo }) {
  const { t } = useTranslation("coaching-for-leaders");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/coaching-for-leaders.jpg',
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
      <InnerLeader />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'coaching-for-leaders')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'coaching-for-leaders'],
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
          ['common', 'coaching-for-leaders'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}