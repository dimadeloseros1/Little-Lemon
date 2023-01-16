import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Booking } from './Booking';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

test('form submits with correct data', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
        <Booking />
    </MemoryRouter>
  );

  const nameInput = getByPlaceholderText('name');
  const surnameInput = getByPlaceholderText('Surname');
  const emailInput = getByPlaceholderText('John@....');
  const form = getByText('Submit');

  act(() => {
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  });

  fireEvent.submit(form);

  expect(nameInput.value).toBe('John');
  expect(surnameInput.value).toBe('Doe');
  expect(emailInput.value).toBe('john.doe@example.com');
});
