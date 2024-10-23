import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import CoachingAnimation from './CoachingAnimation'

export default function Deeper() {
  const { t } = useTranslation("bridging-the-gap");

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: { xxl: `linear-gradient(90deg, ${theme.palette.primary.ground} 50%, ${theme.palette.primary.white} 50%)` },
        })}
      >
        <Box
          id={'deeper'}
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
              zIndex: 12
            }} />

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
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
                <CoachingAnimation />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    py: { xs: 10, smd: 0 },
                    transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                    top: { xs: 80, sm: 60, md: 130 }
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/traditional-coaching.jpg")`,
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
                    borderRight: { xs: `100vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.contrastText}`, md: `440px solid ${theme.palette.primary.contrastText}` }
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
                  py: { xs: 8, sm: 16, md: 28 },
                  paddingLeft: { xs: 7, sm: '36px', md: 7 },
                  paddingRight: { md: 0 },
                  backgroundColor: { xs: theme.palette.primary.ground, sm: theme.palette.primary.white }
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
                      marginTop: { xs: 4, sm: 0 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: { xs: theme.palette.primary.main }
                    })}
                  >
                    {t("Deeper Title")}
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
                      pb: { xs: 2, sm: 0 },
                      whiteSpace: "pre-line",
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {t("Deeper Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
