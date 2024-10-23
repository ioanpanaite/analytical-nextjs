import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import CoachingAnimation from './CoachingAnimation'

export default function StrikingBalance() {
  const { t } = useTranslation("shaping-business-culture");

  const data = [
    {
      title: t("1. Culture Assessment"),
      description: t("1. Culture Assessment Description")
    },
    {
      title: t("2. Culture Enhancement"),
      description: t("2. Culture Enhancement Description"),
    },
    {
      title: t("3. Hiring Strategies"),
      description: t("3. Hiring Strategies Description")
    },
    {
      title: t("4. Diversity and Inclusion"),
      description: t("4. Diversity and Inclusion Description")
    }
  ]

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.ground} 50%, ${theme.palette.primary.white} 50%)`,
        })}
      >
        <Box
          id={'StrikingBalance'}
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
                <Box sx={{
                  position: 'relative',
                  zIndex: 3,
                  py: { xs: 10, smd: 0 },
                  transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                  top: { xs: 90, sm: 60, md: 130 }
                }}>
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/striking-balance.jpg")`,
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
                  px: { sm: '0', md: '48px', xl: '140px' },
                  py: { xs: 8, sm: 16, md: 24, lg: 28 },
                  paddingLeft: { xs: 7 },
                  backgroundColor: { xs: theme.palette.primary.grey, sm: 'white' }
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      maxWidth: { xs: '100%', md: 600 },
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 24, sm: 30, md: 35 },
                      marginTop: { xs: 10, sm: 2 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: { xs: theme.palette.primary.main }
                    })}
                  >
                    {t("StrikingBalance")}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16, md: 16 },
                      maxWidth: { xs: '100%', md: 600 },
                      marginTop: { xs: 3, md: 5 },
                      pb: { xs: 4, sm: 0 },
                      whiteSpace: 'pre-line',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("StrikingBalance Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={5} sx={{
        my: { xs: '0' },
        py: { xs: 6, sm: 8, md: 12 },
        pb: { xs: 12 },
        px: { sm: '36px', xxl: 20 },
        maxWidth: { xxl: '1920px' },
        margin: { xxl: '0 auto' },
      }}>
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
                  zIndex: 2,
                  position: 'relative',
                  backgroundColor: { xs: 'white', sm: 'white' }
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
      <Container
        sx={{
          display: 'flex',
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
            zIndex: 11
          }}>
          <Box sx={(theme) => ({
            width: 0,
            height: 0,
            borderLeft: { xs: '35px solid transparent' },
            borderRight: { xs: '35px solid transparent' },
            borderBottom: { xs: `70px solid ${theme.palette.primary.ground}` }
          })}
          />
        </Box>
      </Container>
    </>
  );
}
