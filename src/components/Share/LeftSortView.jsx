import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'

export default function LeftSortView(props) {
  const { data, Animation } = props
  const { t } = useTranslation();

  return (
    <>
      <Box
        id={data.subTitle}
        sx={(theme) => ({
          width: { md: '100%' },
          height: { xs: '100%', md: '900px' },
          display: 'flex',
          margin: '0 auto',
          position: 'relative',
          py: { xs: 0 }
        })}
      >
        {!data.dividerHidden && <Box
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
            marginTop: { md: '30px' },
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }} />}

        <Grid container spacing={5} sx={{
          my: { xs: '0' },
          flexDirection: { xs: 'row', sm: 'row-reverse' },
          maxHeight: { sm: '600px', md: '900px' },
        }}>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {Animation && <Animation />}
          </Box>
          <Grid item xs={12} sm={6}
            sx={{
              py: '0px !important',
              paddingLeft: { sm: '0px !important' },
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
                height: { xs: '600px', md: '900px' },
                overflow: 'hidden',
                margin: { xxl: 0 },
                backgroundColor: { xs: theme.palette.primary.ground, sm: theme.palette.primary.white, xxl: 'transparent' },
              })}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' }, float: 'left' }}>
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
                  borderLeft: { xs: `100vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.contrastText}`, md: `440px solid ${theme.palette.primary.contrastText}` }
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
                py: { xs: 8, sm: 12, md: 25 },
                paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                paddingRight: { md: 0 },
                position: 'relative',
                margin: { xxxl: 0 },
                float: { xxxl: 'right' },
                backgroundColor: { xs: theme.palette.primary.ground, sm: theme.palette.primary.white },
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
                    marginTop: { md: '8px', xl: '10px' },
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    paddingRight: { xs: 0, sm: 20 },
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
                    whiteSpace: "nowrap",
                    overflow: "visible",
                    zIndex: 12,
                    textAlign: { xs: 'center', sm: 'left' },
                    color: { xs: (data.mobileTitleColor ? data.mobileTitleColor : theme.palette.primary.main), sm: theme.palette.secondary.light }
                  })}
                >
                  {data.subTitle}
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
                    whiteSpace: "pre-line",
                    zIndex: 12,
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
