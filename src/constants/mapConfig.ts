import { getEnv } from '@/utils/getEnvVar';

export const mapConfig = {
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [30.5, 50.5] as [number, number],
  zoom: 3,
  accessToken: getEnv('mapboxglKey'),
};
