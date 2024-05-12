'use client';

import { forwardRef, ForwardedRef } from 'react';

interface InputProps {
  placeholder?: string;
  dataCy: string;
  type: string;
  name: string;
}

const Input = forwardRef(
  (
    { placeholder = '', dataCy, type, name, ...restProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <>
      <input
        ref={ref}
        placeholder={placeholder}
        data-cy={dataCy}
        type={type}
        id={name}
        {...restProps}
      />
    </>
  ),
);

export default Input;
