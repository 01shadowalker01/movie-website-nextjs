import React from "react"


const SearchBar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`flex gap-2 items-center mb-6 ${className}`}>
            <label htmlFor="search-bar" className="text-white">Search</label>
            <input id="search-bar" className="bg-white rounded-md text-md p-2" placeholder="Example: inception" />
        </div>
    )
}

export default SearchBar