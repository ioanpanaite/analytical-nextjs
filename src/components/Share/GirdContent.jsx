import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'

export default function GirdContent(props) {
  const { data } = props

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          background: data.backgroundColor,
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
              borderBottom: { xs: `70px solid ${data.backgroundColor}` },
            })}
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 12, sm: 16 },
            pb: { xs: 2 },
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: { xs: 24, sm: 32, md: 35 },
              color: theme => theme.palette.primary.main
            }}
          >
            {data.title}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              pb: { xs: 0 },
              width: { xs: '100%', sm: '60%' },
              color: theme => theme.palette.primary.main
            }}
          >
            <Typography variant="body1" textAlign="center">
              {data.subTitle}
            </Typography>
          </Stack>
        </Container>
        <Grid container spacing={5} sx={{ my: { xs: '0' }, py: { xs: 6, sm: 8, md: 8 }, pb: { xs: 12, md: 16 }, px: { sm: '36px', xxl: 20 } }}>
          {
            data && data.content.map(val => (
              <Grid key={val.title} item xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: { sm: '100%', md: 'max-content' } }}>
                <Container
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    py: { xs: 2, sm: 4, md: 4 },
                    pb: { xs: '26px', sm: '10px' },
                    position: 'relative',
                    backgroundColor: { xs: data.backgroundColor }
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
      </Box>
    </>
  );
}
