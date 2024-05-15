'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FooterFormFields, TypeFooterForm, footerFormSchema } from '@/utils/footerFormSchema';
import { sendEmailFooter } from '@/utils/sendEmail';

import styles from './styled.module.scss';

import Button from '../Button';
import Input from '../Input';

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FooterFormFields>({ resolver: zodResolver(footerFormSchema), mode: 'onChange' });

  const handleSendEmail = async (data: TypeFooterForm) => {
    try {
      await sendEmailFooter(data.email);
    } catch (err) {
      const error = err as Error;

      throw new Error(`Something went wrong:${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Subscribe to our news letter to get latest updates and news</h1>
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className={styles.form}
      >
        <div className={styles.input}>
          <Input
            dataCy='subscribes-email-input'
            type='email'
            variant='primary'
            {...register('email')}
          />
          <h5>{errors && errors.email?.message}</h5>
        </div>

        <Button
          disabled={!isDirty || !isValid}
          dataCy='footer-form-button'
          variant='primary'
          isSubmit
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
