'use client';

import { createPortal } from 'react-dom';
import { useState } from 'react';

import Button from '@/components/Button';

import styles from './styles.module.scss';

interface ModalProps {
  buttonContent: string;
}

export default function VideoModal({ buttonContent }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Button
        dataCy='modal-button'
        variant='primary'
        onClick={handleOpenModal}
      >
        {buttonContent}
      </Button>
      {isOpen &&
        createPortal(
          <div className={styles.overlay}>
            <div className={styles.content}>
              <button
                className={styles.close}
                onClick={handleCloseModal}
                type='button'
              />
              <iframe
                className={styles.iframe}
                src='http://www.youtube.com/embed/f4l837aCudU?si=764cfpwa2KtlNxjB?autoplay=1'
                title='Youtube video player'
                allow='autoplay; gyroscope'
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
