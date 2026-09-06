import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronDown, MapPin, Tag } from "lucide-react"

export function SelectBrand() {
    return (
        <Select>
            <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder={<Label />} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>Jagatpura</SelectLabel> */}
                    <SelectItem value="apple">Zara</SelectItem>
                    <SelectItem value="banana">Bata</SelectItem>
                    <SelectItem value="blueberry">Nike</SelectItem>
                    <SelectItem value="grapes">Zudio</SelectItem>
                    <SelectItem value="pineapple">Puma</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


function Label() {
    return (
        <div className='flex items-center gap-1 border-gray-700 text-primary-red' >
            <Tag size={18} />
            <p className=' text-gray-700 text-sm font-semibold' >
                Brands
            </p>
        </div>
    )
}