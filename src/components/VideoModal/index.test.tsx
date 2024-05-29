/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import VideoModal from '.';

describe('Modal component', () => {
  beforeEach(() => {
    render(<VideoModal buttonContent='Video about us' />);
  });

  it('opens and closes modal when clicking the button', () => {
    const openButton = screen.getByTestId('modal-button');
    fireEvent.click(openButton);

    const modalContent = screen.getByTestId('modal');
    expect(modalContent).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-modal-button');
    fireEvent.click(closeButton);

    expect(modalContent).not.toBeInTheDocument();
  });
});
