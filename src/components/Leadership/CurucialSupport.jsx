import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import CoachingAnimation from '../Share/CoachingAnimation'

export default function CurucialSupport() {
  const { t } = useTranslation("leadership");

  const data = [
    {
      title: t("1. Emotional Resilience"),
      description: t("1. Emotional Resilience Description")
    },
    {
      title: t("2. Self-Discovery"),
      description: t("2. Self-Discovery Description")
    },
    {
      title: t("3. Adaptation and Agility"),
      description: t("3. Adaptation and Agility Description")
    },
    {
      title: t("4. Mentorship and Coaching"),
      description: t("4. Mentorship and Coaching Description")
    },
    {
      title: t("5. Peer Networks"),
      description: t("5. Peer Networks Description")
    }
  ]

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: { xxl: `linear-gradient(90deg, ${theme.palette.primary.ground} 50%, ${theme.palette.primary.white} 50%)` },
        })}
      >
        <Box
          id={data.subTitle}
          sx={(theme) => ({
            width: { md: '100%' },
            height: { xs: '100%', md: '640px' },
            maxWidth: { md: '1440px', xl: '1920px' },
            display: 'flex',
            margin: '0 auto',
            position: 'relative',
            py: { xs: 0 },
            overflow: 'hidden'
          })}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: '70px', xl: '5vw' },
              maxWidth: '91vw',
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto',
              backgroundImage: 'url(/images/pages/analytic-devider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              left: '50%',
              top: { xs: '50px', sm: '40px', md: '64px' },
              transform: 'translate(-50%, -50%)',
              zIndex: 12
            }} />

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important' }}>
              <Container
                sx={{
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme => theme.palette.primary.ground,
                  height: { sm: '600px', md: '640px' },
                  zIndex: 1,
                  overflow: { sm: 'hidden' },
                  height: '100%'
                }}
              >
                <CoachingAnimation />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    py: { xs: 10, smd: 0 },
                    transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                    top: { xs: 90, sm: 60, md: 130 }
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/curucial-support.jpg")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: 360,
                      height: 360
                    }}
                  >
                  </Box>
                </Box>
                <Box
                  sx={{
                    top: 0,
                    right: 0,
                    position: 'absolute',
                    alignItems: 'center',
                    margin: '0 auto'
                  }}>
                  <Box sx={(theme) => ({
                    width: 0,
                    height: 0,
                    borderBottom: { xs: '100vh solid transparent', sm: '600px solid transparent', md: '900px solid transparent' },
                    borderLeft: { xs: '150px solid transparent', sm: '150px solid transparent', md: '150px solid transparent' },
                    borderRight: { xs: `110vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.white}`, md: `440px solid ${theme.palette.primary.white}` }
                  })}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important', px: '0px !important' }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { sm: 16, md: 24 },
                  paddingLeft: { xs: 7, sm: '36px', md: 7 },
                  paddingRight: { md: 0 },
                  backgroundColor: { xs: theme.palette.primary.grey, sm: theme.palette.primary.white }
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      maxWidth: { xs: '100%', md: 550 },
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 24, sm: 30, md: 35 },
                      marginTop: { xs: 10 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("CurucialSupport Title")}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16 },
                      maxWidth: { md: '500px' },
                      marginTop: { xs: 3, md: 5 },
                      pb: { xs: 4, sm: 0 },
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("CurucialSupport Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={5} sx={{ my: { xs: '0' }, py: { xs: 6, sm: 8, md: 12 }, px: { sm: '36px', xxl: 20 } }}>
        {
          data && data.map(val => (
            <Grid key={val.title} item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: { sm: '100%', md: 'max-content' } }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4, md: 4 },
                  pb: { xs: '26px', sm: '10px' },
                  position: 'relative',
                  backgroundColor: theme.palette.primary.white
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 18 },
                      fontWeight: 'bold',
                      color: theme.palette.primary.main
                    })}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16 },
                      marginTop: { xs: 2 },
                      pb: { xs: 0 },
                      color: theme.palette.primary.main
                    })}
                  >
                    {val.description}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}
