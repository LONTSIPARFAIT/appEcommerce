
import ShopFooter from '@/components/frontend/ShopFooter'
import ShopHeader from '@/components/frontend/ShopHeader'
import { ThemeProvider } from '@/components/theme-provider'
import React, { ReactNode } from 'react'

export default function ShopFrontLayout({children}:{children:ReactNode}) {
  return (
    // <GlobalLayout></GlobalLayout>
    <div>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ShopHeader />
                {children}
            <ShopFooter />
        </ThemeProvider>
    </div>
  )
}
