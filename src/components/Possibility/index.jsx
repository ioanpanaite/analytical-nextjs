import * as React from 'react';
import { useTranslation } from 'next-i18next';
import RightSortView from '@/components/Share/RightSortView'
import CoachingAnimation from '@/components/Share/CoachingAnimation'

export default function Possibility() {
  const { t } = useTranslation('home');

  const data = {
    title: t("Possibility Title"),
    titleTo: t("Possibility To"),
    subTitle: t("Possibility Sub Title"),
    subColor: "possible",
    triangleColor: "white",
    mobileTitleColor: '#472CBB',
    mobileTextColor: '#472CBB',
    description: t("Possibility Description"),
    backgroundImage: '/images/possibility.jpg',
    mobileGround: '/images/pages/home-possibility.jpg',
  }
  
  const handleAnimation = () => (<> <CoachingAnimation /></>)

  return (
    <>
      <RightSortView data={data} Animation={handleAnimation} />
    </>
  );
}
