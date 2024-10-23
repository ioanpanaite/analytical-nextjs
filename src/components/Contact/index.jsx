import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import CustomTextField from './CustomTextField';
import { Box, Grid, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, obj => showErrors('Name', obj.value.length, obj.min))
    .required(),
  email: yup
    .string()
    .email()
    .required(),
})

const defaultValues = {
  name: '',
  email: '',
  telephone: '',
}

export default function Contact() {
  const { t } = useTranslation('home');
  const [isSubmit, setIsSubmit] = React.useState(false)

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      setIsSubmit(true)
      const info = { ...data, email_type: "contact" }
      const result = await axios.post('/api/email', info)

      if (result.data.success) {
        toast.success(t('Email Message'), {
          position: "top-center"
        });
      }
    } catch (error) { }

    reset()
    setIsSubmit(false)
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          background: theme.palette.secondary.light
        })}
      >
        <Box
          id={"Contact"}
          sx={(theme) => ({
            width: { md: '100%' },
            height: { md: '900px' },
            maxWidth: { md: '1440px', xl: '1920px' },
            display: 'block',
            margin: '0 auto',
            position: 'relative',
            paddingBottom: { xs: 10, sm: 12, md: 0 },
            background: theme.palette.secondary.light
          })}
        >
          <Typography
            component="h5"
            variant="h5"
            sx={{
              width: '100%',
              paddingTop: { xs: 2, md: 20 },
              textAlign: 'center',
              fontWeight: 'bold',
              pt: { xs: 10 },
              color: theme => theme.palette.primary.main
            }}
          >
            {t("Contact Title")}
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: { xs: '70px', xl: '5vw', xxl: '100px' },
              maxWidth: '91vw',
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto',
              backgroundImage: 'url(/images/contact-divider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              top: { xs: '180px', sm: '180px', md: '33%' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }} />

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Container
                sx={{
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  marginTop: { md: '180px' }
                }}
              >
                <Typography
                  component="div"
                  variant="div"
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    fontSize: { xs: 16 },
                    maxWidth: { md: '500px' },
                    margin: { md: '0 0 0 auto' },
                    pt: { xs: 16, md: 0 },
                    pb: { xs: 8 },
                    px: { xs: 2 },
                    whiteSpace: "pre-line",
                    color: theme => theme.palette.primary.main
                  }}
                >
                  {t("Contact Description")}
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    marginTop: { md: '130px' },
                    px: { xs: 4 },
                    paddingTop: { sm: 14, md: 0 }
                  }}>
                  <Grid item xl={6} md={8} sm={10} xs={12}>
                    <Controller
                      name='name'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onChange={onChange}
                          label={<Typography sx={{ color: theme => theme.palette.primary.main }}>{t('Name')}</Typography>}
                          error={Boolean(errors.name)}
                          {...(errors.name && { helperText: errors.name.message })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xl={6} md={8} sm={10} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <Controller
                      name='email'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onChange={onChange}
                          label={<Typography sx={{ color: theme => theme.palette.primary.main }}>{t('Email')}</Typography>}
                          error={Boolean(errors.email)}
                          {...(errors.email && { helperText: errors.email.message })}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xl={6} md={8} sm={10} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <Controller
                      name='telephone'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onChange={onChange}
                          label={<Typography sx={{ color: theme => theme.palette.primary.main }}>{t('Telephone (if you prefer)')}</Typography>}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant='outlined'
                  sx={theme => ({
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 'initial',
                    mt: 4,
                    textTransform: 'none',
                    padding: '10px 20px',
                    marginLeft: { xs: 4 },
                    '&:hover': {
                      background: `${theme.palette.primary.main}`,
                      color: `${theme.palette.primary.white}`,
                      border: `2px solid ${theme.palette.primary.main}`,
                    }
                  })}
                  type='submit'
                  disabled={isSubmit}
                >
                  {t("Send")}
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
}
