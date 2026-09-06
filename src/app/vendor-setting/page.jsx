import Footer from '@/components/footer'
import VendorNavBar from '@/components/vendorNavBar'
import React from 'react'

const Page = () => {
    return (
        <div className=' flex flex-col gap-4' >
            <VendorNavBar page={"setting"} />
            <div className=' w-full mx-auto max-w-7xl p-4'   >
                <p className=' text-2xl font-semibold' >Settings</p>
                <div className=' bg-gray-100 w-full flex flex-col gap-4 p-6 rounded-lg ' >
                    <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                    <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                    <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                    <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                    <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page