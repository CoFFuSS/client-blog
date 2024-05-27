interface ContactFormFields {
  name: 'fullName' | 'email' | 'officeLocation' | 'message';
  variant: 'primary' | 'secondary';
  placeholder: string;
  dataCy: string;
  type: string;
}

export const contactFormInputs: ContactFormFields[] = [
  {
    name: 'fullName',
    variant: 'secondary',
    placeholder: 'inputs.name',
    dataCy: 'full-name-input',
    type: 'text',
  },
  {
    name: 'email',
    variant: 'secondary',
    placeholder: 'inputs.email',
    dataCy: 'email-input',
    type: 'email',
  },
];
