import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'

export default function LeftSortView(props) {
  const { data, Animation } = props
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={(theme) => ({
          width: { md: '100%' },
          height: { md: '900px' },
          // maxWidth: { md: '1440px', xl: '1920px' },
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
            height: { xs: '70px', xl: '5vw', xxl: '100px', xxxl: 'calc(100vw / 30)' },
            maxWidth: { xs: '91vw', xxl: '80vw' },
            position: 'absolute',
            alignItems: 'center',
            margin: '0 auto',
            backgroundImage: 'url(/images/divider.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            top: { xs: '50px', sm: '40px', md: '64px' },
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }} />

        <Grid container spacing={5} sx={{
          my: { xs: '0' },
          maxHeight: { sm: '600px', md: '900px' }
        }}>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {Animation && <Animation />}
          </Box>
          <Grid item xs={12} sm={6} 
          sx={{ 
            py: '0px !important',
            backgroundImage: { xxl: `url(${data.backgroundImage})` },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
           }}
          >
            <Container
              sx={theme => ({
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: { sm: `url(${data.backgroundImage})`, xxl: 'unset' },
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: { sm: '600px', md: '900px' },
                overflow: "hidden",
                zIndex: 0,
                margin: { xxl: 0 },
                float: { xxl: 'right' },
                backgroundColor: { xs: theme.palette.primary.ground, sm: theme.palette.primary.white, xxl: 'transparent' },
              })}
            >
              <Box sx={{ display: 'block' }}>
                {Animation && <Animation />}
              </Box>
              <Box
                sx={{
                  display: { xs: 'block', sm: 'none' },
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
                    backgroundImage: `url(${data.mobileGround})`,
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
                  borderBottom: { xs: '500px solid transparent', sm: '600px solid transparent', md: '900px solid transparent' },
                  borderLeft: { xs: '150px solid transparent', sm: '150px solid transparent', md: '150px solid transparent' },
                  borderRight: { xs: `100vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.white}`, md: `440px solid ${theme.palette.primary.white}` }
                })}
                />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ py: '0px !important', px: { sm: '0 !important' } }}>
            <Container
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                py: { xs: 8, sm: 12, md: 20 },
                px: { sm: '0', md: '36px', xl: '140px' },
                margin: { xxxl: 0 },
                float: { xxxl: 'left' },
                backgroundColor: { xs: theme.palette.primary.ground, sm: 'white' }
              })}
            >
              <Stack spacing={0} useFlexGap>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={theme => ({
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    fontSize: { xs: 40, sm: 50, md: 70, xl: 80 },
                    fontWeight: 'bold',
                    marginTop: { md: '10px' },
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    zIndex: 12,
                    textAlign: { xs: 'center', sm: 'left' },
                    color: { xs: (data.mobileTitleColor ? data.mobileTitleColor : theme.palette.primary.main), sm: theme.palette.primary.main }
                  })}
                >
                  {data.title}
                </Typography>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    fontSize: { xs: 40, sm: 50, md: 70, xl: 80 },
                    fontWeight: 'bold',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    color: { xs: (data.mobileTitleColor ? data.mobileTitleColor : theme.palette.primary.main), sm: theme.palette.secondary[data.subColor] }
                  })}
                >
                  <Box sx={(theme) => ({ display: 'flex', justifyContent: 'start', alignItems: 'center', maxHeight: { mx: 64 } })}>
                    <Typography
                      component="span"
                      variant="span"
                      sx={theme => ({
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        fontSize: { xs: 40, sm: 50, md: 70, xl: 80 },
                        fontWeight: 'bold',
                        whiteSpace: "nowrap",
                        overflow: "visible",
                        zIndex: 12,
                        color: { xs: (data.mobileTitleColor ? data.mobileTitleColor : theme.palette.primary.main), sm: theme.palette.primary.main },
                      })}
                    >
                      {data.titleTo}&nbsp;
                    </Typography>
                    <Typography
                      component="p"
                      variant="p"
                      sx={theme => ({
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "visible",
                        zIndex: 12,
                        color: { xs: theme.palette.primary.main, sm: theme.palette.secondary.light }
                      })}
                    >{data.subTitle}</Typography>
                  </Box>
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
                    whiteSpace: "pre-line",
                    zIndex: 12,
                    pr: '36px',
                    lineHeight: '24px',
                    textAlign: { xs: 'center', sm: 'left' },
                    color: { xs: (data.mobileTextColor ? data.mobileTextColor : theme.palette.primary.main), sm: theme.palette.primary.main }
                  })}
                >
                  {data.description}
                </Typography>
              </Stack>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
