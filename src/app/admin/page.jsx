"use client"
import CreateAccountThankYou from '@/components/dialog/createAccountThankyouDialog'
import PasswordChanged from '@/components/dialog/partnerChangePassOTP'
import PartnerCreateAccount from '@/components/dialog/partnerCreateAccount'
import PartnerOTPCreateAccount from '@/components/dialog/partnerOTP'
import PartnerOTPResetPass from '@/components/dialog/partnerOTPResetPass'
import PartnerResetPass from '@/components/dialog/partnerResetPass'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
    const [isPartnerReset, setIsPartnerPass] = useState(false);
    const [isPartnerOTPCreateAccount, setIspartnerOTPCreateAccount] = useState(false);
    const [isPartnerCreateAccount, setIsPartnerCreateAccount] = useState(false);
    const [isCreateAccountThankYou, setIsCreateAccountThankYou] = useState(false);
    const [isPartnerOTPReset, setIsPartnerOTPReset] = useState(false);
    const [isPassChanged, setIsPassChanged] = useState(false);
    return (
        <div>
            <PartnerResetPass isOpen={isPartnerReset} setIsOpen={setIsPartnerPass} handleNext={setIsPassChanged} />
            <PartnerOTPCreateAccount isOpen={isPartnerOTPCreateAccount} setIsOpen={setIspartnerOTPCreateAccount} handleNextDialog={setIsCreateAccountThankYou} />

            <PartnerOTPResetPass isOpen={isPartnerOTPReset} setIsOpen={setIsPartnerOTPReset} handleNextDialog={setIsPartnerPass} />

            <PartnerCreateAccount isOpen={isPartnerCreateAccount} setIsOpen={setIsPartnerCreateAccount} handleOTPDialog={setIspartnerOTPCreateAccount} />
            <CreateAccountThankYou isOpen={isCreateAccountThankYou} setIsOpen={setIsCreateAccountThankYou} />

            <PasswordChanged isOpen={isPassChanged} setIsOpen={setIsPassChanged} />

            <div className=' flex items-center h-screen' >
                <img src="./login-page-bg.png" className=' hidden lg:block w-full h-full' alt="" />
                <div className=' w-full' >
                    <div className={"flex flex-col gap-2 items-center text-center sm:text-left"} >
                        {/* <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' /> */}
                        <img src="./user-login.svg" className=' size-32 mx-auto' alt="" />
                        <div className=' flex items-center gap-2' >
                            <p className="text-center text-3xl font-semibold max-w-96 md:max-w-none" >Log In to Admin Dashboard </p>
                            <img src='./shop.svg' className=' hidden md:block size-8' />
                        </div>
                        {/* <p className=" -mt-2 mb-2 text-center" >
                            Please login to continue
                        </p> */}
                        <div className=' max-w-96 mt-4 flex flex-col mx-auto items-center gap-4' >
                            <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                            <input type="password" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                            <div className=' w-full flex-col md:flex-row flex md:items-center gap-4 md:justify-center' >
                                <div className=' flex items-center gap-2' >
                                    <input type="checkbox" className=" size-4" />
                                    <p>Remember Password</p>
                                </div>
                                <p onClick={() => setIsPartnerOTPReset(true)} className=' mr-auto md:mr-auto cursor-pointer text-primary-red' >Forgot Password ?</p>
                            </div>
                            <Link href={"/admin/vendor"} className='cursor-pointer flex items-center justify-center gap-2 w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md' >
                                <p>Login</p>
                                <LogIn size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page