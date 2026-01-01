import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from '../services/auth/slice';
import toast from 'react-hot-toast';

interface LocationData {
  city?: string;
  coordinates?: { latitude: number; longitude: number };
  timestamp?: string;
  [key: string]: unknown;
}

interface RootState {
  user?: {
    userDetails?: {
      location?: LocationData;
      token?: string;
    };
  };
  location?: {
    currentLocation?: LocationData;
  };
}

export const useLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.user?.userDetails?.location);
  const currentLocation = useSelector((state: RootState) => state.location?.currentLocation);
  const userToken = useSelector((state: RootState) => state.user?.userDetails?.token);
  const [localLocation, setLocalLocation] = useState<LocationData | null>(null);

  const setLocation = (locationData: LocationData) => {
    const enhancedLocationData = {
      ...locationData,
      timestamp: locationData?.timestamp ?? new Date().toISOString(),
      coordinates: locationData?.coordinates ?? { latitude: 0, longitude: 0 },
    };

    dispatch(updateLocation(enhancedLocationData));
    dispatch({ type: 'location/setCurrentLocation', payload: enhancedLocationData });
    
    localStorage?.setItem('userLocation', JSON.stringify(enhancedLocationData));
    
    setLocalLocation(enhancedLocationData);
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('axiosConfigRefresh'));
    }
  };

  useEffect(() => {
    const savedLocation = localStorage?.getItem('userLocation');
    const savedLocations = localStorage?.getItem('savedLocations');
    const sessionLocation = sessionStorage?.getItem('userLocation');
    
    let locationToLoad = null;
    
    if (savedLocation) {
      locationToLoad = JSON.parse(savedLocation);
    } else if (savedLocations) {
      const locations = JSON.parse(savedLocations);
      if (locations.length > 0) {
        locationToLoad = locations[0];
      }
    } else if (sessionLocation) {
      locationToLoad = JSON.parse(sessionLocation);
    }
    
    if (locationToLoad) {
      dispatch(updateLocation(locationToLoad));
      dispatch({ type: 'location/setCurrentLocation', payload: locationToLoad });
      setLocalLocation(locationToLoad);
    } else if (!location?.city && !currentLocation?.city) {
      setLocalLocation(null);
    }
  }, []); // Run only on mount

  useEffect(() => {
    if (!userToken) {
      setLocalLocation(null);
      dispatch({ type: 'location/clearLocation' });
    }
  }, [userToken, dispatch]);

  return {
    location: localLocation || currentLocation || location,
    setLocation,
    hasLocation: Boolean(localLocation?.city || currentLocation?.city || location?.city),
    coordinates: localLocation?.coordinates || currentLocation?.coordinates || location?.coordinates,
  };
};
