import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Conclusion() {
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
              top: { xs: '-60px', md: '-100px'},
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
            pb: { xs: 8, sm: 24 },
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
              Conclusion
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ color: theme => theme.palette.primary.main }}>
              Change is a journey, and the path is not always linear or straightforward. At Analytic Coaching, we recognize the complexities of personal and professional growth, particularly in the realm of productivity and performance enhancement. We offer a comprehensive Business Systemic Coaching approach that goes beyond traditional coaching to optimize your effectiveness within your professional role.
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ color: theme => theme.palette.primary.main }}>
              If you've found that traditional coaching hasn't yielded the results you desire in terms of productivity and performance enhancement, or if you seek a more profound and in-depth approach to personal and professional transformation within your business context, we invite you to explore Analytical Coaching. Together, we can navigate the intricacies of your professional journey, uncover hidden potentials, and pave the way for a future filled with enhanced productivity, peak performance, and success. Embrace the depths of change with Analytical Coaching, where transformation knows no bounds in the world of business.
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
              borderBottom: { xs: `60px solid ${theme.palette.primary.main}`, md: `100px solid ${theme.palette.primary.main}` },
            })}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}