import emailjs from '@emailjs/browser';

import { getEnv } from './getEnvVar';
import { ContactFormFields } from './contactFormSchema';

const serviceId = getEnv('serviceId');
const templateId = getEnv('templateId');
const userId = getEnv('userId');

export const sendEmailFooter = async (email: string) => {
  if (serviceId && templateId && userId) {
    await emailjs.send(serviceId, templateId, { user_email: email }, userId);
  }
};

export const sendEmailContacts = async ({
  fullName,
  email,
  officeLocation,
  message,
}: ContactFormFields) => {
  if (serviceId && templateId && userId) {
    const templateParams = {
      user_name: fullName,
      user_email: email,
      user_country: officeLocation,
      user_message: message,
    };

    await emailjs.send(serviceId, templateId, templateParams, userId);
  }
};
