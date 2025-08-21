import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaRegBell } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi'

interface MobileHeaderProps {
  toggleCart?: () => void;
}

function MobileHeader({ toggleCart }: MobileHeaderProps) {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(true);
  const [regionName, setRegionName] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);
  const [city, setcity] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
          const storedName = localStorage.getItem('name');
          const storedRegionName = localStorage.getItem('regionName');
          const storedCountry = localStorage.getItem('country');
          const storedcity = localStorage.getItem('city');
          setRegionName(storedRegionName);
          setCountry(storedCountry);
          setcity(storedcity);
          setLoading(false);
        }
      }, []);
  return (
    <div className=' mobile-header w-full h-[60px] bg-[#8948F9] position-fixed px-4 flex items-center justify-between '>
         {/* Location Section */}
        <div className="flex relative gap-1">
          <MdLocationOn className="text-white text-xl" />
          <div>
            {/* <div className="text-white text-xs">Location</div> */}
            <div className="flex absolute bottom-0 items-center gap-1 text-white font-normal text-[14px] leading-[18px] tracking-[0.03px] text-center">
             {city ?? regionName}, {country}
              
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* <RiSearchLine className="text-white text-xl cursor-pointer" /> */}
          {pathname === '/e-card' && (
            <PiShoppingCartSimpleDuotone 
              className="text-white text-xl cursor-pointer" 
              onClick={toggleCart}
            />
          )}
          <Link href="/notification">
            <FaRegBell className="text-white text-xl" />
          </Link>
        </div>
    </div>
  )
}

export default MobileHeader