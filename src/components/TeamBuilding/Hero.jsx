import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Hero(props) {
  const { data } = props
  const { t } = useTranslation("team-building");

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: { md: '100%' },
          height: '100vh',
          backgroundImage: 'none',
          backgroundImage: `url(${data.backgroundImage ? data.backgroundImage : '/images/hero/background.svg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: theme.palette.primary.ground
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: '50%', sm: (data.animate || data.subTitle ? '35vh' : '45vh') },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
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
              borderLeft: { xs: '35px solid transparent' },
              borderRight: { xs: '35px solid transparent' },
              borderBottom: { xs: `70px solid ${theme.palette.primary.desc}` }
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
            py: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{
                pt: 2,
                pb: { xs: 0 },
                width: { xs: '100%', sm: 'auto' },
                color: theme => theme.palette.primary.main
              }}
            >
              <Typography variant="body1" textAlign="center">
                {t("Description")}
              </Typography>
            </Stack>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 6,
                fontSize: { xs: 24, sm: 30, md: 35 },
                color: theme => theme.palette.primary.main
              }}
            >
              {t("Description Title")}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{
                pt: 2,
                pb: { xs: 0 },
                width: { xs: '100%', sm: 'auto' },
                color: theme => theme.palette.primary.main
              }}
            >
              <Typography variant="body1" textAlign="center">
                {t("Description2")}
              </Typography>
            </Stack>
          </Stack>
          <Grid container spacing={5} sx={{ my: { xs: '0', md: 4 } }}>
            <Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: 100 }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  zIndex: 2,
                  paddingRight: { md: 0 },
                  position: 'relative',
                  backgroundColor: 'transparent'
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
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Foster bonds")}
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
                      textAlign: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Foster bonds Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: 200 }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  zIndex: 2,
                  paddingRight: { md: 0 },
                  position: 'relative',
                  backgroundColor: 'transparent'
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
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Build relationships")}
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
                      textAlign: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Build relationships Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid><Grid item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: 200 }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  zIndex: 2,
                  paddingRight: { md: 0 },
                  position: 'relative',
                  backgroundColor: 'transparent'
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
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Develop teamwork")}
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
                      textAlign: 'center',
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Develop teamwork Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
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
                borderLeft: { xs: '30px solid transparent' },
                borderRight: { xs: '30px solid transparent' },
                borderBottom: { xs: `60px solid ${theme.palette.secondary.main}` }
              })}
              />
            </Box>
          </Container>}
      </Box>
    </>
  );
}
