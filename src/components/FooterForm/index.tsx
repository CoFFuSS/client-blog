'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TypeFooterForm, footerFormSchema } from '@/utils/footerFormSchema';

import styles from './styled.module.scss';

import Button from '../Button';
import Input from '../Input';

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<TypeFooterForm>({ resolver: zodResolver(footerFormSchema), mode: 'onChange' });

  const handleSendEmail = () => {};

  return (
    <div className={styles.container}>
      <h1>Subscribe to our news letter to get latest updates and news</h1>
      <form onSubmit={handleSubmit(handleSendEmail)}>
        <Input
          {...register('email')}
          dataCy='subscribes-email-input'
          type='email'
          name='email-input'
        />
        <h3>{errors && errors.email?.message}</h3>
        <Button
          disabled={!isDirty || !isValid}
          dataCy='footer-form-button'
          variant='primary'
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
