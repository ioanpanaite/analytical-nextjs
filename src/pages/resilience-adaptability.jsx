import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/ResilienceAdaptability/Hero'
import Conclusion from '@/components/ResilienceAdaptability/Conclusion'
import GirdContent from "@/components/Share/GirdContent";
import { useTheme } from "@emotion/react";

export default function ResilienceAdaptability({ seo }) {
  const { t } = useTranslation('resilience-adaptability');
  const theme = useTheme()

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/resilience-adaptability.jpg',
    title: t("Title"),
    subTitle: "",
    triangle: true
  }

  const CoachingGridData = [
    {
      title: t("1. Resilience Building"),
      description: t("1. Resilience Building Description")
    },
    {
      title: t("2. Leadership Support"),
      description: t("2. Leadership Support Description")
    },
    {
      title: t("3. Strategic Adaptation"),
      description: t("3. Strategic Adaptation Description")
    },
    {
      title: t("4. Conflict Resolution"),
      description: t("4. Conflict Resolution Description")
    },
    {
      title: t("5. Crisis Communication"),
      description: t("5. Crisis Communication Description")
    },
    {
      title: t("6. Cultural Preservation"),
      description: t("6. Cultural Preservation Description")
    }
  ]

  const AnatomyGridData = [
    {
      title: t("1. Financial Turmoil"),
      description: t("1. Financial Turmoil Description")
    },
    {
      title: t("2. Operational Disruptions"),
      description: t("2. Operational Disruptions Description")
    },
    {
      title: t("3. Leadership Challenges"),
      description: t("3. Leadership Challenges Description")
    },
    {
      title: t("4. Employee Morale and Well-Being"),
      description: t("4. Employee Morale and Well-Being Description")
    },
    {
      title: t("5. Market Shifts and Competition"),
      description: t("5. Market Shifts and Competition Description")
    }
  ]

  const ProcessGridData = [
    {
      title: t("1. Assessment"),
      description: t("1. Assessment Description")
    },
    {
      title: t("2. Goal Setting"),
      description: t("2. Goal Setting Description")
    },
    {
      title: t("3. Tailored Coaching"),
      description: t("3. Tailored Coaching Description")
    },
    {
      title: t("4. Implementation"),
      description: t("4. Implementation Description")
    },
    {
      title: t("5. Monitoring and Adjustment"),
      description: t("5. Monitoring and Adjustment Description")
    },
    {
      title: t("6. Resilience Building"),
      description: t("6. Resilience Building Description")
    }
  ]

  const BenifitsGridData = [
    {
      title: t("1. Improved Decision-Making"),
      description: t("1. Improved Decision-Making Description")
    },
    {
      title: t("2. Enhanced Resilience"),
      description: t("2. Enhanced Resilience Description")
    },
    {
      title: t("3. Crisis Mitigation"),
      description: t("3. Crisis Mitigation Description")
    },
    {
      title: t("4. Stronger Organizational Culture"),
      description: t("4. Stronger Organizational Culture Description")
    },
    {
      title: t("5. Long-Term Sustainability"),
      description: t("5. Long-Term Sustainability Description")
    },
    {
      title: t("6. Employee Well-Being"),
      description: t("6. Employee Well-Being Description")
    }
  ]

  const AnatomyGridProps = {
    title: t("Anatomy Title"),
    subTitle: t("Anatomy Description"),
    content: AnatomyGridData,
    backgroundColor: 'white'
  }

  const ProcessGridProps = {
    title: t("Process Title"),
    subTitle: t("Process Description"),
    content: ProcessGridData,
    backgroundColor: 'white'
  }

  const CoachingGridProps = {
    title: t("Coaching Title"),
    subTitle: t("Coaching Description"),
    content: CoachingGridData,
    backgroundColor: theme.palette.primary.grey
  }

  const BenifitsGridProps = {
    title: t("Benifits Title"),
    subTitle: t("Benifits Description"),
    content: BenifitsGridData,
    backgroundColor: theme.palette.primary.grey
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
      <GirdContent data={AnatomyGridProps} />
      <GirdContent data={CoachingGridProps} />
      <GirdContent data={ProcessGridProps} />
      <GirdContent data={BenifitsGridProps} />
      <Conclusion />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === 'resilience-adaptability')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common', 'resilience-adaptability'],
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
          ['common', 'resilience-adaptability'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}