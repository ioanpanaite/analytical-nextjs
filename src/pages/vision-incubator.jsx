import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/VisionIncubator/Hero'
import NurturingSeed from '@/components/VisionIncubator/NurturingSeed'
import RoleVisionIncubator from '@/components/VisionIncubator/RoleVisionIncubator'
import Transformative from '@/components/VisionIncubator/Transformative'
import Conclusion from '@/components/VisionIncubator/Conclusion'

export default function VisionIncubator({ seo }) {
  const { t } = useTranslation("vision-incubator");
  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/vision-incubator.jpg',
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
      <NurturingSeed />
      <RoleVisionIncubator />
      <Transformative />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'vision-incubator')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'vision-incubator'],
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
          ['common', 'vision-incubator'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}