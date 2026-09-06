import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const VendorFooterBar = ({ num }) => {
    // console.log(num)
    const showBack = num != 1
    return (
        <div className=' w-full px-4 max-w-6xl mx-auto justify-end flex gap-4 items-center' >
            {showBack &&
                <Link href={`/vendor-dashbord?form=${String(num) - 1}`} className=' flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2' >
                    <p className=' font-semibold'>Back</p>
                    <ArrowLeft size={20} />
                </Link>
            }
            <Link href={`/vendor-dashbord?form=${Number(num) + 1}`} className=' w-fit  rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2' >
                <p className=' font-semibold'>Next</p>
                <ArrowRight color='white' size={20} />
            </Link>
        </div>
    )
}

export default VendorFooterBar