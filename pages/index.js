import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8 gap-8`}
    >
      <h1 className="text-4xl font-bold">Welcome to Offernext</h1>
      <p className="text-gray-400 text-lg">Get started by logging in or registering</p>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
