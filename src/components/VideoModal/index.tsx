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
        data-testid='modal-button'
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
                data-cy='close-modal-button'
                data-testid='close-modal-button'
                className={styles.close}
                onClick={handleCloseModal}
                type='button'
              />
              <iframe
                data-cy='modal'
                data-testid='modal'
                className={styles.iframe}
                src='https://www.youtube.com/embed/f4l837aCudU?si=764cfpwa2KtlNxjB?autoplay=1'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
