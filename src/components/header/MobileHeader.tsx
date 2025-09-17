import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaRegBell } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi'
import MobileLocationModal from '../mobile/MobileLocationModal'

interface MobileHeaderProps {
  toggleCart?: () => void;
}

function MobileHeader({ toggleCart }: MobileHeaderProps) {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(true);
  const [regionName, setRegionName] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);
  const [city, setcity] = React.useState<string | null>(null);
  const [showLocationModal, setShowLocationModal] = React.useState(false);

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
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowLocationModal(true)}>
          <MdLocationOn className="text-white text-xl" />
          <div>
            <div className="flex items-center gap-1 text-white font-normal text-[14px] leading-[18px] tracking-[0.03px] text-center">
             {`${city ?? regionName}, ${country}`.length > 12 ? `${`${city ?? regionName}, ${country}`.substring(0, 15)}...` : `${city ?? regionName}, ${country}`}
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
        
        <MobileLocationModal 
          isOpen={showLocationModal}
          onClose={() => setShowLocationModal(false)}
          selectedLocation={city ?? regionName ?? undefined}
          onLocationSelect={(location) => {
            setcity(location.name)
            setCountry(location.country || null)
          }}
        />
    </div>
  )
}

export default MobileHeader