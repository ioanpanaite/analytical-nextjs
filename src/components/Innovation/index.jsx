import * as React from 'react';
import { useTranslation } from 'next-i18next';
import LeftSortView from '@/components/Share/LeftSortView'
import AnalyticAnimation from '@/components/Share/AnalyticAnimation'

export default function Innovation() {
  const { t } = useTranslation('home');
  const handleAnimation = () => (<> <AnalyticAnimation /></>)

  const data = {
    title: t("Innovation Title"),
    subTitle: t("Innovation Sub Title"),
    subColor: "dark",
    triangleColor: "light",
    mobileTitleColor: '#472CBB',
    mobileTextColor: '#472CBB',
    description: t("Innovation Description"),
    backgroundImage: '/images/innovation.jpg',
    mobileGround: '/images/pages/home-innovation.jpg',
  }
  
  return (
    <>
      <LeftSortView data={data} Animation={handleAnimation} />
    </>
  );
}
