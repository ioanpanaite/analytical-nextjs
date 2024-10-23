import * as React from 'react';
import { useTranslation } from 'next-i18next';
import RightSortView from '@/components/Share/RightSortView'
import VisionAnimation from './VisionAnimation'

export default function Vision() {
  const { t } = useTranslation('home');
  const handleAnimation = () => (<> <VisionAnimation /></>)

  const data = {
    title: t("Vision Title"),
    titleTo: t("Vision To"),
    subTitle: t("Vision Sub Title"),
    subColor: "ground",
    triangleColor: "light",
    description: t("Vision Description"),
    backgroundImage: '/images/vision.jpg',
    mobileGround: '/images/pages/home-vision.jpg',
  }

  return (
    <>
      <RightSortView data={data} Animation={handleAnimation} />
    </>
  );
}
