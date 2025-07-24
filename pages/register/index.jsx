'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        createdAt: serverTimestamp(),
      });

      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save to Firestore (if new)
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName || 'Google User',
        email: user.email,
        createdAt: serverTimestamp(),
      });

      router.push('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="bg-[#121212] p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 bg-[#1f1f1f] rounded border border-gray-700 focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4 transition"
        >
          Register with Email
        </button>

        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded transition"
        >
          Register with Google
        </button>
      </div>
    </div>
  );
}
