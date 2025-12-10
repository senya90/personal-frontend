import localFont from 'next/font/local'

export const mainFont = localFont({
  src: [
    // MainFontRegular
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Regular.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Regular.otf',
      style: 'normal',
      weight: '400',
    },
    // MainFontItalic
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Italic.woff2',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Italic.woff',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Italic.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Italic.otf',
      style: 'italic',
      weight: '400',
    },
    // MainFontBoldRegular
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Bold.woff',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    // MainFontBoldItalic
    {
      path: '../../../../../public/fonts/firasans/FiraSans-BoldItalic.woff2',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-BoldItalic.woff',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-BoldItalic.ttf',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-BoldItalic.otf',
      style: 'italic',
      weight: '700',
    },
    // MainFontLightRegular
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Light.woff',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-Light.otf',
      style: 'normal',
      weight: '300',
    },
    // MainFontLightItalic
    {
      path: '../../../../../public/fonts/firasans/FiraSans-LightItalic.woff2',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-LightItalic.woff',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-LightItalic.ttf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../../../../public/fonts/firasans/FiraSans-LightItalic.otf',
      style: 'italic',
      weight: '300',
    },
  ],
  variable: '--font-main',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})
