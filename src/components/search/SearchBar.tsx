import React from 'react'
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
    onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <div>
            <div className="relative mx-auto max-w-md">
                <div className="flex items-center mx-auto border rounded-[100px] px-1 py-1 border-[#1212121A] bg-white w-[100%] h-[55px]">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => onSearch(e.target.value)}
                        className="ml-2 w-full h-[30px] pl-2 outline-none text-gray-600 placeholder-gray-400 text-sm"
                    />
                    <div className="w-12 h-12 bg-[#FF5C02] rounded-full flex items-center justify-center cursor-pointer flex-shrink-0">
                        <CiSearch className="text-white text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar