
import ShopFooter from '@/components/dashboard/ShopFooter'
import ShopHeader from '@/components/dashboard/ShopHeader'
import React, { ReactNode } from 'react'

export default function ShopFrontLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <ShopHeader />
            {children}
        <ShopFooter />
    </div>
  )
}
