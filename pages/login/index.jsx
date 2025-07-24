'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="bg-[#121212] p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 bg-[#1f1f1f] rounded border border-gray-700 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 bg-[#1f1f1f] rounded border border-gray-700 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginWithEmail}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4 transition"
        >
          Login with Email
        </button>

        <button
          onClick={loginWithGoogle}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
