import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import AnalyticAnimation from '../Share/AnalyticAnimation'

export default function CaseStudy() {
  const { t } = useTranslation("group-business-coaching");

  const data = [
    {
      title: t("Leadership Skills"),
      description: t("Leadership Skills Description")
    },
    {
      title: t("Strategic Thinking"),
      description: t("Strategic Thinking Description")
    },
    {
      title: t("Organizational Development"),
      description: t("Organizational Development Description")
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
          id={'CaseStudy'}
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
                <Box sx={{ position: 'relative', zIndex: 3, py: { xs: 10, smd: 0 }, top: { xs: 0, md: 60 } }}>
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/case-study.jpg")`,
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
                  py: { xs: 8, sm: 12, md: 24 },
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
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {t("Case Study Title")}
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
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {t("Case Study Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={5}
        sx={{
          width: { xs: '100%', md: '70%' },
          justifyContent: 'center',
          margin: '0 auto',
          py: { md: 8 },
        }}
      >
        <Grid item xs={12} sm={6} sx={{ px: { xs: '0 !important' } }}>
          <Container
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            })}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={theme => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                fontSize: { xs: 24, md: 35 },
                fontWeight: 'bold',
                textAlign: 'center',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              {t("The Challenge:")}
            </Typography>
          </Container>
          <Typography
            component="div"
            variant="div"
            sx={theme => ({
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              fontSize: { xs: 16 },
              marginTop: { xs: 2 },
              px: { md: 4 },
              textAlign: 'center',
              color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
            })}
          >
            {t("The Challenge: Description")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ px: { xs: '0 !important' } }}>
          <Container
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            })}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={theme => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                fontSize: { xs: 24, md: 35 },
                fontWeight: 'bold',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              {t("The Solution:")}
            </Typography>
          </Container>
          <Typography
            component="div"
            variant="div"
            sx={theme => ({
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              fontSize: { xs: 16 },
              marginTop: { xs: 2 },
              px: { md: 4 },
              textAlign: 'center',
              color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
            })}
          >
            {t("The Solution: Description")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}
        sx={{
          my: { xs: '0' },
          py: { xs: 6, sm: 8, md: 12 },
          pb: { xs: 12 },
          px: { sm: '36px', xxl: 20 },
          maxWidth: { xxl: '1920px' },
          margin: { xxl: '0 auto' }
        }}
      >
        <Container
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          })}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={theme => ({
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              fontSize: { xs: 24, md: 35 },
              fontWeight: 'bold',
              alignContent: 'center',
              marginTop: { xs: 2 },
              color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
            })}
          >
            {t("The Impact:")}
          </Typography>
        </Container>
        {
          data && data.map(val => (
            <Grid key={val.title} item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: { sm: '100%', md: 'max-content' } }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4, lg: 8 },
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
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
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
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
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
