import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import { mapLocations } from '@/constants/mapLocations';
import { mapConfig } from '@/constants/mapConfig';

export const useMap = () => {
  const mapContainerRef = useRef(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        attributionControl: mapConfig.attributionControl,
        logoPosition: mapConfig.logoPosition,
        accessToken: mapConfig.accessToken,
      });

      mapLocations.forEach((location) => {
        new mapboxgl.Marker()
          .setLngLat(location.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 30 }).setHTML(`<p>${location.description}</p>`))
          .addTo(map);
      });

      return () => map.remove();
    }
  }, []);

  return mapContainerRef;
};
