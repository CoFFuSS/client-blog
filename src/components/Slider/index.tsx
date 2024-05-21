'use client';

import { useState } from 'react';
import Image from 'next/image';

import { testimonials } from '@/constants/testimonials';
import { LeftArrow } from '@/components/Icons/LeftArrow';
import { RightArrow } from '@/components/Icons/RightArrow';

import styles from './styles.module.scss';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  const currentTransform = -activeSlide * 100;

  return (
    <div className={styles.slider}>
      <div
        className={styles.slider__items}
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {testimonials.map(({ authorName, location, photo, text, id }, index) => (
          <div
            key={id}
            className={`${styles.slider__item} ${index === activeSlide ? styles.active : ''}`}
          >
            <p className={styles.text}>{text}</p>
            <div className={styles.author__row}>
              <Image
                src={photo}
                alt={authorName}
                width={48}
                height={48}
              />
              <div>
                <p className={styles.author__name}>{authorName}</p>
                <p className={styles.author__location}>{location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        {activeSlide > 0 && <LeftArrow onClick={handlePrev} />}
        {activeSlide < testimonials.length - 1 && <RightArrow onClick={handleNext} />}
      </div>
    </div>
  );
}
