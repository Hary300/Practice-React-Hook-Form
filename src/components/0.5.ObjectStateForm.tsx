import { useState, type ChangeEvent, type FormEvent } from 'react';

type FormData = {
  email: string;
  password: string;
};

export default function ObjectStateForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState({
    emailError: '',
    passwordError: '',
  });

  function handleChange(key: keyof FormData, e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [key]: e.target.value });
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let hasError = false;
    if (!formData.email.trim()) {
      hasError = true;
      setFormError((prev) => ({ ...prev, emailError: 'Email is required' }));
    } else {
      setFormError((prev) => ({ ...prev, emailError: '' }));
    }

    if (!formData.password.trim()) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        passwordError: 'Password is required',
      }));
    } else {
      setFormError((prev) => ({ ...prev, passwordError: '' }));
    }

    if (hasError) return;
    console.log('Login Successfully');
    console.log(formData);
  }

  return (
    <form onSubmit={handleFormSubmit} className='wrapper'>
      <h2>Level 0.5 Object State Form</h2>
      <input
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(e) => handleChange('email', e)}
      />

      {formError.emailError && (
        <p className='error-text'>{formError.emailError}</p>
      )}
      <input
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={(e) => handleChange('password', e)}
      />
      {formError.passwordError && (
        <p className='error-text'>{formError.passwordError}</p>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
}
