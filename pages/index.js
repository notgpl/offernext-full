import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/config'; // Adjust path if needed
import LoginForm from '../components/LoginForm'; // If you created a component
// Or you can directly paste the form JSX here

export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard'); // redirect if already logged in
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Offernext</h1>
        <LoginForm />
        {/* If you're not using a component, put your login form here */}
      </div>
    </div>
  );
}
