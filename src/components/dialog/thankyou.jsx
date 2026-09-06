import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import { X } from 'lucide-react';

const ThankYou = ({ isOpen, setIsOpen, handleOTPDialog, setUserLogin }) => {
    function handleOTP() {
        setIsOpen(false);
        handleOTPDialog(true);
    }
    function handleUserLogin() {
        setIsOpen(false);
        setUserLogin(true);
    }
    return (
        <Dialog open={true}>
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
                    <DialogTitle className="text-center" >Create Account for WalkInTown</DialogTitle>
                    <DialogDescription className="text-center" >
                        Please enter your Email id/User Id Or Phone numbers to receive the verification code.
                    </DialogDescription>
                    <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                        <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="password" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <p onClick={handleOTP} className='cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md' >Send OTP</p>
                    </div>
                    <div className=' flex items-center gap-2' >
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                        <p>or</p>
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                    </div>
                    <p>Already have an account ?<span onClick={handleUserLogin} className=' cursor-pointer text-primary-red' > Log In </span></p>
                    <p className=' text-center text-sm' >By proceeding, you agree to WalkIn Town <span className=' text-primary-red' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-primary-red' >Privacy Policy.</span></p>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ThankYou