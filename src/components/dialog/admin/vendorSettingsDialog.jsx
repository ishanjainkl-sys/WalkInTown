"use client";
import React, { useEffect } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../../ui/dialog'
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgePercent, BadgePercentIcon, Camera, CircleUser, Megaphone, BookImage, CalendarDays, CalendarDaysIcon, CameraIcon, Check, ChevronLeftIcon, ChevronRightIcon, CopyPlus, Info, Menu, Pencil, ScanQrCode, ShapesIcon, Square, X, ChartPie, ChevronDown } from 'lucide-react';
import WomenBox from '@/components/womenBook';
import VendorAdminNavBar from './vendorAdminNavBar';

const VendorSettingsDialog = ({ isOpen, setIsVendorReport, setIsVendorSetting, setIsEditVendor }) => {

    return (
        <Dialog open={isOpen}>
            <DialogContent className=" max-w-7xl w-full max-h-[80vh] h-full overflow-y-auto" >
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center justify-center sm:text-left"} >
                    <X onClick={() => setIsVendorSetting(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <DialogTitle className="text-center" ></DialogTitle>
                    <VendorAdminNavBar setIsVendorReport={setIsVendorReport} setIsVendorSetting={setIsVendorSetting} setIsEditVendor={setIsEditVendor} page={"setting"} />
                    <div className=' w-full mx-auto max-w-7xl p-4'   >
                        <p className=' text-2xl font-semibold' >Settings</p>
                        <div className=' bg-gray-100 w-full flex flex-col gap-4 p-6 rounded-lg ' >
                            <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                            <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                            <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                            <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                            <div className=' bg-gray-200 w-full h-16 rounded-lg' ></div>
                        </div>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default VendorSettingsDialog;