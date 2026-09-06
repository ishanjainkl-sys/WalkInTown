import { Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = ({ page }) => {
    return (
        <div className=' w-full py-3 border-b-2' >
            <div className=' w-full flex-col md:flex-row  flex items-center gap-4 justify-between max-w-7xl mx-auto px-4' >
                <p className=' text-4xl font-semibold' >Admin Dashboard</p>
                <div className='flex-wrap flex gap-2 md:gap-4 items-center' >
                    <div className='  py-2 h-10 px-2 md:px-3 border-2 rounded-md border-primary-red text-primary-red flex items-center gap-2 ' >
                        <p className=' text-sm md:text-base font-semibold' >Settings</p>
                        <Settings size={20} />
                    </div>
                    <Link href={'/admin/vendor'} className={` py-2 h-10 px-2 md:px-3  rounded-md flex items-center gap-2 ${page === "admin" ? "bg-primary-red text-white" : "border-primary-red border-2 text-primary-red"} `} >
                        <p className=' text-sm md:text-base font-semibold' >Vendor</p>
                        {
                            page === "admin" ?
                                <img src="./../vendor-store-white.svg" alt="" /> :

                                <img src="./../vendor-store-red.svg" alt="" />
                        }
                    </Link>
                    <Link href={'/admin/customer'} className={` py-2 h-10 px-2 md:px-3 rounded-md flex items-center gap-2 ${page === "customer" ? "bg-primary-red text-white" : "border-primary-red border-2 text-primary-red"} `} >
                        <p className=' text-sm md:text-base font-semibold' >Customers</p>
                        <User size={20} />
                    </Link>
                    <img src="./bell.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar