import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/TeamBuilding/Hero'
import TailorMade from '@/components/TeamBuilding/TailorMade'
import RoleFun from '@/components/TeamBuilding/RoleFun'
import Conclusion from '@/components/TeamBuilding/Conclusion'

export default function TeamBuilding({ seo }) {
  const { t } = useTranslation("team-building");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/team-building.jpg',
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
      <TailorMade />
      <RoleFun />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'team-building')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'team-building'],
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
          ['common', 'team-building'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}