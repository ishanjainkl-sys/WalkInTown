import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog';
import Link from 'next/link';
import { ArrowRight, Save, X } from 'lucide-react';

const PasswordChanged = ({ isOpen, setIsOpen }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className=" p-0 overflow-hidden">
                <DialogHeader className="">
                    <DialogTitle className="hidden"></DialogTitle>
                    <div className=' w-full h-full flex' >
                        {/* <img src="./login-page-bg.png" alt="" /> */}
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3' >
                            <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                            <div className=' w-full py-10 max-w-80 mx-auto p-4 flex flex-col gap-1 ' >
                                <div className=' flex gap-2 items-center' >
                                    <div className=' rounded-md h-1 w-full bg-primary-red' ></div>
                                    <p className=' text-2xl font-semibold text-primary-red whitespace-nowrap' >Your Password</p>
                                    <div className=' rounded-md h-1 w-full bg-primary-red' ></div>
                                </div>
                                <p className=' text-2xl font-semibold  text-primary-red whitespace-nowrap text-center' >successfully changed</p>
                                <p className=' text-gray-600 text-center mt-6'>Please login again to access your dashboard</p>
                                {/* <Link href={'/vendor-dashbord'} className=' bg-primary-red px-8 w-fit mx-auto mt-12 py-3 rounded-lg font-semibold gap-2 text-white text-center flex items-center justify-center' >
                                    <p>Next</p>
                                    <ArrowRight size={20} />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PasswordChanged;
