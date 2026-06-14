import { useState } from 'react';

export default function StateAndInput() {
  const [username, setUsername] = useState('');

  return (
    <div className='wrapper'>
      <h2>level 0.1 State and Input</h2>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Hello {username}</p>
    </div>
  );
}
