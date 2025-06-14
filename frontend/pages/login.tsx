import React from 'react';
import Button from '../components/Button';

export default function Login() {
  const handleLogin = () => alert('Login flow (dummy)');

  return (
    <div className="flex justify-center items-center h-96">
      <Button onClick={handleLogin}>Sign in (Dummy)</Button>
    </div>
  );
}