import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (!user) return null;

  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          background: '#121212',
          padding: 40,
          borderRadius: 12,
          boxShadow: '0 0 15px rgba(0,0,0,0.4)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>
          Welcome, {user.displayName || 'User'}!
        </h1>
        <p style={{ marginBottom: 8 }}>Email: {user.email}</p>
        <button
          onClick={handleLogout}
          style={{
            background: '#e11d48',
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
