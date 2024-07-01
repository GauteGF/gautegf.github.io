'use client';
import { Link } from '@chakra-ui/next-js'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Test</h1>
      <Link href='../' color='blue.400' _hover={{ color: 'blue.500' }}>
      Profile
    </Link>
    </main>
  );
}
