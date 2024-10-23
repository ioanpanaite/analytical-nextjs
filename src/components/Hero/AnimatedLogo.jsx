import { useEffect, useState } from 'react';

export default function AnimatedLogo({ className, ...props }) {
  const [isMobile, setIsMobile] = useState(true)
  const { available } = props

  useEffect(() => {
    if (!available) {
      handleAnimate()
    }

    const handleScroll = () => {
      if (window.scrollY < 700) {
        handleAnimate()
      } else {
        handleRemoveAnimate()
      }
    };
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleMobile);
    };
  }, [available])

  const handleRemoveAnimate = () => {
    const s3FirstSvgTargetElement = document.getElementById("logo-ac-3-path-3a");
    const s3SecondSvgTargetElement = document.getElementById("logo-ac-3-path-3b");
    const s3ThirdSvgTargetElement = document.getElementById("logo-ac-3-path-3c");
    const s3FourthSvgTargetElement = document.getElementById("wordmark-ac-3-clip");


    s3FirstSvgTargetElement.classList.remove("dash-draw-3a");
    s3SecondSvgTargetElement.classList.remove("dash-draw-3b");
    s3ThirdSvgTargetElement.classList.remove("dash-draw-3c");
    s3FourthSvgTargetElement.classList.remove("clip-animate-3");
  }

  const handleAnimate = () => {
    const s3FirstSvgTargetElement = document.getElementById("logo-ac-3-path-3a");
    const s3SecondSvgTargetElement = document.getElementById("logo-ac-3-path-3b");
    const s3ThirdSvgTargetElement = document.getElementById("logo-ac-3-path-3c");
    const s3FourthSvgTargetElement = document.getElementById("wordmark-ac-3-clip");

    // Add the 'clip-animate-3' to the class list of the 'logo AC' SVG element
    if (s3FirstSvgTargetElement && s3SecondSvgTargetElement && s3ThirdSvgTargetElement && s3FourthSvgTargetElement) {
      s3FirstSvgTargetElement.classList.add("dash-draw-3a");
      s3SecondSvgTargetElement.classList.add("dash-draw-3b");
      s3ThirdSvgTargetElement.classList.add("dash-draw-3c");
      s3FourthSvgTargetElement.classList.add("clip-animate-3");
    }
  }

  return (
    <>
      {!isMobile ?
        <>
          <p>
            <svg id="logo-ac-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="212" height="136">
              <defs>
                <clippath id="logo-ac-3-clip">
                  <path
                    d="M166.31 68.053 166 68h46V0H0v132h10.127l42.288-86.186 7.004 14.067L24.033 132H37v4h175v-12.712l-45.69-55.235z">
                  </path>
                </clippath>
              </defs>
              <g fill="none" stroke="#472CBB" strokeMiterlimit="10" strokeWidth="5">
                <path
                  d="M3.5 134 65.415 7.814l44.812 89.816c10.729 20.403 32.131 34.317 56.784 34.317 16.034 0 30.688-5.895 41.928-15.625"
                  id="logo-ac-3-path-3a"></path>
                <path
                  d="M52.4 64.528 85 130h41.25l-16.021-32.367-.002-.002c-4.681-8.902-7.329-19.039-7.329-29.795 0-35.409 28.704-64.113 64.113-64.113 15.425 0 29.864 5.215 42.202 15.885"
                  id="logo-ac-3-path-3b"></path>
                <path
                  d="m209 16.833-22.017 26.48a31.367 31.367 0 0 0-19.973-7.143c-17.397 0-31.5 14.102-31.5 31.5 0 17.396 14.103 31.5 31.5 31.5 8.51 0 16.226-3.381 21.895-8.865"
                  id="logo-ac-3-path-3c"></path>
              </g>
            </svg>
          </p>
          <p>
            <svg id="wordmark-ac-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="621" height="69" viewBox="0 0 621 69">
              <defs>
                <clippath id="wordmark-ac-3-clip">
                  <path d="M588.281 0H0v69h645c-6.623-136.1036-50.065-41-31.621-69z"></path>
                </clippath>
              </defs>
              <g fill="#472CBB" style={{ clipPath: 'url(#wordmark-ac-3-clip)' }}>
                <path d="M0.937812 53.0869L22.2178 3.38691H32.2978L53.5778 53.0869H41.9578L37.5478 42.5869H16.9678L12.5578 53.0869H0.937812ZM27.2578 18.0169L20.9578 32.9269H33.4878L27.2578 18.0169ZM57.8478 53.0869V18.0869H68.4178V21.6569C70.4245 18.7636 73.6678 17.3169 78.1478 17.3169C82.3945 17.3169 85.7078 18.7402 88.0878 21.5869C90.5145 24.4336 91.7278 28.1902 91.7278 32.8569V53.0869H81.1578V34.6769C81.1578 29.4969 79.2678 26.9069 75.4878 26.9069C73.3878 26.9069 71.6845 27.6769 70.3778 29.2169C69.0711 30.7569 68.4178 33.0436 68.4178 36.0769V53.0869H57.8478ZM114.097 53.8569C109.571 53.8569 105.721 52.0602 102.547 48.4669C99.4205 44.8736 97.8572 40.5802 97.8572 35.5869C97.8572 30.5936 99.4205 26.3002 102.547 22.7069C105.721 19.1136 109.571 17.3169 114.097 17.3169C118.111 17.3169 121.284 18.7402 123.617 21.5869V18.0869H134.187V53.0869H123.617V49.5869C121.284 52.4336 118.111 53.8569 114.097 53.8569ZM110.667 41.8169C112.161 43.4502 114.097 44.2669 116.477 44.2669C118.857 44.2669 120.771 43.4502 122.217 41.8169C123.711 40.1836 124.457 38.1069 124.457 35.5869C124.457 33.0669 123.711 30.9902 122.217 29.3569C120.771 27.7236 118.857 26.9069 116.477 26.9069C114.097 26.9069 112.161 27.7236 110.667 29.3569C109.221 30.9902 108.497 33.0669 108.497 35.5869C108.497 38.1069 109.221 40.1836 110.667 41.8169ZM142.887 53.0869V0.58691H153.457V53.0869H142.887ZM176.514 67.7169H165.104L172.384 51.0569L157.824 18.0869H169.374L178.054 39.7169L186.664 18.0869H198.284L176.514 67.7169ZM220.346 53.5069C216.24 53.5069 212.856 52.3869 210.196 50.1469C207.583 47.8602 206.276 44.5702 206.276 40.2769V27.2569H199.276V18.0869H206.276V8.35691H216.846V18.0869H226.646V27.2569H216.846V38.1069C216.846 40.2069 217.313 41.7236 218.246 42.6569C219.18 43.5902 220.696 44.0569 222.796 44.0569C224.383 44.0569 225.666 43.8469 226.646 43.4269V52.8069C225.106 53.2736 223.006 53.5069 220.346 53.5069ZM238.576 13.3269C236.803 13.3269 235.263 12.6969 233.956 11.4369C232.65 10.1302 231.996 8.56691 231.996 6.74691C231.996 4.92691 232.65 3.38691 233.956 2.12691C235.263 0.820244 236.803 0.166911 238.576 0.166911C240.443 0.166911 242.006 0.820244 243.266 2.12691C244.573 3.38691 245.226 4.92691 245.226 6.74691C245.226 8.56691 244.573 10.1302 243.266 11.4369C242.006 12.6969 240.443 13.3269 238.576 13.3269ZM233.326 53.0869V18.0869H243.896V53.0869H233.326ZM269.124 53.8569C263.897 53.8569 259.487 52.1302 255.894 48.6769C252.3 45.2236 250.504 40.8602 250.504 35.5869C250.504 30.3136 252.3 25.9502 255.894 22.4969C259.487 19.0436 263.897 17.3169 269.124 17.3169C272.717 17.3169 276.03 18.2502 279.064 20.1169C282.097 21.9836 284.36 24.4569 285.854 27.5369L276.614 32.4369C275.074 28.9369 272.577 27.1869 269.124 27.1869C266.884 27.1869 264.994 27.9802 263.454 29.5669C261.914 31.1536 261.144 33.1602 261.144 35.5869C261.144 38.0136 261.914 40.0202 263.454 41.6069C264.994 43.1936 266.884 43.9869 269.124 43.9869C272.577 43.9869 275.074 42.2369 276.614 38.7369L285.854 43.6369C284.36 46.7169 282.097 49.1902 279.064 51.0569C276.03 52.9236 272.717 53.8569 269.124 53.8569ZM331.023 53.9269C323.929 53.9269 317.863 51.4302 312.823 46.4369C307.829 41.3969 305.333 35.3302 305.333 28.2369C305.333 21.1436 307.829 15.1002 312.823 10.1069C317.863 5.06691 323.929 2.54691 331.023 2.54691C336.109 2.54691 340.706 3.78358 344.813 6.25691C348.919 8.73024 352.069 12.0202 354.263 16.1269L344.463 21.4469C341.476 16.0336 336.996 13.3269 331.023 13.3269C327.009 13.3269 323.579 14.7969 320.733 17.7369C317.933 20.6769 316.533 24.1769 316.533 28.2369C316.533 32.2969 317.933 35.7969 320.733 38.7369C323.579 41.6769 327.009 43.1469 331.023 43.1469C336.996 43.1469 341.476 40.4402 344.463 35.0269L354.263 40.3469C352.069 44.4536 348.919 47.7436 344.813 50.2169C340.706 52.6902 336.109 53.9269 331.023 53.9269ZM389.12 48.6069C385.526 52.1069 381.186 53.8569 376.1 53.8569C371.013 53.8569 366.673 52.1069 363.08 48.6069C359.486 45.0602 357.69 40.7202 357.69 35.5869C357.69 30.4536 359.486 26.1369 363.08 22.6369C366.673 19.0902 371.013 17.3169 376.1 17.3169C381.186 17.3169 385.526 19.0902 389.12 22.6369C392.713 26.1369 394.51 30.4536 394.51 35.5869C394.51 40.7202 392.713 45.0602 389.12 48.6069ZM370.5 41.6769C371.993 43.2169 373.86 43.9869 376.1 43.9869C378.34 43.9869 380.183 43.2169 381.63 41.6769C383.123 40.1369 383.87 38.1069 383.87 35.5869C383.87 33.0669 383.123 31.0369 381.63 29.4969C380.183 27.9569 378.34 27.1869 376.1 27.1869C373.86 27.1869 371.993 27.9569 370.5 29.4969C369.053 31.0369 368.33 33.0669 368.33 35.5869C368.33 38.1069 369.053 40.1369 370.5 41.6769ZM415.152 53.8569C410.625 53.8569 406.775 52.0602 403.602 48.4669C400.475 44.8736 398.912 40.5802 398.912 35.5869C398.912 30.5936 400.475 26.3002 403.602 22.7069C406.775 19.1136 410.625 17.3169 415.152 17.3169C419.165 17.3169 422.339 18.7402 424.672 21.5869V18.0869H435.242V53.0869H424.672V49.5869C422.339 52.4336 419.165 53.8569 415.152 53.8569ZM411.722 41.8169C413.215 43.4502 415.152 44.2669 417.532 44.2669C419.912 44.2669 421.825 43.4502 423.272 41.8169C424.765 40.1836 425.512 38.1069 425.512 35.5869C425.512 33.0669 424.765 30.9902 423.272 29.3569C421.825 27.7236 419.912 26.9069 417.532 26.9069C415.152 26.9069 413.215 27.7236 411.722 29.3569C410.275 30.9902 409.552 33.0669 409.552 35.5869C409.552 38.1069 410.275 40.1836 411.722 41.8169ZM460.462 53.8569C455.235 53.8569 450.825 52.1302 447.232 48.6769C443.638 45.2236 441.842 40.8602 441.842 35.5869C441.842 30.3136 443.638 25.9502 447.232 22.4969C450.825 19.0436 455.235 17.3169 460.462 17.3169C464.055 17.3169 467.368 18.2502 470.402 20.1169C473.435 21.9836 475.698 24.4569 477.192 27.5369L467.952 32.4369C466.412 28.9369 463.915 27.1869 460.462 27.1869C458.222 27.1869 456.332 27.9802 454.792 29.5669C453.252 31.1536 452.482 33.1602 452.482 35.5869C452.482 38.0136 453.252 40.0202 454.792 41.6069C456.332 43.1936 458.222 43.9869 460.462 43.9869C463.915 43.9869 466.412 42.2369 467.952 38.7369L477.192 43.6369C475.698 46.7169 473.435 49.1902 470.402 51.0569C467.368 52.9236 464.055 53.8569 460.462 53.8569ZM493.408 53.0869H482.838V0.58691H493.408V21.6569C495.415 18.7636 498.658 17.3169 503.138 17.3169C507.385 17.3169 510.698 18.7402 513.078 21.5869C515.505 24.4336 516.718 28.1902 516.718 32.8569V53.0869H506.148V34.6769C506.148 29.4969 504.258 26.9069 500.478 26.9069C498.378 26.9069 496.675 27.6769 495.368 29.2169C494.061 30.7569 493.408 33.0436 493.408 36.0769V53.0869ZM530.197 13.3269C528.424 13.3269 526.884 12.6969 525.577 11.4369C524.271 10.1302 523.617 8.56691 523.617 6.74691C523.617 4.92691 524.271 3.38691 525.577 2.12691C526.884 0.820244 528.424 0.166911 530.197 0.166911C532.064 0.166911 533.627 0.820244 534.887 2.12691C536.194 3.38691 536.847 4.92691 536.847 6.74691C536.847 8.56691 536.194 10.1302 534.887 11.4369C533.627 12.6969 532.064 13.3269 530.197 13.3269ZM524.947 53.0869V18.0869H535.517V53.0869H524.947ZM544.225 53.0869V18.0869H554.795V21.6569C556.801 18.7636 560.045 17.3169 564.525 17.3169C568.771 17.3169 572.085 18.7402 574.465 21.5869C576.891 24.4336 578.105 28.1902 578.105 32.8569V53.0869H567.535V34.6769C567.535 29.4969 565.645 26.9069 561.865 26.9069C559.765 26.9069 558.061 27.6769 556.755 29.2169C555.448 30.7569 554.795 33.0436 554.795 36.0769V53.0869H544.225ZM597.254 40.7669C598.841 42.2602 600.731 43.0069 602.924 43.0069C605.117 43.0069 607.007 42.2602 608.594 40.7669C610.181 39.2736 610.974 37.3369 610.974 34.9569C610.974 32.5769 610.181 30.6402 608.594 29.1469C607.007 27.6536 605.117 26.9069 602.924 26.9069C600.731 26.9069 598.841 27.6536 597.254 29.1469C595.667 30.6402 594.874 32.5769 594.874 34.9569C594.874 37.3369 595.667 39.2736 597.254 40.7669ZM601.594 68.4169C594.734 68.4169 589.321 66.6902 585.354 63.2369L590.884 55.3269C593.824 57.8936 597.347 59.1769 601.454 59.1769C604.161 59.1769 606.284 58.3369 607.824 56.6569C609.364 54.9769 610.134 52.8536 610.134 50.2869V48.3269C609.294 49.5869 608.011 50.6136 606.284 51.4069C604.604 52.2002 602.714 52.5969 600.614 52.5969C596.134 52.5969 592.284 50.8936 589.064 47.4869C585.844 44.0336 584.234 39.8569 584.234 34.9569C584.234 30.0569 585.844 25.9036 589.064 22.4969C592.284 19.0436 596.134 17.3169 600.614 17.3169C602.714 17.3169 604.604 17.7136 606.284 18.5069C608.011 19.3002 609.294 20.3269 610.134 21.5869V18.0869H620.704V50.1469C620.704 56.3069 618.954 60.8802 615.454 63.8669C612.001 66.9002 607.381 68.4169 601.594 68.4169Z" fill="#472CBB" />
              </g>
            </svg>
          </p>
        </> :
        <>
          <p>
            <svg id="logo-ac-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="212" height="136">
              <defs>
                <clippath id="logo-ac-3-clip">
                  <path
                    d="M166.31 68.053 166 68h46V0H0v132h10.127l42.288-86.186 7.004 14.067L24.033 132H37v4h175v-12.712l-45.69-55.235z">
                  </path>
                </clippath>
              </defs>
              <g fill="none" stroke="#472CBB" strokeMiterlimit="10" strokeWidth="5">
                <path
                  d="M3.5 134 65.415 7.814l44.812 89.816c10.729 20.403 32.131 34.317 56.784 34.317 16.034 0 30.688-5.895 41.928-15.625"
                  id="logo-ac-3-path-3a"></path>
                <path
                  d="M52.4 64.528 85 130h41.25l-16.021-32.367-.002-.002c-4.681-8.902-7.329-19.039-7.329-29.795 0-35.409 28.704-64.113 64.113-64.113 15.425 0 29.864 5.215 42.202 15.885"
                  id="logo-ac-3-path-3b"></path>
                <path
                  d="m209 16.833-22.017 26.48a31.367 31.367 0 0 0-19.973-7.143c-17.397 0-31.5 14.102-31.5 31.5 0 17.396 14.103 31.5 31.5 31.5 8.51 0 16.226-3.381 21.895-8.865"
                  id="logo-ac-3-path-3c"></path>
              </g>
            </svg>
          </p>
          <p style={{ transform: "scale(0.5)" }}>
            <svg id="wordmark-ac-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" width="621" height="69" viewBox="0 0 621 69">
              <defs>
                <clippath id="wordmark-ac-3-clip">
                  <path d="M588.281 0H0v69h645c-6.623-136.1036-50.065-41-31.621-69z"></path>
                </clippath>
              </defs>
              <g fill="#472CBB" style={{ clipPath: 'url(#wordmark-ac-3-clip)' }}>
                <path d="M0.937812 53.0869L22.2178 3.38691H32.2978L53.5778 53.0869H41.9578L37.5478 42.5869H16.9678L12.5578 53.0869H0.937812ZM27.2578 18.0169L20.9578 32.9269H33.4878L27.2578 18.0169ZM57.8478 53.0869V18.0869H68.4178V21.6569C70.4245 18.7636 73.6678 17.3169 78.1478 17.3169C82.3945 17.3169 85.7078 18.7402 88.0878 21.5869C90.5145 24.4336 91.7278 28.1902 91.7278 32.8569V53.0869H81.1578V34.6769C81.1578 29.4969 79.2678 26.9069 75.4878 26.9069C73.3878 26.9069 71.6845 27.6769 70.3778 29.2169C69.0711 30.7569 68.4178 33.0436 68.4178 36.0769V53.0869H57.8478ZM114.097 53.8569C109.571 53.8569 105.721 52.0602 102.547 48.4669C99.4205 44.8736 97.8572 40.5802 97.8572 35.5869C97.8572 30.5936 99.4205 26.3002 102.547 22.7069C105.721 19.1136 109.571 17.3169 114.097 17.3169C118.111 17.3169 121.284 18.7402 123.617 21.5869V18.0869H134.187V53.0869H123.617V49.5869C121.284 52.4336 118.111 53.8569 114.097 53.8569ZM110.667 41.8169C112.161 43.4502 114.097 44.2669 116.477 44.2669C118.857 44.2669 120.771 43.4502 122.217 41.8169C123.711 40.1836 124.457 38.1069 124.457 35.5869C124.457 33.0669 123.711 30.9902 122.217 29.3569C120.771 27.7236 118.857 26.9069 116.477 26.9069C114.097 26.9069 112.161 27.7236 110.667 29.3569C109.221 30.9902 108.497 33.0669 108.497 35.5869C108.497 38.1069 109.221 40.1836 110.667 41.8169ZM142.887 53.0869V0.58691H153.457V53.0869H142.887ZM176.514 67.7169H165.104L172.384 51.0569L157.824 18.0869H169.374L178.054 39.7169L186.664 18.0869H198.284L176.514 67.7169ZM220.346 53.5069C216.24 53.5069 212.856 52.3869 210.196 50.1469C207.583 47.8602 206.276 44.5702 206.276 40.2769V27.2569H199.276V18.0869H206.276V8.35691H216.846V18.0869H226.646V27.2569H216.846V38.1069C216.846 40.2069 217.313 41.7236 218.246 42.6569C219.18 43.5902 220.696 44.0569 222.796 44.0569C224.383 44.0569 225.666 43.8469 226.646 43.4269V52.8069C225.106 53.2736 223.006 53.5069 220.346 53.5069ZM238.576 13.3269C236.803 13.3269 235.263 12.6969 233.956 11.4369C232.65 10.1302 231.996 8.56691 231.996 6.74691C231.996 4.92691 232.65 3.38691 233.956 2.12691C235.263 0.820244 236.803 0.166911 238.576 0.166911C240.443 0.166911 242.006 0.820244 243.266 2.12691C244.573 3.38691 245.226 4.92691 245.226 6.74691C245.226 8.56691 244.573 10.1302 243.266 11.4369C242.006 12.6969 240.443 13.3269 238.576 13.3269ZM233.326 53.0869V18.0869H243.896V53.0869H233.326ZM269.124 53.8569C263.897 53.8569 259.487 52.1302 255.894 48.6769C252.3 45.2236 250.504 40.8602 250.504 35.5869C250.504 30.3136 252.3 25.9502 255.894 22.4969C259.487 19.0436 263.897 17.3169 269.124 17.3169C272.717 17.3169 276.03 18.2502 279.064 20.1169C282.097 21.9836 284.36 24.4569 285.854 27.5369L276.614 32.4369C275.074 28.9369 272.577 27.1869 269.124 27.1869C266.884 27.1869 264.994 27.9802 263.454 29.5669C261.914 31.1536 261.144 33.1602 261.144 35.5869C261.144 38.0136 261.914 40.0202 263.454 41.6069C264.994 43.1936 266.884 43.9869 269.124 43.9869C272.577 43.9869 275.074 42.2369 276.614 38.7369L285.854 43.6369C284.36 46.7169 282.097 49.1902 279.064 51.0569C276.03 52.9236 272.717 53.8569 269.124 53.8569ZM331.023 53.9269C323.929 53.9269 317.863 51.4302 312.823 46.4369C307.829 41.3969 305.333 35.3302 305.333 28.2369C305.333 21.1436 307.829 15.1002 312.823 10.1069C317.863 5.06691 323.929 2.54691 331.023 2.54691C336.109 2.54691 340.706 3.78358 344.813 6.25691C348.919 8.73024 352.069 12.0202 354.263 16.1269L344.463 21.4469C341.476 16.0336 336.996 13.3269 331.023 13.3269C327.009 13.3269 323.579 14.7969 320.733 17.7369C317.933 20.6769 316.533 24.1769 316.533 28.2369C316.533 32.2969 317.933 35.7969 320.733 38.7369C323.579 41.6769 327.009 43.1469 331.023 43.1469C336.996 43.1469 341.476 40.4402 344.463 35.0269L354.263 40.3469C352.069 44.4536 348.919 47.7436 344.813 50.2169C340.706 52.6902 336.109 53.9269 331.023 53.9269ZM389.12 48.6069C385.526 52.1069 381.186 53.8569 376.1 53.8569C371.013 53.8569 366.673 52.1069 363.08 48.6069C359.486 45.0602 357.69 40.7202 357.69 35.5869C357.69 30.4536 359.486 26.1369 363.08 22.6369C366.673 19.0902 371.013 17.3169 376.1 17.3169C381.186 17.3169 385.526 19.0902 389.12 22.6369C392.713 26.1369 394.51 30.4536 394.51 35.5869C394.51 40.7202 392.713 45.0602 389.12 48.6069ZM370.5 41.6769C371.993 43.2169 373.86 43.9869 376.1 43.9869C378.34 43.9869 380.183 43.2169 381.63 41.6769C383.123 40.1369 383.87 38.1069 383.87 35.5869C383.87 33.0669 383.123 31.0369 381.63 29.4969C380.183 27.9569 378.34 27.1869 376.1 27.1869C373.86 27.1869 371.993 27.9569 370.5 29.4969C369.053 31.0369 368.33 33.0669 368.33 35.5869C368.33 38.1069 369.053 40.1369 370.5 41.6769ZM415.152 53.8569C410.625 53.8569 406.775 52.0602 403.602 48.4669C400.475 44.8736 398.912 40.5802 398.912 35.5869C398.912 30.5936 400.475 26.3002 403.602 22.7069C406.775 19.1136 410.625 17.3169 415.152 17.3169C419.165 17.3169 422.339 18.7402 424.672 21.5869V18.0869H435.242V53.0869H424.672V49.5869C422.339 52.4336 419.165 53.8569 415.152 53.8569ZM411.722 41.8169C413.215 43.4502 415.152 44.2669 417.532 44.2669C419.912 44.2669 421.825 43.4502 423.272 41.8169C424.765 40.1836 425.512 38.1069 425.512 35.5869C425.512 33.0669 424.765 30.9902 423.272 29.3569C421.825 27.7236 419.912 26.9069 417.532 26.9069C415.152 26.9069 413.215 27.7236 411.722 29.3569C410.275 30.9902 409.552 33.0669 409.552 35.5869C409.552 38.1069 410.275 40.1836 411.722 41.8169ZM460.462 53.8569C455.235 53.8569 450.825 52.1302 447.232 48.6769C443.638 45.2236 441.842 40.8602 441.842 35.5869C441.842 30.3136 443.638 25.9502 447.232 22.4969C450.825 19.0436 455.235 17.3169 460.462 17.3169C464.055 17.3169 467.368 18.2502 470.402 20.1169C473.435 21.9836 475.698 24.4569 477.192 27.5369L467.952 32.4369C466.412 28.9369 463.915 27.1869 460.462 27.1869C458.222 27.1869 456.332 27.9802 454.792 29.5669C453.252 31.1536 452.482 33.1602 452.482 35.5869C452.482 38.0136 453.252 40.0202 454.792 41.6069C456.332 43.1936 458.222 43.9869 460.462 43.9869C463.915 43.9869 466.412 42.2369 467.952 38.7369L477.192 43.6369C475.698 46.7169 473.435 49.1902 470.402 51.0569C467.368 52.9236 464.055 53.8569 460.462 53.8569ZM493.408 53.0869H482.838V0.58691H493.408V21.6569C495.415 18.7636 498.658 17.3169 503.138 17.3169C507.385 17.3169 510.698 18.7402 513.078 21.5869C515.505 24.4336 516.718 28.1902 516.718 32.8569V53.0869H506.148V34.6769C506.148 29.4969 504.258 26.9069 500.478 26.9069C498.378 26.9069 496.675 27.6769 495.368 29.2169C494.061 30.7569 493.408 33.0436 493.408 36.0769V53.0869ZM530.197 13.3269C528.424 13.3269 526.884 12.6969 525.577 11.4369C524.271 10.1302 523.617 8.56691 523.617 6.74691C523.617 4.92691 524.271 3.38691 525.577 2.12691C526.884 0.820244 528.424 0.166911 530.197 0.166911C532.064 0.166911 533.627 0.820244 534.887 2.12691C536.194 3.38691 536.847 4.92691 536.847 6.74691C536.847 8.56691 536.194 10.1302 534.887 11.4369C533.627 12.6969 532.064 13.3269 530.197 13.3269ZM524.947 53.0869V18.0869H535.517V53.0869H524.947ZM544.225 53.0869V18.0869H554.795V21.6569C556.801 18.7636 560.045 17.3169 564.525 17.3169C568.771 17.3169 572.085 18.7402 574.465 21.5869C576.891 24.4336 578.105 28.1902 578.105 32.8569V53.0869H567.535V34.6769C567.535 29.4969 565.645 26.9069 561.865 26.9069C559.765 26.9069 558.061 27.6769 556.755 29.2169C555.448 30.7569 554.795 33.0436 554.795 36.0769V53.0869H544.225ZM597.254 40.7669C598.841 42.2602 600.731 43.0069 602.924 43.0069C605.117 43.0069 607.007 42.2602 608.594 40.7669C610.181 39.2736 610.974 37.3369 610.974 34.9569C610.974 32.5769 610.181 30.6402 608.594 29.1469C607.007 27.6536 605.117 26.9069 602.924 26.9069C600.731 26.9069 598.841 27.6536 597.254 29.1469C595.667 30.6402 594.874 32.5769 594.874 34.9569C594.874 37.3369 595.667 39.2736 597.254 40.7669ZM601.594 68.4169C594.734 68.4169 589.321 66.6902 585.354 63.2369L590.884 55.3269C593.824 57.8936 597.347 59.1769 601.454 59.1769C604.161 59.1769 606.284 58.3369 607.824 56.6569C609.364 54.9769 610.134 52.8536 610.134 50.2869V48.3269C609.294 49.5869 608.011 50.6136 606.284 51.4069C604.604 52.2002 602.714 52.5969 600.614 52.5969C596.134 52.5969 592.284 50.8936 589.064 47.4869C585.844 44.0336 584.234 39.8569 584.234 34.9569C584.234 30.0569 585.844 25.9036 589.064 22.4969C592.284 19.0436 596.134 17.3169 600.614 17.3169C602.714 17.3169 604.604 17.7136 606.284 18.5069C608.011 19.3002 609.294 20.3269 610.134 21.5869V18.0869H620.704V50.1469C620.704 56.3069 618.954 60.8802 615.454 63.8669C612.001 66.9002 607.381 68.4169 601.594 68.4169Z" fill="#472CBB" />
              </g>
            </svg>
          </p>
        </>}
    </>
  );
}