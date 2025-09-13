import ShopCategories from '@/components/frontend/ShopCategories'
import ShopBanner from '@/components/frontend/ShopBanner'
import ShopFrontLayout from '@/layouts/shop-front-layout'

export default function home() {
  return (
    <ShopFrontLayout>
        <div className="min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <div className="py-16">
                    <ShopBanner />
                </div>
                <ShopCategories />
            </div>
        </div>
    </ShopFrontLayout>
  )
}
