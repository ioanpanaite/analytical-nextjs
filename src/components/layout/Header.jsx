import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image'
import Link from 'next/link'
import MenuList from './MenuList'
import { useRouter } from 'next/router';

const logoStyle = {
  width: '80px',
  height: 'auto',
  cursor: 'pointer',
};

export default function Header() {
  const { t } = useTranslation();

  const menus = [
    {
      key: 'different',
      title: t("We're Different"),
      list: [
        {
          link: '/bridging-the-gap',
          title: t('Bridging the Gap')
        },
        {
          link: '/shaping-business-culture',
          title: t('Shaping Business Culture')
        },
        {
          link: '/business-systemic-coaching',
          title: t('Business Systemic Coaching')
        },
        {
          link: '/resilience-adaptability',
          title: t('Resilience & Adaptability')
        },
        {
          link: '/vision-incubator',
          title: t('Vision Incubator')
        }
      ]
    },
    {
      key: 'coaching',
      title: "Coaching",
      list: [
        {
          link: '/coaching-for-leaders',
          title: t('Coaching For Leaders')
        },
        {
          link: '/team-building',
          title: t('Team Building')
        },
        {
          link: '/group-business-coaching',
          title: t('Group Business Coaching')
        },
        {
          link: '/high-performance-coaching',
          title: t('High Performance Coaching')
        },
        {
          link: '/leadership',
          title: t('Leadership')
        },
        {
          link: '/training',
          title: t('Training')
        }
      ]
    },
    {
      key: 'language',
      title: "Change Language",
      list: [
        {
          title: 'EN'
        },
        {
          title: 'FR'
        },
      ]
    }
  ]

  const [open, setOpen] = React.useState(false);
  const [navColor, setnavColor] = React.useState("unset");
  const [blur, setBlur] = React.useState("none");
  const [mobileMenu, setMobileMenu] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);
  const [isBookCall, setIsBookCall] = React.useState(false);

  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenus, setMenus] = React.useState({
    about: false,
    different: false,
    coaching: false,
    contact: false
  })

  const initial = () => {
    setMenus({
      about: false,
      different: false,
      coaching: false,
      contact: false
    })
  }
  const handleClick = (event, kindOf) => {
    setAnchorEl(event.currentTarget);
    initial()
    if (kindOf === 'about') {
      setMenus(v => ({ ...v, about: true }))
    } else if (kindOf === 'different') {
      setMenus(v => ({ ...v, different: true }))
    } else if (kindOf === 'coaching') {
      setMenus(v => ({ ...v, coaching: true }))
    } else if (kindOf === 'contact') {
      setMenus(v => ({ ...v, contact: true }))
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenus({
      about: false,
      different: false,
      coaching: false,
      contact: false
    })
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setnavColor("#09ecd0")
        setBlur('blur(24px)')
      } else {
        setnavColor("unset");
        setBlur('none')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  React.useEffect(() => {

    const handleMobile = () => {
      if (window.innerWidth <= 1240) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleMobile()
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, [])

  React.useEffect(() => {
    if (router.pathname === "/") {
      const homeElement = document.getElementById("Contact");
      if (homeElement && isBookCall) {
        scrollToSection("Contact")
        setIsBookCall(false)
      }
    }
  }, [router])

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLan = (lan) => {
    setOpen(false)
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: lan.toLowerCase() }
    )
  }

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    } else {
      setIsBookCall(true)
      router.push('/')
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: navColor,
          backgroundImage: 'none',
        }}
      >
        <Container sx={{ maxWidth: { lg: '1440px', xl: '1920px' }, px: { xs: 0, md: 0 } }}>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              py: 1,
              backdropFilter: blur,
              maxHeight: 40,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0,
              }}
            >
              <Link href={'/'}>
                <Image
                  src={"/ac.svg"}
                  style={logoStyle}
                  alt="Analytical Coaching"
                  width={80}
                  height={80}
                />
              </Link>

              <Box sx={{
                display: { xs: 'none', lg: 'flex', marginLeft: 20 },
                color: theme => theme.palette.primary.main
              }}>
                <MenuItem
                  onClick={(e) => handleClick(e, 'about')}
                  sx={{
                    padding: '13px 15px',
                    margin: '0 5px',
                    border: 'solid 2px transparent',
                    '&:hover': {
                      border: 'solid 2px',
                      background: 'transparent'
                    }
                  }}
                  component={Link}
                  href={'/'}
                  aria-controls="About"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {t('About AC')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: '13px 15px',
                    margin: '0 5px',
                    border: (openMenus.different ? 'solid 2px' : 'solid 2px transparent'),
                    '&:hover': {
                      border: 'solid 2px',
                      background: 'transparent'
                    }
                  }}
                  onClick={(e) => handleClick(e, 'different')}
                  aria-controls="Different"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {t("We're Different")}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={(e) => handleClick(e, 'coaching')}
                  sx={{
                    padding: '13px 15px',
                    margin: '0 5px',
                    border: (openMenus.coaching ? 'solid 2px' : 'solid 2px transparent'),
                    '&:hover': {
                      border: 'solid 2px',
                      background: 'transparent'
                    }
                  }}
                  aria-controls="Coaching"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {t("Coaching")}
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: '13px 15px',
                    margin: '0 5px',
                    border: 'solid 2px transparent',
                    '&:hover': {
                      border: 'solid 2px',
                      background: 'transparent'
                    }
                  }}
                  component={Link}
                  href={'/blog'}
                  aria-controls="Blog"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Blog
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={(e) => handleClick(e, 'contact')}
                  sx={{
                    padding: '13px 15px',
                    margin: '0 5px',
                    border: 'solid 2px transparent',
                    '&:hover': {
                      border: 'solid 2px',
                      background: 'transparent'
                    }
                  }}
                  component={Link}
                  href={'/contact-us'}
                  aria-controls="Contact"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {t("Contact Us")}
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            {
              menus && menus.map(val => {
                return (
                  val.list.length > 0 && val.key !== "language" ?
                    <MenuList key={val.key} anchorEl={anchorEl} open={openMenus[val.key]} handleClose={handleClose} list={val.list} /> :
                    null
                )
              })
            }
            {!isMobile && <LanguageSwitcher />}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                margin: '0 5px',
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                sx={theme => ({
                  border: theme => `2px solid ${theme.palette.primary.main}`,
                  borderRadius: 'initial',
                  textTransform: 'none',
                  padding: '13px 15px',
                  fontWeight: 'bold',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    color: theme.palette.secondary.light,
                    background: `${theme.palette.primary.main} !important`
                  }
                })}
                onClick={() => scrollToSection('Contact')}
              >
                {t("Book A Discovery Call")}
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', lg: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: 0, color: theme => theme.palette.primary.main }}
              >
                <Image
                  src={'/images/Hamburger.svg'}
                  alt="Transform"
                  width={60}
                  height={40}
                />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '100vw',
                    backgroundColor: theme => theme.palette.primary.main,
                    flexGrow: 1,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                      p: 2
                    }}
                  >
                    <Link href={'/'}>
                      <Image
                        src={"/ac-mobile.svg"}
                        style={logoStyle}
                        alt="Analytical Coaching"
                        width={80}
                        height={80}
                      />
                    </Link>

                    <Image
                      src={"/images/close.svg"}
                      alt="Close"
                      width={50}
                      height={50}
                      onClick={toggleDrawer(false)}
                    />
                  </Box>
                  {menus && menus.map(val => {
                    return (
                      (mobileMenu == val.key) ?
                        <Box key={val.key} >
                          <MenuItem
                            sx={theme => ({
                              borderTop: `2px solid ${theme.palette.secondary.light}`,
                              display: 'flex',
                              paddingLeft: '20px'
                            })}
                            onClick={() => setMobileMenu("")}
                          >
                            <Image
                              src={"/images/arrow-left.svg"}
                              alt="arrow-left"
                              width={18}
                              height={38}
                            />

                            <Typography
                              sx={theme => ({
                                fontWeight: 'bold',
                                fontSize: 21,
                                paddingLeft: '20px',
                                fontFamily: 'Inter',
                                color: theme.palette.secondary.light
                              })}
                            >
                              {t(val.title)}
                            </Typography>
                          </MenuItem>
                          {
                            val.key !== "language" ?
                              val.list.map(item => (
                                <MenuItem
                                  key={item.title}
                                  sx={theme => ({
                                    fontSize: 13,
                                    padding: '7px 60px',
                                    color: theme.palette.secondary.light,
                                    minHeight: '41px !important',
                                    fontFamily: 'Inter',
                                    borderTop: `2px solid`,
                                    borderColor: 'rgba(255, 255, 255, 0.3) currentcolor currentcolor'
                                  })}
                                  component={Link}
                                  href={item.link}
                                  onClick={toggleDrawer(false)}
                                >
                                  {t(item.title)}
                                </MenuItem>)
                              )
                              :
                              val.list.map(item => (
                                <MenuItem
                                  key={item.title}
                                  sx={theme => ({
                                    fontSize: 13,
                                    padding: '7px 60px',
                                    color: theme.palette.secondary.light,
                                    minHeight: '41px !important',
                                    fontFamily: 'Inter',
                                    borderTop: `2px solid`,
                                    borderColor: 'rgba(255, 255, 255, 0.3) currentcolor currentcolor'
                                  })}
                                  onClick={() => handleLan(item.title)}
                                >
                                  {t(item.title)}
                                </MenuItem>)
                              )
                          }
                        </Box> :
                        null
                    )
                  })}

                  {!mobileMenu ?
                    <>
                      <MenuItem
                        sx={theme => ({
                          fontWeight: 'bold',
                          fontSize: 21,
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          color: theme.palette.secondary.light,
                          height: 50
                        })}
                        component={Link}
                        href={'/'}
                        onClick={toggleDrawer(false)}
                      >
                        {t('About AC')}
                      </MenuItem>
                      <MenuItem
                        sx={theme => ({
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          height: 50
                        })}
                        onClick={() => setMobileMenu("different")}
                      >
                        <Typography
                          sx={theme => ({
                            fontWeight: 'bold',
                            fontSize: 21,
                            color: theme.palette.secondary.light
                          })}
                        >
                          {t("We're Different")}
                        </Typography>

                        <Image
                          src={"/images/arrow-right.svg"}
                          alt="arrow-right"
                          width={38}
                          height={38}
                        />
                      </MenuItem>
                      <MenuItem
                        sx={theme => ({
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          height: 50
                        })}
                        onClick={() => setMobileMenu("coaching")}
                      >
                        <Typography
                          sx={theme => ({
                            fontWeight: 'bold',
                            fontSize: 21,
                            color: theme.palette.secondary.light
                          })}
                        >
                          {t("Coaching")}
                        </Typography>
                        <Image
                          src={"/images/arrow-right.svg"}
                          alt="arrow-right"
                          width={38}
                          height={38}
                        />
                      </MenuItem>
                      <MenuItem
                        sx={theme => ({
                          fontWeight: 'bold',
                          fontSize: 21,
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          color: theme.palette.secondary.light,
                          height: 50
                        })}
                        component={Link}
                        href={'/contact-us'}
                        onClick={toggleDrawer(false)}
                      >
                        {t("Contact Us")}
                      </MenuItem>
                      <MenuItem
                        sx={theme => ({
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: theme.palette.secondary.light,
                          height: 50
                        })}
                        onClick={() => setMobileMenu("language")}
                      >
                        <Typography
                          sx={theme => ({
                            fontWeight: 'bold',
                            fontSize: 21,
                            color: theme.palette.secondary.light
                          })}
                        >
                          {t("Change Language")}
                        </Typography>
                        <Image
                          src={"/images/arrow-right.svg"}
                          alt="arrow-right"
                          width={38}
                          height={38}
                        />
                      </MenuItem>
                      <MenuItem
                        sx={theme => ({
                          fontWeight: 'bold',
                          fontSize: 21,
                          borderTop: `2px solid ${theme.palette.secondary.light}`,
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.secondary.light} !important`,
                          height: 50
                        })}
                        onClick={() => scrollToSection('Contact')}
                      >
                        {t("Book A Discovery Call")}
                      </MenuItem>
                    </> :
                    null
                  }
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div >
  );
}