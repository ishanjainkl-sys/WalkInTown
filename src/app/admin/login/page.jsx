import InputFild from '@/components/inputFild'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className=' w-full' >
        <div className=' border rounded-md p-4 max-w-md w-full mx-auto mt-12 ' >
            <p className=' text-2xl font-semibold text-center' >Admin Login</p>
            <p className=' text-gray-600 text-center' >Please enter your email & password</p>
            <div className=' w-full flex flex-col gap-4 mt-4' >
                <InputFild label={"Email"} inputName={"Email"} />
                <InputFild label={"Password"} inputName={"Password"} notNsc />
            </div>
            <Link href={'/admin'} className=' w-full justify-center flex items-center gap-2 border border-primary-red px-3 py-1.5 text-primary-red rounded-md mt-4' >
              <p className=' font-medium' >Login</p>
              <ArrowRight size={20} color='#b91c1c' />
            </Link>
        </div>
    </div>
  )
}

export default Page