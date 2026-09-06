import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../../ui/dialog'
import Link from 'next/link';
import { X } from 'lucide-react';

const DeleteVendor = ({ isOpen, setIsOpen, handleOTPDialog }) => {
    function handleChangePass() {
        setIsOpen(false);
    }
    return (
        <Dialog open={isOpen}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <DialogTitle className="text-center" >Confirm Delete</DialogTitle>
                    <DialogDescription className="text-center" >
                    </DialogDescription>
                    <div className=' w-full pt-8 justify-between gap-4 flex items-center' >

                        <p onClick={handleChangePass} className='cursor-pointer w-full border border-primary-red  text-center font-semibold py-2 px-3 rounded-md' >Cancel</p>
                        <p onClick={handleChangePass} className='cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md' >Delete</p>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteVendor;