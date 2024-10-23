import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero(props) {
  const { data } = props
  const { t } = useTranslation("coaching-for-leaders");

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: { md: '100%' },
          height: '100vh',
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
            maxWidth: { sm: '800px' },
            pt: { xs: '50%', sm: '30vh' },
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
            pt: { xs: 14, sm: '90px' },
            pb: { xs: 8, sm: 20 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{
                pt: '30px',
                pb: { xs: 0 },
                width: { xs: '100%', sm: 'auto' },
                color: theme => theme.palette.primary.main
              }}
            >
              <Typography variant="body1" textAlign="center">
                {t("Description")}
              </Typography>
            </Stack>
          </Stack>
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
