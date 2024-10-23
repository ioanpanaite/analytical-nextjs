import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function VectorAnimation() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="innovation-animation" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <svg width="622" height="632" viewBox="0 0 622 632" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M264.899 310.329L251.515 339.478L395.266 631.96H621.6L308.024 0L0 631.861H26.9657C67.2161 542.629 260.14 149.711 308.024 52.3494L584.859 608.777H412.357L264.998 310.329H264.899Z" fill="#BC28FF" />
        </svg>
      </div>
    </>
  );
}
