/* eslint-disable prettier/prettier */
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import ThemeProvider from '@/context/theme/provider'
import NavBar from './components/NavBar'
import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider>
            <NavBar/>
            {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
