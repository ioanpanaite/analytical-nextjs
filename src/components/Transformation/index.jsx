import * as React from 'react';
import { useTranslation } from 'next-i18next';
import LeftSortView from '@/components/Share/LeftSortView'
import AnalyticAnimation from '@/components/Share/AnalyticAnimation'

export default function Transformation() {
  const { t } = useTranslation('home');
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {

    const handleMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleMobile()
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, [])

  const data = {
    title: t("Transform Title"),
    subTitle: t("Transform Sub Title"),
    subColor: "main",
    triangleColor: "white",
    description: <p>{t("Transform Description")}</p>,
    backgroundImage: '/images/transformation.jpg',
    mobileGround: '/images/pages/home-transform.jpg',
    dividerHidden: isMobile
  }

  const handleAnimation = () => (<> <AnalyticAnimation /></>)

  return (
    <>
      <LeftSortView data={data} Animation={handleAnimation} />
    </>
  );
}
