import { getEnv } from '@/utils/getEnvVar';

type LogoPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;

export const mapConfig = {
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40] as [number, number],
  zoom: 9,
  attributionControl: false,
  logoPosition: 'top-left' as LogoPosition,
  accessToken: getEnv('mapboxglKey'),
};
