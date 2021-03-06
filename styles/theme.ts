import { css, DefaultTheme } from "styled-components"

export const lightTheme: DefaultTheme = {
  mode: 'light',
  assets: {
    favico: '/avatar-white.png',
  },
  colors: {
    textPrimary: 'black',
    textGray: '#666666',
    gold: '#ae8d0b',
    goldHover: '#e0c56e',
    bg: 'white',
    bgInverse: "#292929",
    hoverBg: '#00000022',
    shadowBg: `rgb(0 0 0 / 5%)`,
    codeBlockBg: '#eeeeee',
    memoGradient: css`
    background-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 40%,rgba(255,255,255,1) 75%);
    background-image: -moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 40%,rgba(255,255,255,1) 75%);
    background-image: -o-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 40%,rgba(255,255,255,1) 75%);
    background-image: linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 40%,rgba(255,255,255,1) 75%);
    `,
    navBgGradient: css`
    background: -webkit-linear-linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 14%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%);
    background: -moz-linear-linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 14%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%);
    background: -o-linear-linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 14%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 14%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%);
    `
  }
}
export const darkTheme: DefaultTheme = {
  mode: 'dark',
  assets: {
    favico: '/avatar-black.png',
  },
  colors: {
    textPrimary: 'white',
    textGray: '#aaaaaa',
    gold: '#c4a747',
    goldHover: '#ae8d0b',
    bg: '#242424',
    bgInverse: 'white',
    hoverBg: '#ffffff55',
    shadowBg: `rgb(255 255 255 / 5%)`,
    codeBlockBg: '#3b3b3b',
    memoGradient: css`
    background-image: -webkit-linear-gradient(top,rgba(36,36,36,0) 0%,rgba(36,36,36,.8) 40%,rgba(36,36,36,1) 75%);
    background-image: -moz-linear-gradient(top,rgba(36,36,36,0) 0%,rgba(36,36,36,.8) 40%,rgba(36,36,36,1) 75%);
    background-image: -o-linear-gradient(top,rgba(36,36,36,0) 0%,rgba(36,36,36,.8) 40%,rgba(36,36,36,1) 75%);
    background-image: linear-gradient(top,rgba(36,36,36,0) 0%,rgba(36,36,36,.8) 40%,rgba(36,36,36,1) 75%);
    `,
    navBgGradient: css`
    background: -webkit-linear-linear-gradient(to right, rgba(36,36,36,0) 0%, rgba(36,36,36,0.8) 14%, rgba(36,36,36,1) 23%, rgba(36,36,36,1) 100%);
    background: -moz-linear-linear-gradient(to right, rgba(36,36,36,0) 0%, rgba(36,36,36,0.8) 14%, rgba(36,36,36,1) 23%, rgba(36,36,36,1) 100%);
    background: -o-linear-linear-gradient(to right, rgba(36,36,36,0) 0%, rgba(36,36,36,0.8) 14%, rgba(36,36,36,1) 23%, rgba(36,36,36,1) 100%);
    background: linear-gradient(to right, rgba(36,36,36,0) 0%, rgba(36,36,36,0.8) 14%, rgba(36,36,36,1) 23%, rgba(36,36,36,1) 100%);
    `,
    filterDarker: css`filter: brightness(0.8);`
  }
}

export const genSystemTheme = ((): DefaultTheme => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme : lightTheme
  return {
    ...theme,
    mode: 'system'
  }
})
