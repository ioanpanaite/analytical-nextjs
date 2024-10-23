import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/ShapingBusinessCulture/Hero'
import EssenceOrganizational from '@/components/ShapingBusinessCulture/EssenceOrganizational'
import ShapingCulture from '@/components/ShapingBusinessCulture/ShapingCulture'
import StrikingBalance from '@/components/ShapingBusinessCulture/StrikingBalance'
import FitHiring from '@/components/ShapingBusinessCulture/FitHiring'

export default function ShapingBusinessCulture({ seo }) {
  const { t } = useTranslation("shaping-business-culture");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/shaping-business-culture.jpg',
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
      <EssenceOrganizational />
      <ShapingCulture />
      <FitHiring />
      <StrikingBalance />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'shaping-business-culture')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'shaping-business-culture'],
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
          ['common', 'shaping-business-culture'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}