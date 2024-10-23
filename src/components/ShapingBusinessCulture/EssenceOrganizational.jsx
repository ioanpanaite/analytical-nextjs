import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import PotentialAnimation from './PotentialAnimation'

export default function EssenceOrganizational() {
  const { t } = useTranslation("shaping-business-culture");

  const data = [
    {
      title: t("Values and Beliefs"),
      description: t("Values and Beliefs Description"),
    },
    {
      title: t("Behavioral Norms"),
      description: t("Behavioral Norms Description"),
    },
    {
      title: t("Mission and Vision"),
      description: t("Mission and Vision Description"),
    },
    {
      title: t("Symbols and Traditions"),
      description: t("Symbols and Traditions Description"),
    },
    {
      title: t("Leadership Style"),
      description: t("Leadership Style Description"),
    },
    {
      title: t("The Impact of Culture"),
      description: t("The Impact of Culture Description"),
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
          id={'tranditional-coaching'}
          sx={(theme) => ({
            width: { md: '100%' },
            height: '100%',
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
                  height: { sm: '600px', md: '100%' },
                  zIndex: 1,
                  overflow: { sm: 'hidden' }
                }}
              >
                <PotentialAnimation />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    py: { xs: 10 },
                    transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                    top: { xs: 0, md: 60 }
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/organizational-culture.jpg")`,
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
                    borderBottom: { xs: '900px solid transparent', sm: '600px solid transparent', md: '900px solid transparent' },
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
                  py: { xs: 8, md: 24 },
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
                      fontSize: { xs: 30, sm: 35 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("EssenceOrganizational Title1")}
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
                      pb: { xs: 2, sm: 4 },
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("EssenceOrganizational Description1")}
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
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("EssenceOrganizational Title2")}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16, md: 16 },
                      maxWidth: { md: '500px' },
                      marginTop: { xs: 2, md: 5 },
                      textAlign: { xs: 'center', sm: 'left' },
                      pb: 0,
                      whiteSpace: 'pre-line',
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("EssenceOrganizational Description2")}
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
        margin: { xxl: '0 auto' }
      }}>
        {
          data && data.map(val => {
            return (
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
            )
          })
        }
      </Grid>
    </>
  );
}
