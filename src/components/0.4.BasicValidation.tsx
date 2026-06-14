import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function BasicValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let hasError = false;

    if (!email.trim()) {
      hasError = true;
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      hasError = true;
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    console.log('Login Successfully');
    console.log({ email, password });
  }
  return (
    <form onSubmit={handleFormSubmit} className='wrapper'>
      <h2>Level 0.4 Basic Validation</h2>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className='error-text'>{emailError}</p>}
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <p className='error-text'>{passwordError}</p>}
      <button type='submit'>Submit</button>
    </form>
  );
}
