'use client';

import React, { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import Input from '@/components/Input';
import { contactFormInputs } from '@/constants/contactFormInputs';
import { officeLocations } from '@/constants/officeLocations';
import { ContactFormFields, FormValues, contactFormSchema } from '@/utils/contactFormSchema';
import Button from '@/components/Button';
import { sendEmailContacts } from '@/utils/sendEmail';
import { Loader } from '@/components/Loading';

import styles from './styles.module.scss';

export default function ContactForm() {
  const [disabled, setDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('contact.form');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = async ({
    fullName,
    email,
    officeLocation,
    message,
  }: ContactFormFields) => {
    setDisabled(true);
    setIsLoading(true);

    try {
      await sendEmailContacts({ fullName, email, officeLocation, message });
      setIsSuccess(true);
    } catch (err) {
      const error = err as Error;
      console.error(`Something went wrong: ${error.message}`);
    } finally {
      reset();
      setDisabled(false);
      setIsLoading(false);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
    >
      {contactFormInputs.map(({ variant, placeholder, dataCy, type, name }) => (
        <Fragment key={dataCy}>
          <Input
            variant={variant}
            placeholder={t(`${placeholder}`)}
            dataCy={dataCy}
            type={type}
            {...register(name)}
          />
          {errors[name] && <h4 data-cy='error'>{errors[name]?.message}</h4>}
        </Fragment>
      ))}

      <div>
        <select
          className={styles.select}
          id='officeLocation'
          {...register('officeLocation')}
        >
          {officeLocations.map((location) => (
            <option
              className={styles.option}
              key={location.value}
              value={location.value}
            >
              {location.label}
            </option>
          ))}
        </select>
        {errors.officeLocation && <p>{errors.officeLocation.message}</p>}
      </div>
      <div>
        <textarea
          className={styles.textarea}
          placeholder={t('inputs.message')}
          id='message'
          {...register('message')}
        />
        {errors.message && <h4 data-cy='textarea-error'>{errors.message.message}</h4>}
      </div>
      <Button
        variant='primary'
        dataCy='send-form-button'
        type='submit'
        disabled={disabled || !isDirty || !isValid}
      >
        <h4>
          {t('button')} <span>{'>'}</span>
        </h4>
        {isLoading && <Loader />}
      </Button>
      {isSuccess && (
        <p
          data-cy='success'
          className={styles.success}
        >
          {t('success')}
        </p>
      )}
    </form>
  );
}
