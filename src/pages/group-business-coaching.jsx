import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/GroupBusinessCoaching/Hero'
import BusinessCoaching from '@/components/GroupBusinessCoaching/BusinessCoaching'
import GroupBusinessAnalytic from '@/components/GroupBusinessCoaching/GroupBusinessAnalytic'
import CaseStudy from '@/components/GroupBusinessCoaching/CaseStudy'
import Conclusion from '@/components/GroupBusinessCoaching/Conclusion'
import CoachingDifference from '@/components/GroupBusinessCoaching/CoachingDifference'


export default function GroupBusinessCoaching({ seo }) {
  const { t } = useTranslation("group-business-coaching");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/group-business-coaching.jpg',
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
      <BusinessCoaching />
      <GroupBusinessAnalytic />
      <CoachingDifference />
      <CaseStudy />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'group-business-coaching')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'group-business-coaching'],
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
          ['common', 'group-business-coaching'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}