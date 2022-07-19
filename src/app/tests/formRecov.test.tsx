import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormRecov } from 'components/form';
import { messages } from 'app/messages';

test('Test - FormRecov elements present', () => {
  render(
    <FormRecov
      // apiRequest={()=>{console.log("")}}
    />
  );
  expect(screen.getByRole('formRecovEmail')).toBeInTheDocument();
  expect(screen.getByRole('formRecovButtonSubmit')).toBeInTheDocument();
});

test('Test - FormRecov validation', async () => {
  render(
    <FormRecov
      // apiRequest={()=>{console.log("")}}
    />
  );
  fireEvent.click(screen.getByRole('formRecovButtonSubmit'));
  const emailError = await screen.findByText(messages.email.required);
  expect(emailError).toBeInTheDocument();
})