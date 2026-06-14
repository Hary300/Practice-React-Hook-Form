import { useState, type ChangeEvent, type FormEvent } from 'react';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialFormData: FormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

type FormDataError = {
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
};

const initialFormDataError: FormDataError = {
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
};

export default function ConfirmPassword() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormDataError);

  const handleChange =
    (key: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    const isEmailEmpty = !formData.email.trim();
    if (isEmailEmpty) {
      hasError = true;
      setFormDataError((prev) => ({
        ...prev,
        emailError: 'Email is required',
      }));
    } else {
      setFormDataError((prev) => ({ ...prev, emailError: '' }));
    }

    const isPasswordEmpty = !formData.password.trim();
    if (isPasswordEmpty) {
      hasError = true;
      setFormDataError((prev) => ({
        ...prev,
        passwordError: 'Password is required',
      }));
    } else {
      setFormDataError((prev) => ({ ...prev, passwordError: '' }));
    }

    const isConfirmPasswordEmpty = !formData.confirmPassword.trim();
    const isPasswordsDifferent =
      formData.password.trim() !== formData.confirmPassword.trim();

    if (isConfirmPasswordEmpty) {
      hasError = true;
      setFormDataError((prev) => ({
        ...prev,
        confirmPasswordError: 'Confirm password is required',
      }));
    } else if (isPasswordsDifferent) {
      hasError = true;
      setFormDataError((prev) => ({
        ...prev,
        confirmPasswordError: 'Passwords do not match',
      }));
    } else {
      setFormDataError((prev) => ({ ...prev, confirmPasswordError: '' }));
    }

    if (hasError) return;
    console.log('Login successfully');
    console.log(formData);
  };
  return (
    <form onSubmit={handleFormSubmit} className='wrapper'>
      <h2>Level 0.6 Confirm Password</h2>
      <input
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange('email')}
      />
      {formDataError.emailError && (
        <p className='error-text'>{formDataError.emailError}</p>
      )}

      <input
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange('password')}
      />
      {formDataError.passwordError && (
        <p className='error-text'>{formDataError.passwordError}</p>
      )}

      <input
        type='password'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
      />
      {formDataError.confirmPasswordError && (
        <p className='error-text'>{formDataError.confirmPasswordError}</p>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
}
