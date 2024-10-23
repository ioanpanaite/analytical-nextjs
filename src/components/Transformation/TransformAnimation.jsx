import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function VectorAnimation() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="transform-animation" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <svg width="795" height="900" viewBox="0 0 795 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='path' d="M312.971 373.363L294.885 412.754L489.144 808H795L371.249 -46L-45 807.866H-8.55981C45.8325 687.282 306.541 156.313 371.249 24.7424L742.349 767.672H509.239L313.105 373.363H312.971Z" fill="#FB64B3" strokeWidth={5} stroke='none' />
        </svg>
      </div>
    </>
  );
}
