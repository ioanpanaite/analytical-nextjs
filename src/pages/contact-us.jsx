import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js'

import Hero from '@/components/ContactUs/Hero'
import ContactForm from '@/components/ContactUs/ContactForm'

export default function ContactUs() {
  const { t } = useTranslation("contact-us");

  const HeroProps = {
    animate: false,
    backgroundImage: '/images/hero/background.jpg',
    title: t("Title"),
    subTitle: t("Sub Title"),
    triangle: false
  }

  return (
    <>
      <Hero data={HeroProps} />
      <ContactForm />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', 'contact-us'],
      nextI18NextConfig
    )),
  },
})