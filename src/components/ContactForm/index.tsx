'use client';

import React, { Fragment } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

import Input from '@/components/Input';
import { contactFormInputs } from '@/constants/contactFormInputs';
import { officeLocations } from '@/constants/officeLocations';
import { FormValues, contactFormSchema } from '@/utils/contactFormSchema';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const t = useTranslations('contact.form');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Your emailjs logic here
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message', error);
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {contactFormInputs.map(({ variant, placeholder, dataCy, type, name }) => (
          <Fragment key={dataCy}>
            <Input
              variant={variant}
              placeholder={t(`${placeholder}`)}
              dataCy={dataCy}
              type={type}
              {...register(name)}
            />
            {errors[name] && <p>{errors[name]?.message}</p>}
          </Fragment>
        ))}
      </div>

      <div>
        <select
          id='officeLocation'
          {...register('officeLocation')}
        >
          {officeLocations.map((location) => (
            <option
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
          id='message'
          {...register('message')}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <button type='submit'>Send Message</button>
    </form>
  );
}
