import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image'

export default function LanguageSwitcher() {
  const router = useRouter();

  const { locale, locales, defaultLocale } = router;

  useEffect(() => {
    setLan(locale)
  }, [])

  const [lan, setLan] = useState('en')
  const [anchorEl, setAnchorEl] = useState(null);
  const openLan = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle to change language
  const handleLan = (lan) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: lan }
    )
    setLan(lan)
    handleClose()
  }

  return (
    <div>
      <Button
        sx={{
          textTransform: 'none',
          margin: '0 5px',
          color: theme => theme.palette.primary.main,
          textTransform: 'uppercase',
          borderRadius: 'unset',
          fontWeight: 'bold',
          padding: '13px 15px',
          border: (openLan ? 'solid 2px' : 'solid 2px transparent'),
          '&:hover': {
            border: 'solid 2px',
            background: 'transparent'
          }
        }}
        aria-haspopup="true"
        aria-expanded={openLan ? 'true' : undefined}
        onClick={handleClick}
      >
        {lan}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openLan}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: 'unset',
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: theme => ({
            minWidth: '73px',
            overflow: 'visible',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.light,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              borderTop: `10px solid ${theme.palette.secondary.light}`,
              borderRight: '5px solid transparent',
              borderLeft: '5px solid transparent',
              zIndex: 0,
            },
          })
        }}
      >
        <MenuItem onClick={() => handleLan('en')} sx={{ fontSize: '13px', padding: '7px 16px' }}>
          EN
          &nbsp;&nbsp;
          {
            lan === 'en' &&
            <Image
              src={'/images/arrow-checked.svg'}
              alt="checked"
              width={19}
              height={7}
            />
          }
        </MenuItem>
        <MenuItem onClick={() => handleLan('fr')} sx={{ fontSize: '13px', padding: '7px 16px' }}>
          FR
          &nbsp;&nbsp;
          {
            lan === 'fr' &&
            <Image
              src={'/images/arrow-checked.svg'}
              alt="checked"
              width={19}
              height={7}
            />
          }
        </MenuItem>
      </Menu>
    </div>
  );
}