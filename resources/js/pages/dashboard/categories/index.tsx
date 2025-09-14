import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Products() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Product' />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <h2 className=''>This is the Dashboard Products Page</h2>
        </div>
    </AppLayout>
  )
}

