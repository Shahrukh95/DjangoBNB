import Image from "next/image";

const SearchFilters = () => {
    return (
        <div className="h-[48px] lg:h-[64] flex flex-row items-center justify-between border border-gray-300 rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted location</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add guests</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
                    <Image src="/search.svg" alt="Search Icon" width={16} height={16} />
                </div>
            </div>
        </div> 
    )
}

export default SearchFilters;