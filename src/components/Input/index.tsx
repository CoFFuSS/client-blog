'use client';

import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './styled.module.scss';

interface InputProps {
  variant: 'primary' | 'secondary';
  placeholder?: string;
  dataCy: string;
  type: string;
  name: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder = '', dataCy, type, name, variant, ...restProps }, ref) => (
    <>
      <input
        className={cn(styles.input, {
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
        })}
        ref={ref}
        placeholder={placeholder}
        data-cy={dataCy}
        type={type}
        name={name}
        {...restProps}
      />
    </>
  ),
);

export default Input;
