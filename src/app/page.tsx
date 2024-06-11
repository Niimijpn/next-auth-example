import Image from "next/image";
import Link from "next/link";
import Auth from "@/components/auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Next Auth with Next.js</h1>
      <Auth />
    </main>
  );
}
