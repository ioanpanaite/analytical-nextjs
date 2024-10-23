import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'
import axios from 'axios';
import Head from 'next/head'

import Hero from '@/components/Hero'
import Transformation from '@/components/Transformation'
import Possibility from "@/components/Possibility";
import Innovation from "@/components/Innovation";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const HeroProps = {
  animate: true,
  backgroundImage: '',
  triangle: true
}

export default function IndexPage({ seo }) {
  const { t: home } = useTranslation('home')

  const HeroContent = () => {
    return (
      <>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: { xs: 24, sm: 30, md: 35 },
              color: theme => theme.palette.primary.main
            }}
          >
            {home('Welcome to Analytic Coaching')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              pb: { xs: 16, sm: 0 },
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <Typography variant="body1" textAlign="center" sx={{ color: theme => theme.palette.primary.main }}>
              {home("Welcome to Analytic Coaching Description")}
            </Typography>
          </Stack>
        </Stack>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Analytic Coaching</title>
        <meta property="og:title" content={seo?.attributes?.metaTitle} key="title" />
        <meta property="og:description" content={seo?.attributes?.metaDescription} key="desc" />
        <meta property="description" content={seo?.attributes?.metaDescription} key="description" />
      </Head>
      <Hero data={HeroProps} HeroContent={HeroContent} />
      <Transformation />
      <Possibility />
      <Innovation />
      <Vision />
      <Contact />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/seos`);
    const seo = res.data.data?.find(val => val.attributes.Slug === '/')

    return ({
      props: {
        ...(await serverSideTranslations(
          locale,
          ['home', 'common'],
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
          ['home', 'common'],
          nextI18NextConfig
        )),
        seo: null
      },
    })
  }
}
