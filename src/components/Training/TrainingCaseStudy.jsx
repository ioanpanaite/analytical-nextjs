import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import CoachingAnimation from '../Share/CoachingAnimation'

export default function TrainingCaseStudy() {
  const { t } = useTranslation("training");

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
    },
    {
      title: t("Team Collaboration"),
      description: t("Team Collaboration Description")
    },
    {
      title: t("Sustainable Growth"),
      description: t("Sustainable Growth Description")
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
                <Box sx={{ position: 'relative', zIndex: 3, py: { xs: 10, smd: 0 }, top: { xs: 0, sm: 60, md: 80 } }}>
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'right',
                      backgroundImage: `url("/images/pages/training-case-study.jpeg")`,
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
                      color: { xs: (data.mobileTitleColor ? data.mobileTitleColor : theme.palette.primary.main), sm: theme.palette.primary.main }
                    })}
                  >
                    {t("TrainingCaseStudy Title")}
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
                      pb: { xs: 12, sm: 0 },
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("TrainingCaseStudy Description")}
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
                color: theme.palette.primary.main
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
              px: { xs: 2, md: 4 },
              textAlign: 'center',
              color: theme.palette.primary.main
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
                color: theme.palette.primary.main
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
              px: { xs: 2, md: 4 },
              textAlign: 'center',
              color: theme.palette.primary.main
            })}
          >
            {t("The Solution: Description")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} sx={{ my: { xs: '0' }, py: { xs: 6, sm: 8, md: 12 }, px: { sm: 0, md: '36px', xxl: 20 } }}>
        <Container
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            px: { xs: 2 },
            paddingLeft: { xs: 8 },
            py: { xs: 2, sm: 0 }
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
              color: theme.palette.primary.main
            })}
          >
            {t("The Impact:")}
          </Typography>
        </Container>
        {
          data && data.map(val => (
            <Grid item key={val.title} xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: { sm: '100%', md: 'max-content' } }}>
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
                      color: { xs: theme.palette.primary.main }
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
                      paddingRight: { md: 2 },
                      color: { xs: theme.palette.primary.main }
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
