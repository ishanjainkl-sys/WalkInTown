import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className=' w-full py-3 border-b-2' >
        <div className=' w-full flex items-center gap-4 justify-between max-w-7xl mx-auto px-4' >
            <p className=' text-4xl font-semibold' >Admin Dashboard</p>
            <div className=' flex gap-4 items-center' >
                <div className=' py-2 px-3 border-2 rounded-md border-primary-red text-primary-red flex items-center gap-2 ' >
                    <p className=' font-semibold' >Settings</p>
                    <Settings size={20} />
                </div>
                <Link href={'/admin'} className=' py-2 px-3 border-2 rounded-md border-primary-red text-primary-red flex items-center gap-2 ' >
                    <p className=' font-semibold' >Vendor</p>
                    <img src="./vendor-store-red.svg" alt="" />
                </Link>
                <Link href={'/admin-customer'} className={`py-2 px-3  rounded-md flex items-center gap-2 ${page === "customer" ? "bg-primary-red text-white" : "border-primary-red border-2 text-primary-red"} `} >
                        <p className=' font-semibold' >Customers</p>
                        <img src="./costmer.svg" alt="" />
                    </Link>
                <img src="./bell.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default NavBar