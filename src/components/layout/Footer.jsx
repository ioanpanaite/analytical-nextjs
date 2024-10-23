import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <Container sx={{
        position: 'relative',
        width: '100%',
        height: '100px',
        background: theme => theme.palette.primary.ground,
        maxWidth: 'unset !important',
        px: 0,
        py: { xs: 10 },
        zIndex: 1,
      }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              top: '-149px',
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto'
            }}>
            <Box sx={(theme) => ({
              width: 0,
              height: 0,
              borderLeft: '35px solid transparent',
              borderRight: '35px solid transparent',
              borderBottom: `70px solid ${theme.palette.primary.ground}`,
            })}
            />
          </Box>
        </Container>
        <Typography
          component="div"
          variant="div"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            color: theme => theme.palette.primary.main,
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          ©2024 Analytic Coaching
        </Typography>
      </Container>
    </div>
  );
}
