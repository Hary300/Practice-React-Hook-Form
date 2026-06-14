import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function FormSubmit() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Login Success');
    console.log({ email, password });
  }
  return (
    <form onSubmit={handleFormSubmit} className='wrapper'>
      <h2>Level 0.3 Form Submit</h2>

      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
