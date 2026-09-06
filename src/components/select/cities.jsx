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

export function SelectCities() {
    return (
        <Select>
            <SelectTrigger className="w-full md:w-auto">
                <SelectValue placeholder={<Label />} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>Jagatpura</SelectLabel> */}
                    <SelectItem value="apple">Jagatpura</SelectItem>
                    <SelectItem value="banana">Vaishali</SelectItem>
                    <SelectItem value="blueberry">Mansarovar</SelectItem>
                    <SelectItem value="grapes">Malviya Nagar</SelectItem>
                    <SelectItem value="pineapple">Rajapark</SelectItem>
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
                City
            </p>
        </div>
    )
}