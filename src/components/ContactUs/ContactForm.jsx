import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import CustomTextField from '../Contact/CustomTextField';
import { Box, Grid, Typography, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material'
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
  information: '',
  location: ''
}

export default function ContactForm() {
  const { t } = useTranslation("contact-us");
  const [isSubmit, setIsSubmit] = useState(false)
  const [callType, setCallType] = useState('email')
  const [businessType, setBusinessType] = useState('company')
  const [serviceType, setServiceType] = useState('business_coaching')

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
      const call_type = (callType === 'email') ? t('Email') : t('Telephone')
      const business_type = (businessType === 'company') ? t('Company') : t('Individual')

      let service_type = ''
      if (serviceType === "business_coaching") {
        service_type = t('Business Coaching')
      } else if (serviceType === "training") {
        service_type = t('Training')
      } else if (serviceType === "general_enquiry") {
        service_type = t('General Enquiry')
      }

      const info = { ...data, email_type: "findout", call_type, business_type, service_type }
      const result = await axios.post('/api/email', info)

      if (result.data.success) {
        toast.success(t('Email Message'), {
          position: "top-center"
        });
      }
    } catch (error) {

    }

    reset()
    setIsSubmit(false)
  }

  const handleCallChange = event => {
    setCallType(event.target.value)
  }
  const handleBusinessChange = event => {
    setBusinessType(event.target.value)
  }
  const handleServiceChange = event => {
    setServiceType(event.target.value)
  }



  return (
    <>
      <Box
        id={'ContactForm'}
        sx={(theme) => ({
          width: { md: '100%' },
          position: 'relative',
          background: theme.palette.secondary.light,
          paddingBottom: { xs: 10, sm: 16, md: 24 }

        })}
      >
        <Box
          sx={{
            height: { xs: '50px', sm: '80px', md: '170px', xxl: '200px' },
            width: '90%',
            position: 'absolute',
            alignItems: 'center',
            margin: '0 auto',
            backgroundImage: 'url(/images/findout-divider.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 12
          }} />

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Container
              sx={(theme) => ({
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'left',
                py: { sm: 8, md: 16 },
                px: { xs: 4, md: 16 }
              })}
            >
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
                  color: theme.palette.primary.main
                })}
              >
                {t("Description")}
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
                  color: theme.palette.primary.main
                })}
              >
                Contact Email:
                <Typography
                  component="span"
                  variant="span"
                  sx={theme => ({
                    fontSize: { xs: 16 },
                    marginLeft: { xs: 1 },
                    fontWeight: { xs: 700 },
                    color: theme.palette.primary.main
                  })}
                >
                  Info@analytic-coaching.com
                </Typography>
              </Typography>
              <Typography
                component="div"
                variant="div"
                sx={theme => ({
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  fontSize: { xs: 16 },
                  maxWidth: { md: '500px' },
                  marginTop: { xs: 3, md: 0 },
                  color: theme.palette.primary.main
                })}
              >
                Phone Number:
                <Typography
                  component="span"
                  variant="span"
                  sx={theme => ({
                    fontSize: { xs: 16 },
                    marginLeft: { xs: 1 },
                    fontWeight: { xs: 700 },
                    color: theme.palette.primary.main
                  })}
                >
                  0333 339 2430
                </Typography>
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container
              sx={(theme) => ({
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'left',
                paddingTop: { sm: 10, md: 0 }
              })}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    marginTop: { md: '130px' },
                    px: { xs: 2 }
                  }}>
                  <Grid item md={8} xs={12}>
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
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
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
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
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
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <FormControl>
                      <Typography sx={theme => ({ color: theme.palette.primary.main, fontSize: '0.875rem' })} >{t("ContactType Title")}</Typography>
                      <RadioGroup
                        aria-label='call_type'
                        name='call_type'
                        value={callType}
                        onChange={handleCallChange}
                        sx={theme => ({ color: theme.palette.primary.main })}
                      >
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='email' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t("Email")} />
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='telephone' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t("Telephone")} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <FormControl>
                      <Typography sx={theme => ({ color: theme.palette.primary.main, fontSize: '0.875rem' })} >{t("BusinessType Title")}</Typography>
                      <RadioGroup
                        aria-label='business_type'
                        name='business_type'
                        value={businessType}
                        onChange={handleBusinessChange}
                        sx={theme => ({ color: theme.palette.primary.main, fontSize: '0.875rem !important' })}
                      >
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='company' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t("Company")} />
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='individual' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t("Individual")} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <Controller
                      name='location'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <CustomTextField
                          fullWidth
                          value={value}
                          onChange={onChange}
                          label={<Typography sx={{ color: theme => theme.palette.primary.main }}>{t('Location Title')}</Typography>}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <FormControl>
                      <Typography sx={theme => ({ color: theme.palette.primary.main, fontSize: '0.875rem' })} >{t("Services Title")}</Typography>
                      <RadioGroup
                        aria-label='service_type'
                        name='service_type'
                        value={serviceType}
                        onChange={handleServiceChange}
                        sx={theme => ({ color: theme.palette.primary.main, fontSize: '0.875rem !important' })}
                      >
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='business_coaching' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t('Business Coaching')} />
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='training' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t('Training')} />
                        <FormControlLabel sx={theme => ({ color: theme.palette.primary.main })} value='general_enquiry' control={<Radio sx={theme => ({ color: theme.palette.primary.main })} />} label={t('General Enquiry')} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={8} xs={12} sx={{ paddingTop: { md: '30px !important' } }}>
                    <Controller
                      name='information'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <CustomTextField
                          rows={3}
                          multiline
                          fullWidth
                          value={value}
                          onChange={onChange}
                          label={<Typography sx={{ color: theme => theme.palette.primary.main }}>{t('Information Title')}</Typography>}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant='outlined'
                  sx={theme => ({
                    border: theme => `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 'initial',
                    mt: 4,
                    textTransform: 'none',
                    marginLeft: { xs: 2 },
                    padding: '10px 20px',
                    backgroundColor: 'transparent',
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
            </Container>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </>
  );
}
