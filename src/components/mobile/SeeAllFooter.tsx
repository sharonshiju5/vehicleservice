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

function SeeAllFooter({ toggleCart }: MobileHeaderProps) {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(true);
  const [regionName, setRegionName] = React.useState<string | null>(null);
  const [country, setCountry] = React.useState<string | null>(null);
  const [city, setcity] = React.useState<string | null>(null);
  const [showLocationModal, setShowLocationModal] = React.useState(false);
  const [showLocationInput, setShowLocationInput] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
          const savedLocationsData = localStorage.getItem('savedLocations');
          if (savedLocationsData) {
            const locations = JSON.parse(savedLocationsData);
            if (locations.length > 0) {
              const location = locations[0]; // Get the most recent location
              setcity(location.city);
              setRegionName(location.regionName);
              setCountry(location.country);
              setShowLocationInput(true); // Show input field when city exists
            }
          }
          setLoading(false);
        }
        
        const handleStorageChange = () => {
          const savedLocationsData = localStorage.getItem('savedLocations');
          if (savedLocationsData) {
            const locations = JSON.parse(savedLocationsData);
            if (locations.length > 0) {
              const location = locations[0];
              setcity(location.city);
              setRegionName(location.regionName);
              setCountry(location.country);
            }
          }
        };
        
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
      }, []);
  return (
    <div className='mobile-header w-full bg-white position-fixed px-4 py-3 shadow-sm border-t border-gray-200'>
      {/* Where Section */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-medium text-sm">Where</span>
          <span className="text-gray-500 text-sm cursor-pointer" onClick={() => setShowLocationModal(true)}>Search Location</span>
        </div>
      </div>
      
      {showLocationInput ? (
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2">
          <MdLocationOn size={20} className="text-gray-400" />
          <input 
            type="text" 
            value={city ? `${city}${regionName ? ', ' + regionName : ''}` : 'Select Location'}
            readOnly
            onClick={() => setShowLocationModal(true)}
            className="flex-1 bg-transparent outline-none text-gray-700 cursor-pointer"
          />
        </div>
      ) : (
        <button 
          onClick={() => setShowLocationInput(true)}
          className="w-full bg-[#8948F9] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search...
        </button>
      )}
        
        <MobileLocationModal 
          isOpen={showLocationModal}
          onClose={() => setShowLocationModal(false)}
          selectedLocation={city ?? regionName ?? undefined}
          onLocationSelect={(location) => {
            const locationData = {
              city: location.name,
              regionName: location.state || '',
              country: location.country || 'Unknown',
              address: `${location.name}${location.state ? ', ' + location.state : ''}`,
              coordinates: { latitude: 0, longitude: 0 },
              source: 'manual',
              isApproximate: true,
              timestamp: new Date().toISOString()
            };
            
            const savedLocationsData = localStorage.getItem('savedLocations');
            const savedLocations = savedLocationsData ? JSON.parse(savedLocationsData) : [];
            const updatedLocations = [locationData, ...savedLocations.filter((loc: any) => 
              loc.city !== locationData.city || loc.regionName !== locationData.regionName
            ).slice(0, 4)];
            
            localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
            
            setcity(location.name);
            setRegionName(location.state || '');
            setCountry(location.country || null);
            setShowLocationInput(true); // Show input field after selection
            
            window.dispatchEvent(new Event('storage'));
          }}
        />
    </div>
  )
}

export default SeeAllFooter
