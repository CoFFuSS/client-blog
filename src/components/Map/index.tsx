'use client';

import { useMap } from '@/hooks/useMap';

import styles from './styles.module.scss';

export function Map() {
  const mapContainerRef = useMap();

  return (
    <div
      ref={mapContainerRef}
      className={styles.map}
    />
  );
}
