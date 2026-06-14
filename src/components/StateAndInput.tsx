import { useState } from 'react';

export default function StateAndInput() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1>State and Input</h1>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Hello {username}</p>
    </div>
  );
}
