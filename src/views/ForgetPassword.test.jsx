import { test, it } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ForgetPassword from './ForgetPassword';

test('ForgetPassword Component', () => {
  it('renders the component', () => {
    const { getByText, getByLabelText } = render(<ForgetPassword />);
    expect(getByText('فراموشی رمز عبور')).toBeInTheDocument();
    expect(getByLabelText('ایمیل خود را وارد کنید')).toBeInTheDocument();
  });

  it('updates state on email input change', () => {
    const { getByLabelText } = render(<ForgetPassword />);
    const emailInput = getByLabelText('ایمیل خود را وارد کنید');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('displays error message for invalid email format', () => {
    const { getByLabelText, getByText } = render(<ForgetPassword />);
    const emailInput = getByLabelText('ایمیل خود را وارد کنید');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(getByText('!قالب ایمیل قابل قبول نیست')).toBeInTheDocument();
  });

  it('submits the form on button click', () => {
    const { getByText } = render(<ForgetPassword />);
    const submitButton = getByText('ثبت ایمیل');
    fireEvent.click(submitButton);
  });
});
