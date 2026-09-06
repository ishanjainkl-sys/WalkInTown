import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import Link from 'next/link';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

const LoginDialog = ({ isOpen, setIsOpen, handleOTPDialog, handleCreateAccount }) => {

    function handleCreateAccountDialog() {
        setIsOpen(false);
        handleCreateAccount(true);
    }

    function handleForgotPassword() {
        setIsOpen(false);
        handleOTPDialog(true);
    }
    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
                    <DialogTitle className="text-center" >Log In to WalkinTown </DialogTitle>
                    <DialogDescription className="text-center" >
                        Please login to continue
                    </DialogDescription>
                    <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                        <input type="text" placeholder='User Id' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        {/* <input type="text" placeholder='Phone Number' className=' w-full border py-2 px-3 text-gray-700 rounded-md' /> */}
                        <Link href={"/vendor-dashbord"} className='cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md' >Login</Link>
                    </div>
                    <div className=' w-full flex-col md:flex-row flex items-center gap-4 justify-center' >
                        <div className=' flex items-center gap-2' >
                            <input type="checkbox" className=" size-4" />
                            <p>Remember Password</p>
                        </div>
                        <p onClick={handleForgotPassword} className=' cursor-pointer text-primary-red' >Forgot Password ?</p>
                    </div>
                    <div className=' flex w-full my-6 items-center gap-2' >
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                        <p>or</p>
                        <div className=' w-full h-0.5 bg-gray-200' ></div>
                    </div>
                    <p>Don’t have an account ? <span onClick={handleCreateAccountDialog} className=' cursor-pointer text-primary-red' > Create Account</span></p>
                    <p className=' text-center text-sm' >By proceeding, you agree to WalkIn Town <span className=' text-primary-red' >Terms of Service</span> and acknowledge WalkIn Town <span className=' text-primary-red' >Privacy Policy.</span></p>
                </DialogHeader>
                {/* <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <DialogClose>Continue</DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog