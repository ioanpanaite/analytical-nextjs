import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/Training/Hero'
import DynamicTraining from '@/components/Training/DynamicTraining'
import Conclusion from '@/components/Training/Conclusion'
import TrainingCaseStudy from '@/components/Training/TrainingCaseStudy'
import TailoredTraining from '@/components/Training/TailoredTraining'

export default function Training({ seo }) {
  const { t } = useTranslation("training");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/training.jpg',
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
      <DynamicTraining />
      <TailoredTraining />
      <TrainingCaseStudy />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'training')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'training'],
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
          ['common', 'training'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}