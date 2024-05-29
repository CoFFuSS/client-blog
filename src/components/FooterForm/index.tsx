'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FooterFormFields, TypeFooterForm, footerFormSchema } from '@/utils/footerFormSchema';
import { sendEmailFooter } from '@/utils/sendEmail';
import Button from '@/components/Button';
import Input from '@/components/Input';

import styles from './styles.module.scss';

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
      if (err instanceof Error) {
        console.error(`Something went wrong: ${err.message}`);
      } else {
        console.error('An unexpected error occurred', err);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Subscribe to our newsletter to get the latest updates and news</h1>
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
