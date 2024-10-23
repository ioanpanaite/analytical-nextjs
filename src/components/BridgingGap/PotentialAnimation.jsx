import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PotentialAnimation({ className, ...props }) {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    AOS.init();

    const handleMobile = () => {
      if (window.innerWidth <= 768) {
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

  return (
    <>
      <div className="potential-animation" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <svg width="782" height="795" viewBox="0 0 782 795" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M332.913 390.008L316.093 426.641L496.753 794.22H781.2L387.111 0L0 794.095H33.8894C84.4743 681.953 326.933 188.151 387.111 65.7904L732.235 756.714H515.442L333.038 390.008H332.913Z" fill="#09ECD0" />
        </svg>
      </div>
    </>
  );
}
