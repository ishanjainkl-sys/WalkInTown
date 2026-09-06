import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import Link from 'next/link';
import { X } from 'lucide-react';

const ChangePassDialog = ({ isOpen, setIsOpen, handleUserLogin }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center sm:text-left"} >
                    <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <img src="./user-login.svg" className=' size-24 mx-auto' alt="" />
                    <DialogTitle className="text-center" >Reset Password</DialogTitle>
                    <DialogDescription className="text-center" >
                        Create a new password.
                    </DialogDescription>
                    <div className=' max-w-80 flex flex-col mx-auto items-center gap-2' >
                        <input type="text" placeholder='New Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <input type="text" placeholder='Confirm Password' className=' w-full border py-2 px-3 text-gray-700 rounded-md' />
                        <div onClick={()=>{setIsOpen(false) ;handleUserLogin(true)}} className='cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md' >Save</div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePassDialog