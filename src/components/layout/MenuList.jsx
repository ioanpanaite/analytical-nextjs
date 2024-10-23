import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'

export default function MenuList(props) {
  const { anchorEl, open, handleClose, list } = props

  return (
    <Menu
      key={Math.random()}
      anchorEl={anchorEl}
      id={`${Math.random()}-menu`}
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: theme => ({
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          borderRadius: 'unset',
          backgroundColor: theme.palette.primary.main,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
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
        }),
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      {
        list && list.map(val => {
          return (
            <MenuItem
              key={val.title}
              onClick={handleClose}
              component={Link}
              href={val.link}
              sx={{ 
                color: theme => theme.palette.secondary.light,
                fontSize: '13px',
                fontFamily: 'Inter',
                padding: '7px 16px'
              }}
            >
              {val.title}
            </MenuItem>
          )
        })
      }
    </Menu>
  )
}