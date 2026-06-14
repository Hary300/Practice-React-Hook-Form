import { useState, type ChangeEvent } from 'react';

export default function ManyInputs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <div className='wrapper'>
      <h2>level 0.2 Many Inputs</h2>

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

      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}
