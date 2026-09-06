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

export function SelectLocation() {
    return (
        <Select>
            <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder={<Label />} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>Jagatpura</SelectLabel> */}
                    <SelectItem value="apple">Rajasthan</SelectItem>
                    <SelectItem value="banana">Punjab</SelectItem>
                    <SelectItem value="blueberry">Haryana</SelectItem>
                    <SelectItem value="grapes">Delhi</SelectItem>
                    <SelectItem value="pineapple">Uttar Pradesh</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


function Label() {
    return (
        <div className='flex items-center gap-1 border-gray-700 text-primary-red' >
            <MapPin size={18} />
            <p className=' text-gray-700 text-sm font-semibold' >
                Locations
            </p>
        </div>
    )
}