import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor, configure } from '@testing-library/react';
import { FormLogin } from 'components/form';
import { messages } from 'app/messages';

configure({testIdAttribute: 'data-test-id'});

test('Test - FormLogin elements present', () => {
  render(
    <FormLogin
      // apiRequest={()=>{console.log("")}}
    />
  );
  expect(screen.getByRole('formLoginEmail')).toBeInTheDocument();
  expect(screen.getByRole('formLoginPassword')).toBeInTheDocument();
  expect(screen.getByRole('formLoginButtonSubmit')).toBeInTheDocument();
});


test('Test - FormLogin fields validation', async () => {
  render(
    <FormLogin
      // apiRequest={()=>{console.log("")}}
    />
  );
  fireEvent.click(screen.getByRole('formLoginButtonSubmit'));
  const emailError = await screen.findByText(messages.email.required);
  const passwordError = await screen.findByText(messages.requiredPassword);
  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});