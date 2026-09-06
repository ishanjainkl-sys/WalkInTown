

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

const GallaryDialog = ({ isOpen, setIsOpen }) => {
    const gallaryData = [
        { src: "./q1.png", alt: "gallery image" },
        { src: "./q2.png", alt: "gallery image" },
        { src: "./q3.png", alt: "gallery image" },
        { src: "./q4.png", alt: "gallery image" },
        { src: "./q5.png", alt: "gallery image" },
        { src: "./q6.png", alt: "gallery image" },
        { src: "./q7.png", alt: "gallery image" },
        { src: "./q8.png", alt: "gallery image" },
        { src: "./q9.png", alt: "gallery image" },
        { src: "./q10.png", alt: "gallery image" },
        { src: "./q11.png", alt: "gallery image" },
        { src: "./q12.png", alt: "gallery image" },
        { src: "./q13.png", alt: "gallery image" },
        { src: "./q14.png", alt: "gallery image" },
        { src: "./q15.png", alt: "gallery image" },
        { src: "./q16.png", alt: "gallery image" },
        { src: "./q17.png", alt: "gallery image" },
        { src: "./q18.png", alt: "gallery image" },
    ];

    return (
        <Dialog open={isOpen}>
            <DialogContent className=" max-w-none w-full max-h-[80vh] overflow-y-auto">
                <DialogHeader className={"flex flex-col space-y-1.5 items-center text-center sm:text-left"} >
                    <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <DialogTitle className="py-6 text-5xl text-center font-semibold" >
                        Our Gallery
                    </DialogTitle>
                    <DialogDescription className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6" >
                        {gallaryData.map((item, index) => (
                            <img
                                src={item.src}
                                alt={item.alt}
                                key={index}
                                className="w-full aspect-square rounded-md"
                            />
                        ))}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        // <p>jgkjv</p>
    )
}

export default GallaryDialog;

