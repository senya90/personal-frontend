import localFont from 'next/font/local'

export const mainFont = localFont({
  src: [
    {
      path: '../../../../../public/fonts/unifont/unifont.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/unifont/unifont.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/unifont/unifont.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/unifont/unifont.otf',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-main',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})
