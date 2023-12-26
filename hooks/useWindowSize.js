import { useEffect, useState } from 'react'

const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
}

// ** Pre-defined breakpoints
const screen = {
  xs: parseInt(breakpoints.xs, 10),
  sm: parseInt(breakpoints.sm, 10),
  md: parseInt(breakpoints.md, 10),
  lg: parseInt(breakpoints.lg, 10),
  xl: parseInt(breakpoints.xl, 10),
  xxl: parseInt(breakpoints.xxl, 10),
}

const calculateWindowSize = () => {
  const innerWidth = process.browser ? window.innerWidth : screen.xl
  return {
    width: innerWidth,
    isXs: true,
    isSm: innerWidth >= screen.sm,
    isMd: innerWidth >= screen.md,
    isLg: innerWidth >= screen.lg,
    isXl: innerWidth >= screen.xl,
    isXxl: innerWidth >= screen.xxl,
  }
}

export const useWindowSize = () => {
  // ** Initialize the window width and view mode
  const [windowWidth, setWindowWidth] = useState(() => calculateWindowSize())

  // ** Update window width
  const handleWindowWidth = () => {
    setWindowWidth(calculateWindowSize())
  }

  //* * Set window size
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)
    return () => window.removeEventListener('resize', handleWindowWidth)
  }, [])

  return windowWidth
}

export default useWindowSize
