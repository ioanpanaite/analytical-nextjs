import { appWithTranslation } from 'next-i18next';
import Header from '@/components/layout/Header.jsx';
import nextI18NextConfig from '../../next-i18next.config.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '@/components/layout/Footer.jsx';
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 905,
      lg: 1240,
      xl: 1440,
      xxl: 1920,
      xxxl: 2560
    },
  },
  typography: {
    fontFamily: "Euclid Circular B",
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#472CBB',
      desc: '#09ECD0',
      dark: '#002884',
      contrastText: '#fff',
      possible: '#EEFF34',
      inno: '#FF8126',
      grey: '#FCF8E6',
      ground: '#FCF8E6',
      white: '#FFFFFF'
    },
    secondary: {
      light: '#09ECD0',
      main: '#FB64B3',
      dark: '#BC28FF',
      possible: '#FCF8E6',
      primary: '#4C23FF',
      contrastText: '#000',
      ground: '#FCF8E6',
      white: '#FFFFFF'
    },
  },
});

import '@/styles/globals.css'
import '@/styles/logoanimation.css'

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
      <GoogleAnalytics gaId="G-ZYNRXQ5H9J" />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);