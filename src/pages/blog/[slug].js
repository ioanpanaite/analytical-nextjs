import axios from 'axios';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Markdown from 'react-markdown'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Blog({ allBlogs }) {
  const [content, setContent] = useState()
  const router = useRouter()

  const slug = router.query.slug

  useEffect(() => {
    const blog = allBlogs?.data.find(val => val?.attributes?.slug === slug)
    setContent(blog?.attributes)
  }, [slug, allBlogs])

  const handleDate = (blogDate) => {
    return (new Date(blogDate)).toLocaleDateString('en-GB')
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          width: { md: '100%' },
          height: 'auto',
          display: 'flex',
          position: 'relative',
          backgroundColor: theme.palette.secondary.light
        })}
      >
        <Container
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            pt: { xs: 16, sm: 12, md: 20 },
            pb: { xs: 4, sm: 12 },
            px: { sm: '80px', lg: '0' },
            width: { lg: '70%' },
            maxWidth: { lg: 'unset' }
          })}
        >
          <Stack spacing={0} useFlexGap>
            <Typography
              component="h1"
              variant="h1"
              sx={theme => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                fontSize: { xs: 24, sm: 35 },
                fontWeight: 'bold',
                marginTop: { md: '10px' },
                textAlign: 'left',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              {content?.Title}
            </Typography>
            <Typography
              component="div"
              variant="div"
              sx={theme => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                fontSize: { xs: 16 },
                marginTop: { xs: 3, md: 5 },
                whiteSpace: "pre-line",
                textAlign: 'left',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              {content?.subTitle}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          width: { md: '100%' },
          height: 'auto',
          display: 'flex',
          position: 'relative',
          backgroundColor: theme.palette.primary.white
        })}
      >
        <Container
          id={"blog_content"}
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            py: { xs: 4, sm: 12 },
            px: { sm: '80px', lg: '0' },
            width: { lg: '70%' },
            maxWidth: { lg: 'unset' }
          })}
        >
          <Stack spacing={0} useFlexGap>
            <Typography
              component="div"
              variant="div"
              sx={theme => ({
                fontSize: { xs: 16 },
                marginTop: { xs: 3, md: 5 },
                whiteSpace: "pre-line",
                zIndex: 12,
                textAlign: 'left',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              <Markdown>
                {content?.Content}
              </Markdown>
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          width: { md: '100%' },
          height: 'auto',
          minHeight: { md: '500px' },
          position: 'relative',
          backgroundColor: theme.palette.secondary.light
        })}
      >
        <Container
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            px: { sm: '80px', lg: '0' },
            width: { lg: '70%' },
            maxWidth: { lg: 'unset' }
          })}
        >
          <Stack spacing={0} useFlexGap>
            <Typography
              component="div"
              variant="div"
              sx={theme => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                fontSize: { xs: 16 },
                marginTop: { xs: 3, md: 5 },
                py: { xs: 4, sm: 0 },
                whiteSpace: "pre-line",
                zIndex: 12,
                textAlign: 'left',
                color: theme.palette.primary.main
              })}
            >
              {content?.Conclusion}
            </Typography>
          </Stack>
          <Divider
            sx={{
              py: 4,
              borderBottomWidth: 'medium',
              borderColor: theme => theme.palette.primary.main
            }}
          />
          <Typography
            component="div"
            variant="div"
            sx={theme => ({
              fontSize: { xs: 16 },
              marginTop: { xs: 3, md: 5 },
              fontWeight: 'bold',
              color: theme.palette.primary.main
            })}
          >
            {handleDate(content?.updatedAt)}
          </Typography>
        </Container>
        <Container
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'left',
            px: { sm: '80px', lg: '0' },
            width: { lg: '70%' },
            maxWidth: { lg: 'unset' },
            pb: 12
          })}
        >
          <Typography
            component="div"
            variant="div"
            sx={theme => ({
              fontSize: { xs: 16 },
              marginTop: 2,
              paddingBottom: { xs: 3, md: 5 },
              fontWeight: 'bold',
              color: theme.palette.primary.main
            })}
          >
            Filed under:
          </Typography>
          <Typography
            component="div"
            variant="div"
            sx={theme => ({
              fontSize: { xs: 16 },
              marginTop: 2,
              marginLeft: 1,
              paddingBottom: { xs: 3, md: 5 },
              fontWeight: 'bold',
              color: theme.palette.primary.main
            })}
          >
            {content?.FiledUnder}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const res = await axios.get(`${process.env.CMS_API_URL}/api/blogs?locale=${context.locale}`);
    const allBlogs = res.data;

    return ({
      props: {
        allBlogs
      },
    })
  } catch (error) {
    return ({
      props: {
        allBlogs: null
      },
    })
  }
}