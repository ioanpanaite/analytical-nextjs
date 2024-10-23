import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero(props) {
  const { data, HeroContent } = props
  const { t } = useTranslation();
  const [available, setAvailable] = useState(data.animate)

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          width: { md: '100%' },
          height: '100vh',
          backgroundImage: 'none',
          backgroundImage: `${!available ? `url(${data.backgroundImage ? data.backgroundImage : '/images/hero/background.svg'})` : 'none'}`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: theme.palette.primary.ground,
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
      </Box>
    </>
  );
}
