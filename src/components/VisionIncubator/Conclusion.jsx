import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Conclusion() {
  const { t } = useTranslation("vision-incubator");

  return (
    <>
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
          }}
        >
          <Box
            sx={{
              top: { xs: '-69px' },
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto'
            }}>
            <Box sx={(theme) => ({
              width: 0,
              height: 0,
              borderLeft: { xs: '35px solid transparent' },
              borderRight: { xs: '35px solid transparent' },
              borderBottom: { xs: `70px solid ${theme.palette.secondary.light}`},
            })}
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 8, sm: 12 },
            pb: { xs: 16, sm: 24 },
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
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
              {t("Conclusion")}
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ whiteSpace: 'pre-line', color: theme => theme.palette.primary.main }}>
              {t("Conclusion Description")}
            </Typography>
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
              borderBottom: { xs: `70px solid ${theme.palette.primary.ground}` }
            })}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}