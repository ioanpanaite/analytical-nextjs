import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Link from 'next/link'
import Grid from '@mui/material/Grid'

const BlogOne = ({ allBlogs }) => {
  const [blogs, setBlogs] = useState([])
  const [count, setCount] = useState(1)
  const perPage = 6

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const blogLen = allBlogs?.data.length
    if (blogLen > perPage) {
      setCount(Math.ceil(allBlogs?.data.length / perPage))
    }

    if (blogLen >= 1) {
      const offset = (page - 1) * perPage
      const currentBlog = allBlogs?.data.slice(offset, offset + perPage)
      setBlogs(currentBlog)
    }
  }, [page, allBlogs])

  const handleSlug = (slug) => {
    if (slug) {
      return slug?.includes('/') ? `/blog${slug}` : `/blog/${slug}`
    }
    return '/blog'
  }

  const handleDate = (blogDate) => {
    const date = new Date(blogDate)
    const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date)
    const result = `${month} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`
    return result
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          width: { md: '100%' },
          height: 'auto',
          position: 'relative',
          backgroundColor: theme.palette.secondary.light,
        })}
      >
        <Container sx={(theme) => ({ py: { xs: 12, sm: 12, md: 20 }, px: { lg: 16, xl: 20, xxl: 32 }, maxWidth: { lg: 'unset', xxl: '1920px' } })}>
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
                overflow: "visible",
                zIndex: 12,
                textAlign: 'center',
                justifyContent: 'center',
                color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
              })}
            >
              Blogs
            </Typography>
          </Stack>
          <Grid container spacing={6} sx={{ pt: 8 }}>
            {blogs.map(val => (
              <Grid key={val.id} item lg={4} md={6} xs={12}>
                <Card>
                  <Typography variant='body2' sx={{ pt: 4, px: 2, color: 'text.disabled' }}>
                    {handleDate(val?.attributes?.updatedAt ?? '')}
                  </Typography>
                  <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ maxHeight: 70, overflow: 'hidden' }} component="div">
                      {val?.attributes?.Title ?? ''}
                    </Typography>
                    <Typography sx={{ height: 100, overflow: 'hidden' }} component="div" color="text.secondary">
                      {val?.attributes?.subTitle ?? ''}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      size="small"
                      component={Link}
                      href={handleSlug(val?.attributes?.slug ?? '')}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={0} useFlexGap sx={{ py: 4, justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Stack>
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
  } catch (errorCategories) {
    return ({
      props: {
        allBlogs: null
      },
    })
  }

}

export default BlogOne;