import { Bell, ChartNoAxesCombined, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const VendorNavBar = ({ page }) => {
  return (
    <div className=' border-b-4 w-full'>
      <div className=' flex flex-col md:flex-row justify-between max-w-7xl w-full mx-auto md:items-center gap-6 py-3 px-4' >
        <div className=' flex items-center justify-start  gap-2' >
          <p className=' text-xl md:text-4xl font-semibold ' >Vendor's Profile Page</p>
        </div>
        <div className=' flex items-center flex-col md:flex-row gap-2' >
          <div className='w-full  flex items-center gap-2' >
            <Link href={'/vendor-setting'} className={`w-full justify-center px-3 py-2 border flex items-center gap-2  rounded-md ${page === "setting" ? "bg-primary-red text-white":"text-primary-red"} `} >
              <p className=' font-medium' >Settings</p>
              <Settings size={20} />
            </Link>
            <Link href={'/vendor-report'} className={`w-full justify-center px-3 py-2 border flex items-center gap-2  rounded-md ${page === "report" ? "bg-primary-red text-white":"text-primary-red"} `} >
              <p className=' font-medium' >Reports</p>
              <ChartNoAxesCombined size={20} color='#b91c1c' />
            </Link>
          </div>
          <div className=' w-full flex items-center gap-2'>
            <Link href={'/vendor-dashbord'} className={`w-full justify-center px-3 py-2 border flex items-center gap-2  rounded-md ${page === "dashbord" ? "bg-primary-red text-white":"text-primary-red"} `} >
              <p className=' font-medium' >Profile</p>
              <User size={20} />
            </Link>
            <div className=' mx-3 relative' >
              <Bell size={20} color='#4b5563' />
              <p className=' size-5 flex items-center justify-center bg-primary-red rounded-full text-white absolute -top-3 -right-2 text-xs font-semibold  ' >4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorNavBar