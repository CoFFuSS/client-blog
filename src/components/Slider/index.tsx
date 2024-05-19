'use client';

import { useState } from 'react';

import { testimonials } from '@/constants/testimonials';

import { LeftArrow } from '../Icons/LeftArrow';
import { RightArrow } from '../Icons/RightArrow';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <h3>Slider</h3>
      <div>
        {activeSlide > 0 && <LeftArrow onClick={handlePrev} />}
        {activeSlide < testimonials.length - 1 && <RightArrow onClick={handleNext} />}
      </div>
    </div>
  );
}
