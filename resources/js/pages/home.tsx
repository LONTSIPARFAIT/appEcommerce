import ShopBanner from '@/components/frontend/ShopBanner'
import ShopFrontLayout from '@/layouts/shop-front-layout'

export default function home() {
  return (
    <ShopFrontLayout>
        <div className="min-h-screen">
            <ShopBanner />
        </div>
    </ShopFrontLayout>
  )
}
