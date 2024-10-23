import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import AnimatedLogo from './AnimatedLogo';
import gsap from "gsap";
import styles from './Hero.module.css'
import { useTheme } from '@emotion/react';

export default function Hero(props) {
  const theme = useTheme()
  const { data, HeroContent } = props
  const { t } = useTranslation();
  const [available, setAvailable] = useState(true)
  const [isLoad, setIsLoad] = useState(false)

  let timer = null;
  let elems = useRef([]);
  let timeline = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "circ.out"
    },
    paused: false
  });

  const gallery = [
    {
      title: t("Transformation"),
      cover: "/images/hero/transformation.png",
      color: theme.palette.primary.main
    },
    {
      title: t("Possibility"),
      cover: "/images/hero/possibility.png",
      color: theme.palette.primary.main
    },
    {
      title: t("Innovation"),
      cover: "/images/hero/innovation.png",
      color: theme.palette.primary.main
    },
    {
      title: t("Vision"),
      cover: "/images/hero/vision.png",
      color: theme.palette.primary.main
    }
  ];

  const [state, setState] = useState({ current: 0, next: 1 });

  const activateTimer = () => {
    timer = setTimeout(() => {
      stepForward();
    }, 1000);
  };

  const calculateIndexs = (index) => {
    if (index === gallery.length - 1) {
      setState({ current: index, next: 0 });
    } else {
      setState({ current: index, next: index + 1 });
    }
  };

  const flowUp = (onComplete) => {
    timeline
      .to(elems.current[0], { y: "-100%", opacity: 0, scale: -0.5 })
      .to(
        elems.current[1],
        {
          y: "-100%",
          opacity: 1,
          scale: 1,
          onComplete
        },
        "-=0.75"
      )
      .play();
  };

  const fadeOut = (onComplete) => {
    timeline
      .to(elems.current[0], {
        duration: 0.5,
        opacity: 0,
        onComplete
      })
      .to(elems.current[0], { opacity: 1 })
      .play();
  };

  const stepForward = () => {
    fadeOut(() => calculateIndexs(state.next));
  };

  useEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];

    if (available) {
      activateTimer();
    }

    gsap.set(image2, { y: "0%", opacity: 0, scale: 1 });
    gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });

    setTimeout(() => {
      setAvailable(false)
      clearTimeout(timer);
    }, 5500);

    return () => {
      clearTimeout(timer);
    };
  }, [state, available]);

  useEffect(() => {

    const handleMobile = () => {
      if (window.innerWidth <= 768) {
        setAvailable(false)
      } else {
        setAvailable(true)
      }
    }
    handleMobile()
    window.addEventListener('resize', handleMobile);

    // Load
    setIsLoad(true)

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, [])

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: { md: '100%' },
          height: '100vh',
          backgroundImage: `${data.backgroundImage ? `url(${data.backgroundImage})` : "none"}`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: theme.palette.secondary.light
        })}
      >
        <Box className={styles.albumContainer} sx={{ display: (!available || !isLoad ? 'none' : 'block') }}>
          <div className={styles.image}>
            <img
              ref={(elem) => (elems.current[0] = elem)}
              src={gallery[state.current].cover}
              alt=""
            />
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: '50%', sm: (data.animate ? '30vh' : '45vh') },
                pb: { xs: 8, sm: 12 },
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  transform: 'translate(0, 45vh)',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: { xs: 35, sm: 60, md: 70 },
                  fontWeight: 'bold',
                  color: gallery[state.current].color
                }}
              >
                {t(gallery[state.current].title)}
              </Typography>
            </Container>
          </div>
          <div className={styles.image}>
            <img
              ref={(elem) => (elems.current[1] = elem)}
              src={gallery[state.next].cover}
              alt=""
            />
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: '50%', sm: (data.animate ? '30vh' : '45vh') },
                pb: { xs: 8, sm: 12 },
              }}
            >
              <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: { xs: 35, sm: 60, md: 70 },
                    fontWeight: 'bold',
                    color: theme => theme.palette.primary.main
                  }}
                >
                  {t(data.title)}
                </Typography>
              </Stack>
            </Container>
          </div>
        </Box>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: '50%', sm: (data.animate || data.subTitle ? '30vh' : '45vh') },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            {
              data.animate ?
                <>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    <AnimatedLogo available={available} />
                  </Box>
                </> :
                <>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignSelf: 'center',
                      textAlign: 'center',
                      fontSize: { xs: 35, sm: 60, md: 70 },
                      fontWeight: 'bold',
                      color: theme => theme.palette.primary.main
                    }}
                  >
                    {t(data.title)}
                  </Typography>
                  {data.subTitle &&
                    <Typography
                      component="h4"
                      variant="h4"
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: { xs: 20, sm: 30, md: 35 },
                        marginTop: 2,
                        fontWeight: 'bold',
                        color: theme => theme.palette.primary.main
                      }}
                    >
                      {t(data.subTitle)}
                    </Typography>}
                </>
            }
          </Stack>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              bottom: 0,
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto'
            }}>
            <Box sx={(theme) => ({
              width: 0,
              height: 0,
              borderLeft: '35px solid transparent',
              borderRight: '35px solid transparent',
              borderBottom: `70px solid ${theme.palette.primary.desc}`
            })}
            />
          </Box>
        </Container>
      </Box>

      <Box
        sx={(theme) => ({
          width: '100%',
          background: theme.palette.primary.desc,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          zIndex: 10
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 16, md: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <HeroContent />
        </Container>
        {data.triangle &&
          <Container
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <Box
              sx={{
                bottom: 0,
                position: 'absolute',
                alignItems: 'center',
                margin: '0 auto',
              }}>
              <Box sx={(theme) => ({
                width: 0,
                height: 0,
                borderLeft: { xs: '35px solid transparent' },
                borderRight: { xs: '35px solid transparent' },
                borderBottom: { xs: `70px solid ${theme.palette.primary.white}` }
              })}
              />
            </Box>
          </Container>}
      </Box>
    </>
  );
}
