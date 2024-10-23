import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import AnalyticAnimation from '../Share/AnalyticAnimation'

export default function TraditionalCoaching() {
  const { t } = useTranslation("business-systemic-coaching");

  return (
    <>
      <Container
        sx={{
          display: { xs: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            top: { xs: -69 },
            position: 'absolute',
            alignItems: 'center',
            margin: '0 auto',
            zIndex: 12
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
      </Container>

      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: { xxl: `linear-gradient(90deg, ${theme.palette.primary.white} 50%, ${theme.palette.primary.ground} 50%)` },
        })}
      >
        <Box
          sx={(theme) => ({
            width: { md: '100%' },
            height: { xs: '100%', md: '900px' },
            maxWidth: { md: '1440px', xl: '1920px' },
            display: 'flex',
            margin: '0 auto',
            position: 'relative',
            py: { xs: 0 },
            overflow: 'hidden'
          })}
        >
          <Grid container spacing={5} sx={{
            my: { xs: '0' },
            flexDirection: { xs: 'row', sm: 'row-reverse' }
          }}>
            <Grid item xs={12} sm={6} sx={{
              py: '0px !important',
              paddingLeft: { sm: '0px !important' }
            }}>
              <Container
                sx={{
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme => theme.palette.primary.ground,
                  height: { sm: '600px', md: '900px' },
                  zIndex: 1,
                  overflow: { sm: 'hidden' }
                }}
              >
                <AnalyticAnimation />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    py: { xs: 10, smd: 0 },
                    transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                    top: { xs: 50, sm: 60, md: 130 }
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/home-vision.jpg")`,
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
                    borderBottom: { xs: '100vh solid transparent', sm: '900px solid transparent', md: '900px solid transparent' },
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
                  py: { xs: 8, sm: 12 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  paddingRight: { md: 0 },
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
                    {t("TraditionalCoaching Title1")}
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
                      whiteSpace: 'pre-line',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("TraditionalCoaching Description1")}
                  </Typography>
                </Stack>

                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 30, sm: 35 },
                      paddingTop: { xs: 4 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("TraditionalCoaching Title2")}
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
                    {t("TraditionalCoaching Description2")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={5}
        sx={{
          my: { xs: '0' },
          px: { sm: '36px', xxl: 20 },
          maxWidth: { xxl: '1920px' },
          margin: { xxl: '0 auto' }
        }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important' }}>
          <Container
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              pt: { xs: 6, sm: 6, md: 8 },
              pb: { xs: '26px', sm: '10px' },
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
                  fontSize: { xs: 18 },
                  fontWeight: 'bold',
                  color: theme.palette.primary.main
                })}
              >
                {t("1. Business Systemic Coaching")}
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
                {t("1. Business Systemic Coaching Description")}
              </Typography>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important' }}>
          <Container
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              pt: { xs: 6, sm: 6, md: 8 },
              pb: { xs: '26px', sm: '10px' },
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
                  fontSize: { xs: 18 },
                  fontWeight: 'bold',
                  color: theme.palette.primary.main
                })}
              >
                {t("2. Psychotherapy")}
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
                {t("2. Psychotherapy Description")}
              </Typography>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important' }}>
          <Container
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              pt: { xs: 6, sm: 6, md: 8 },
              pb: { xs: '26px', sm: '10px' },
              zIndex: 2,
              px: { xs: 2, sm: '36px' },
              position: 'relative',
              backgroundColor: { xs: theme.palette.primary.white, sm: 'white' }
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
                {t("3. Psychoanalysis")}
              </Typography>
              <Typography
                component="div"
                variant="div"
                sx={theme => ({
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  fontSize: { xs: 16 },
                  marginTop: { xs: 2 },
                  pb: { xs: 10 },
                  color: theme.palette.primary.main
                })}
              >
                {t("3. Psychoanalysis Description")}
              </Typography>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
