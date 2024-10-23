import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import AnalyticAnimation from '../Share/AnalyticAnimation'

export default function InnerLeader() {
  const { t } = useTranslation("coaching-for-leaders");

  const data = [
    {
      title: t("1. Alignment with Values"),
      description: t("1. Alignment with Values Description")
    },
    {
      title: t("2. Collaboration and Team Dynamics"),
      description: t("2. Collaboration and Team Dynamics Description")
    },
    {
      title: t("3. Adaptability and Growth Mindset"),
      description: t("3. Adaptability and Growth Mindset Description")
    },
    {
      title: t("4. Customer-Centric Approach"),
      description: t("4. Customer-Centric Approach Description")
    },
    {
      title: t("5. Long-Term Commitment"),
      description: t("5. Long-Term Commitment Description")
    }
  ]

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: { xxl: `linear-gradient(90deg, ${theme.palette.primary.white} 50%, ${theme.palette.primary.ground} 50%)` },
        })}
      >
        <Box
          id={'FitHiring'}
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
              top: { xs: '50px', sm: '40px', md: '64px' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }} />

          <Grid container spacing={5} sx={{
            my: { xs: '0' },
            flexDirection: { xs: 'row', sm: 'row-reverse' }
          }}>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important', paddingLeft: { md: '0px !important' } }}>
              <Container
                sx={{
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme => theme.palette.primary.ground,
                  height: { sm: '600px', md: '640px' },
                  zIndex: 1,
                  overflow: { sm: 'hidden' }
                }}
              >
                <AnalyticAnimation />
                <Box sx={{
                  position: 'relative',
                  zIndex: 3,
                  py: { xs: 10, smd: 0 },
                  transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                  top: { xs: 50, md: 60 }
                }}>
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/fit-hiring.jpg")`,
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
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    alignItems: 'center',
                    margin: '0 auto'
                  }}>
                  <Box sx={(theme) => ({
                    width: 0,
                    height: 0,
                    borderBottom: { xs: '100vh solid transparent', sm: '600px solid transparent', md: '900px solid transparent' },
                    borderRight: { xs: '150px solid transparent', sm: '150px solid transparent', md: '150px solid transparent' },
                    borderLeft: { xs: `100vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.white}`, md: `440px solid ${theme.palette.primary.white}` }
                  })}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important' }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  maxHeight: { md: 640 },
                  py: { xs: 8, sm: 12, md: 32 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  paddingRight: { md: 0 },
                  pb: { xs: '26px', sm: '10px' },
                  position: 'relative',
                  backgroundColor: { xs: theme.palette.primary.grey, sm: theme.palette.primary.white }
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 24, sm: 30, md: 35 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("InnerLeader")}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16, md: 16 },
                      maxWidth: { md: '500px' },
                      marginTop: { xs: 3, md: 5 },
                      pb: { xs: 2, sm: 0 },
                      whiteSpace: 'pre-line',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("InnerLeader Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Container
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: { sm: '700px' },
          pt: { xs: 6, sm: 6, md: 8 },
          pb: 16,
          zIndex: 2,
          px: { xs: 2, sm: '36px' },
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
              fontSize: { xs: 24, sm: 30, md: 35 },
              fontWeight: 'bold',
              zIndex: 1,
              color: theme.palette.primary.main
            })}
          >
            {t("InnerLeader Title1")}
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
            {t("InnerLeader Description1")}
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
